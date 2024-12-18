"use client"
import React, { useState } from "react";
import ProductList from "./Productlist";
import CategoryList from "./CategoryList";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [activeView, setActiveView] = useState("productList");

  const renderView = () => {
    switch (activeView) {
      case "productList":
        return <ProductList />;
      case "categoryList":
        return <CategoryList />;
      default:
        return <ProductList />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <button onClick={() => setActiveView("productList")} className={styles.button}>
          Product List
        </button>
        <button onClick={() => setActiveView("categoryList")} className={styles.button}>
          Category List
        </button>
      </div>
      <div className={styles.content}>{renderView()}</div>
    </div>
  );
};

export default Sidebar;
