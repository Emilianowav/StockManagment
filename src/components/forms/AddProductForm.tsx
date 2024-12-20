// AddProductForm.tsx
import React, { useState } from 'react';
import styles from './AddProductForm.module.css';
import Button from '../buttons/MenuButton';

interface ProductFormProps {
  onSave: (productData: ProductData) => void;
}

interface ProductData {
  name: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
  supplier: string;
  status: 'available' | 'outOfStock'; // Estado del producto
}

const ProductForm: React.FC<ProductFormProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');

  // Lógica para determinar el estado basado en el stock
  const getStatus = (quantity: number): 'available' | 'outOfStock' => {
    return quantity > 0 ?  'available' : 'outOfStock';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const status = getStatus(quantity); // Determinamos el estado del producto

    const productData: ProductData = {
      name,
      quantity,
      price,
      description,
      category,
      supplier,
      status, // Asignamos el estado calculado
    };

    onSave(productData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nombre del producto</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del producto"
          required
          className={styles.input}
        />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="quantity" className={styles.label}>Stock actual</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Cantidad"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price" className={styles.label}>Precio</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Precio"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category" className={styles.label}>Categoría</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.input}
          required
        >
          <option value="">Selecciona una categoría</option>
          <option value="electronics">Electrónica</option>
          <option value="clothing">Ropa</option>
          <option value="food">Alimentos</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="supplier" className={styles.label}>Proveedor</label>
        <input
          id="supplier"
          type="text"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          placeholder="Proveedor"
          className={styles.input}
        />
      </div>

      <Button text="Guardar" type="submit" className={styles.button} icon={<i className="fas fa-save"></i>} onClick={() => {}} />
    </form>
  );
};

export default ProductForm;
