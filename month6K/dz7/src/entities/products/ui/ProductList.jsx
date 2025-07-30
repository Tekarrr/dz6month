import { Avatar, Button, Card, Col, Row } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../model/useProductStore";
import { fetchProducts } from "../api/useApi";
import { useCartStore } from "../../../features/cart/model/useCartStore";
import { Link } from "react-router-dom";

const { Meta } = Card;
const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const addToCart = useCartStore((state) => state.addToCart);

  console.log("Products:", data);

  return (
    <div>
      <Link to={"/products/create"}>
        <Button>Добавить продукт</Button>
      </Link>

      <Row gutter={[16, 16]}>
        {data?.data?.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={
                product.image ? (
                  <img
                    alt=""
                    src={product.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      heigth: 200,
                      background: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#999",
                    }}
                  >
                    {" "}
                    No image
                  </div>
                )
              }
            >
              <Meta
                avatar={
                  <Avatar>{product.user?.username?.[0]?.toUpperCase()}</Avatar>
                }
                title={product.title}
                description={
                  <>
                    <p>{product.description}</p>
                    <p style={{ marginTop: 8, fontsize: 12, color: "#888" }}>
                      Category: <b>{product.categories?.title || "-"}</b>
                    </p>
                    <p style={{ marginTop: 4, fontsize: 12, color: "#888" }}>
                      Seller: <b>{useProductStore.user?.username}</b>
                    </p>
                  </>
                }
              />
              <Link to={`/products/${product.id}/edit`}>
                <Button type="link">Редактировать</Button>
              </Link>
              <Button
                onClick={() =>
                  addToCart({ productId: product.id, quantity: "1" })
                }
              >
                add to cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductList;
