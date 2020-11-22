import { db } from "../../firebase";
import firebase from "firebase";

export const calculateTotal = products => {
  return products.reduce((sum, { item, count }) => {
    const subtotal = item.price * count;
    return sum + subtotal;
  }, 0);
};

export const createOrder = async productsInCart => {
  const totalSum = calculateTotal(productsInCart);
  const newOrder = {
    items: productsInCart,
    date: Date.now(),
    total: totalSum,
  };
  const orders = db.collection("orders");
  try {
    orders.add(newOrder);
    const itemQueryByManyId = await db
      .collection("products")
      .where(
        firebase.firestore.FieldPath.documentId(),
        "in",
        productsInCart.map(({ item }) => item.id)
      )
      .get();
    const items = itemQueryByManyId.docs;
    items.map((item, idx) => {
      const itemOrderQuantity = productsInCart[idx].count;
      if (item.data().stock - itemOrderQuantity > 0) {
        item.ref.update({
          stock: item.data().stock - productsInCart[idx].count,
        });
      }
      return null;
    });
  } catch (err) {
    console.log("Error creating order", err);
  }
};
