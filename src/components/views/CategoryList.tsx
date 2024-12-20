import React from "react";
import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Stationery" },
    { id: 3, name: "Groceries" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Category List</h2>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category.id} className={styles.listItem}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
