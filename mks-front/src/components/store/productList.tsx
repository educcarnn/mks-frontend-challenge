// src/components/store/ProductList.tsx
import React from 'react';
import useProductList from '../../hooks/useProducts';
import { Product } from '../../hooks/useProducts';

interface ProductListProps {
  // Adicione props conforme necessário
}

const ProductList = (props: ProductListProps) => {
  const { data: products, isLoading, isError } = useProductList();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !products) {
    return <p>Ocorreu um erro ao buscar os produtos.</p>;
  }
  console.log(products)
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.products.map((product: Product) => (
          <li key={product.id}>
            <img src={product.photo} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
