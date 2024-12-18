import React from "react";
import styles from "./Header.module.css";
import { FaBoxOpen } from "react-icons/fa";
//modulos
import LoginButton from "./Loginbutton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <FaBoxOpen className={styles.icon} />
        <span className={styles.title}>Stock Manager</span>
      </div>
      {/* <button className={styles.loginButton}>Log In</button> */}
      <LoginButton />
    </header>
  );
};

export default Header;
