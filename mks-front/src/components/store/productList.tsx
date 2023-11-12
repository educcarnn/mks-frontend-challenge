
import useProductList from '../../hooks/useProducts';
import { Product } from '../../hooks/useProducts';
import { useCart } from '../../context/cartContext';

interface ProductListProps {

}

const ProductList = (props: ProductListProps) => {
  const { data: products, isLoading, isError } = useProductList();
  const { addItem } = useCart(); 

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !products) {
    return <p>Ocorreu um erro ao buscar os produtos.</p>;
  }

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
            <button onClick={() => addItem({ 
              id: product.id,
              name: product.name,
              quantity: 1, 
              price: parseFloat(product.price), 
            })}>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
