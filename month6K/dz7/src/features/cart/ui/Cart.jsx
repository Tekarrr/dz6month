import React, { useEffect } from "react";
import { useCartStore } from "../model/useCartStore";
import { Avatar, Card, Col, Row, Button } from "antd";

const { Meta } = Card;

const Cart = () => {
  const { cart, fetchCartFromApi, deleteFromCart } = useCartStore();
  console.log(cart);

  useEffect(() => {
    fetchCartFromApi();
  }, []);

  return (
    <div className="cartWrapper">
      <h2>My Cart</h2>
      <Row gutter={[16, 16]}>
        {cart?.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={
                item.product.image ? (
                  <img
                    alt=""
                    src={item.product.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      height: 200, // исправлено
                      background: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#999",
                    }}
                  >
                    No image
                  </div>
                )
              }
            >
              <Meta
                avatar={
                  <Avatar>
                    {item.product.user?.username?.[0]?.toUpperCase() || "U"}
                  </Avatar>
                }
                title={item.product.title}
                description={
                  <>
                    <p>{item.product.description}</p>
                    <p style={{ marginTop: 8, fontSize: 12, color: "#888" }}>
                      Category: <b>{item.product.categories?.title || "-"}</b>
                    </p>
                    <p style={{ fontSize: 12, color: "#888" }}>
                      Quantity: <b>{item.quantity}</b>
                    </p>
                  </>
                }
              />
              <Button
                style={{ marginTop: 10 }}
                onClick={() => deleteFromCart(item.productId)}
              >
                Удалить
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cart;
