// components/Menu.tsx
import React from 'react';
import { FaPlus, FaList, FaTags, FaCog, FaUser, FaChartBar } from 'react-icons/fa';
import Button from "../buttons/MenuButton"; // Importamos el botón modularizado
import styles from "./Menu.module.css";
import LogoutButton from '../buttons/LogoutButton';

interface ChangeMenuProps {
  userType?: "admin" | "operador" | null; // Tipo de usuario opcional
  onMenuSelect: (view: string) => void; // Callback para seleccionar vistas
  activeView: string; // Vista activa para aplicar estilos dinámicos
}

const Menu: React.FC<ChangeMenuProps> = ({ userType, onMenuSelect, activeView }) => {
  const menuOptions = {
    admin: [
      { id: "addProduct", label: "Agregar Producto", icon: <FaPlus /> },
      { id: "productList", label: "Lista de Productos", icon: <FaList /> },
      { id: "categoryList", label: "Lista de Categorías", icon: <FaTags /> },
      { id: "settings", label: "Configuraciones", icon: <FaCog /> },
      { id: "users", label: "Usuarios", icon: <FaUser /> },
    ],
    operador: [
      { id: "productList", label: "Lista de Productos", icon: <FaList /> },
      { id: "categoryList", label: "Lista de Categorías", icon: <FaTags /> },
      { id: "profile", label: "Perfil", icon: <FaUser /> },
      { id: "statistics", label: "Estadísticas", icon: <FaChartBar /> },
    ],
  };

  const options = menuOptions[userType || "admin"]; // Opciones por defecto si el tipo de usuario es indefinido

  // Simulamos una petición para obtener el nombre de usuario
  const username = "Emiliano"; // Este valor lo puedes reemplazar con una petición real

  return (
    <div className={styles.menu}>
      {/* Sección de bienvenida */}
      <div>
        <div className={styles.greetingContainer}>
          <p className={styles.greeting}>
            <strong> ¡Hola! {username} 😄</strong>
          </p>
        </div>

        {/* Opciones del menú */}
        {options.map((option) => (
          <Button
            key={option.id}
            text={option.label}
            onClick={() => onMenuSelect(option.id)}
            icon={option.icon} // Pasamos el icono
            isActive={activeView === option.id} // Pasamos si el botón está activo
          />
        ))}
      </div>

      {/* Botón de cerrar sesión */}
      <LogoutButton onLogout={() => onMenuSelect("logout")} />
    </div>
  );
};

export default Menu;
