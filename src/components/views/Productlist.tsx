import React, { useState } from "react";
import DynamicTable from "../tables/DynamicTable";
import SearchBar from "../filters/SearchBar";
import FilterBar from "../filters/FilterBar";
import styles from "./ProductList.module.css";
import { FaFilter } from 'react-icons/fa';  // Usamos un ícono de filtro para el botón

const ProductList = () => {
  const allProducts = [
    { id: 1, name: "Laptop", category: "Electrónica", status: "Disponible", stock: 1, price: 1000 },
    { id: 2, name: "Mouse", category: "Electrónica", status: "Disponible", stock: 6, price: 25 },
    { id: 3, name: "Keyboard", category: "Electrónica", status: "Agotado", stock: 0, price: 50 },
    ...Array(50).fill({ id: 0, name: "Producto extra", category: "Otros", status: "Disponible", price: 1 }),
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false); // Estado para mostrar/ocultar filtros

  const columns: { key: string; label: string; type: "number" | "text" | "date" | "action"; sortable: boolean }[] = [
    { key: "id", label: "ID", type: "number", sortable: true },
    { key: "name", label: "Nombre del Producto", type: "text", sortable: true },
    { key: "category", label: "Categoría", type: "text", sortable: false },
    { key: "status", label: "Estado", type: "text", sortable: false },
    { key: "stock", label: "Stock", type: "number", sortable: true },
    { key: "price", label: "Precio", type: "number", sortable: true },
  ];

  const handleSearch = (term: string) => {
    const updated = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(updated);
  };

  const handleFilterChange = (filters: { category?: string; status?: string; priceRange?: [number, number] }) => {
    const updated = allProducts.filter((product) => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.status || product.status === filters.status) &&
        (!filters.priceRange ||
          (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]))
      );
    });
    setFilteredProducts(updated);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Productos</h2>
      <div className={styles.filters}>
        <SearchBar onSearch={handleSearch} />
        <button
          className={styles.filterButton}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter /> 
          <span className={styles.filterButtonText}>Filtros</span>
        </button>
        {showFilters && <FilterBar onFilterChange={handleFilterChange} />}
      </div>
      <DynamicTable
        columns={columns}
        data={filteredProducts}
        onActionClick={(actionKey, rowData) =>
          alert(`Acción ${actionKey} en producto: ${rowData.name}`)
        }
      />
    </div>
  );
};

export default ProductList;
