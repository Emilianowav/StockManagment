"use client"
import React, { useState } from "react";
import Modal from "./modal";  // Importamos el modal
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Función para manejar el envío del formulario
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí se podría agregar validación adicional
    if (!username || !password) {
      setError("Por favor ingrese usuario y contraseña.");
      return;
    }

    try {
      // Realizar la solicitud al backend (por ejemplo, una API REST)
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Aquí puedes manejar lo que pasa si el login es exitoso
        console.log("Login exitoso", data);
        toggleModal(); // Cierra el modal si el login es exitoso
      } else {
        setError(data.message || "Error en el login.");
      }
    } catch (error) {
      setError("Hubo un error en la solicitud.");
    }
  };

  return (
    <>
      <button className={styles.loginButton} onClick={toggleModal}>
        Iniciar sesión
      </button>
      {isModalOpen && (
        <Modal closeModal={toggleModal}>
          <div className={styles.modalContent}>
            <h2>Iniciar sesión</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                className={styles.input}
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className={styles.button} type="submit">Entrar</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LoginButton;
