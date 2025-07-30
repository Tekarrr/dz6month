import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useCollectionStore } from "../../pages/collection/model/useCollection";

const CardComp = ({ title, img, stats }) => {
  const { collection, addToCollection, removeFromCollection, isInCollection } =
    useCollectionStore();
  console.log(collection);

  return (
    <Card
      style={{ width: 300, backgroundColor: "#cdd6e4ff" }}
      cover={<img alt="example" src={img} />}
      actions={
        !isInCollection(title)
          ? [
              <PlusOutlined
                key="add"
                onClick={() => addToCollection({ title, img, stats })}
              />,
            ]
          : [
              <MinusOutlined
                key="remove"
                onClick={() => removeFromCollection({ title, img, stats })}
              />,
            ]
      }
    >
      <Meta style={{ textAlign: "center", color: "white" }} title={title} />
    </Card>
  );
};

export default CardComp;
