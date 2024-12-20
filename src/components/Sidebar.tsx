"use client";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
// Componentes
import InfoPage from "./views/Info";
import ProductList from "./views/Productlist";
import CategoryList from "./views/CategoryList";
import AddProduct from "./views/AddProduct";
import Menu from "../components/menu/Menu";
import Logo from "./assets/Logo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const [activeView, setActiveView] = useState<string>("info");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // Estado para controlar la visibilidad del sidebar
  const userType: "admin" | "operador" | null = "admin";

  const renderView = () => {
    switch (activeView) {
      case "addProduct":
        return <AddProduct />;
      case "productList":
        return <ProductList />;
      case "categoryList":
        return <CategoryList />;
      case "info":
      default:
        return <InfoPage />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alternar entre abierto y cerrado
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
        <Menu userType={userType} onMenuSelect={setActiveView} activeView={activeView} />
        <Logo />
      </div>
      <div className={styles.content}>{renderView()}</div>

      {/* Botón de flecha para abrir/cerrar el sidebar */}
      <div
        className={`${styles.toggleButton} ${isSidebarOpen ? styles.toggleOpen : styles.toggleClosed}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FaArrowLeft className={styles.icon} />
        ) : (
          <FaArrowRight className={styles.icon} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
