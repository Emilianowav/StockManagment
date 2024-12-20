import React, { useState } from "react";
import styles from "./FilterBar.module.css";
import { FaRedoAlt } from 'react-icons/fa';  // Ícono de reciclaje para reiniciar filtros

interface FilterBarProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  category?: string;
  status?: string;
  priceRange?: [number, number];
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState<[number, number] | undefined>();

  const handleApplyFilters = () => {
    onFilterChange({ category, status, priceRange });
  };

  const handleResetFilters = () => {
    setCategory(undefined);
    setStatus(undefined);
    setPriceRange(undefined);
    onFilterChange({});  // Llama a onFilterChange con filtros vacíos
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectors}>
        <div className={styles["select-wrapper"]}>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className={styles.select}>
            <option className={styles.option} value="">Selecciona una categoría</option>
            <option className={styles.option} value="Electrónica">Electrónica</option>
            <option className={styles.option} value="Hogar">Hogar</option>
            <option className={styles.option} value="Ropa">Ropa</option>
          </select>
        </div>
        <div className={styles["select-wrapper"]}>
          <select onChange={(e) => setStatus(e.target.value)} value={status} className={styles.select}>
            <option className={styles.option} value="">Selecciona un estado</option>
            <option className={styles.option} value="Disponible">Disponible</option>
            <option className={styles.option} value="Agotado">Agotado</option>
          </select>
        </div>
      </div>

      <div className={styles.range}>
        <input
          type="number"
          placeholder="Precio mínimo"
          onChange={(e) => setPriceRange([+e.target.value, priceRange?.[1] || 0])}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          onChange={(e) => setPriceRange([priceRange?.[0] || 0, +e.target.value])}
          className={styles.input}
        />
      </div>

      <div className={styles.actions}>
        <button onClick={handleApplyFilters} className={styles.button}>Aplicar filtros</button>
        <button onClick={handleResetFilters} className={styles.resetButton}>
          <FaRedoAlt size={16} /> {/* Ícono de reciclaje */}
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
