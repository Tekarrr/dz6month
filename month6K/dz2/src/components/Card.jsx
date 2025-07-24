import { Card } from "antd";


const CardBody = ({  title, body }) => {
  

  return (
    <Card
      style={{width: 300 }}
    >
      <h2>{title}</h2>
      <p style={{fontSize: "16px"}}>{body}</p>
    </Card>
  )
}

export default CardBody;