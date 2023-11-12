// src/hooks/useProductList.ts
import { useQuery, UseQueryResult } from 'react-query';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductsResponse {
  products: Product[];
}

const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC');
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos.');
  }
  return response.json();
};

const useProductList = (): UseQueryResult<ProductsResponse, Error> => {
  return useQuery('products', fetchProducts);
};

export default useProductList;


