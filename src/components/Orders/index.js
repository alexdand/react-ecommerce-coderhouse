import React from "react";
import { db } from "../../firebase";
import { List, Row } from "./styles.css";
import { byDate, formattedDate } from "./utils";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    db.collection("orders")
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
      .then(orders => setOrders(orders));
  }, []);

  return (
    <List>
      <Row>
        <span>ID</span>
        <span>Items</span>
        <span>Fecha</span>
        <span>Total</span>
      </Row>
      {[...orders].sort(byDate).map(order => (
        <Row key={order.id}>
          <span>{order.id}</span>
          <span>
            {order.items
              .map(({ count, item }) => `${item.name} (${count})`)
              .join(", ")}
          </span>
          <span>{formattedDate(order.date)}</span>
          <span>
            {order.items.reduce((sum, { item }) => sum + Number(item.price), 0)}
          </span>
        </Row>
      ))}
    </List>
  );
};

export default Orders;
