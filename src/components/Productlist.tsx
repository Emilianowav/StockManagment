import React from "react";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", quantity: 10 },
    { id: 2, name: "Mouse", quantity: 25 },
    { id: 3, name: "Keyboard", quantity: 5 },
    { id: 4, name: "Laptop", quantity: 10 },
    { id: 5, name: "Mouse", quantity: 25 },
    { id: 6, name: "Keyboard", quantity: 5 },
    { id: 7, name: "Laptop", quantity: 10 },
    { id: 8, name: "Mouse", quantity: 25 },
    { id: 9, name: "Keyboard", quantity: 5 },
    { id: 10, name: "Laptop", quantity: 10 },
    { id: 11, name: "Mouse", quantity: 25 },
    { id: 12, name: "Keyboard", quantity: 5 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id} className={styles.listItem}>
            {product.name} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
