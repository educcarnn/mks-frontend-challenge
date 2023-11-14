import styled from "styled-components";
import useProductList from "../../hooks/useProducts";
import { Product } from "../../hooks/useProducts";
import { useCart } from "../../context/cartContext";
import ShoppingBag from "../../assets/shopping-bag.svg";
interface ProductListProps {}

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const ProductNamePrice = styled.div`
  display: flex;
  gap: 10%;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  flex-wrap: nowrap;
  justify-content: space-around;
  .padding {
    background: #373737;
    padding: 8px;
    color: white;
    border-radius: 8px;
  }
`;

const ProductListUl = styled.ul`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const ProductListItem = styled.li`
  margin: 16px;
  text-align: center;
  padding: 16px;
  border-radius: 8px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

  .text {
    font-size: 12px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 80%;
  }
`;


const ProductButton = styled.button`
  display: flex;
  background-color: #0f52ba;
  color: white;
  width: 100%;
  height: 32px;
  border-radius: 0 0 10px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  .image {
    width: 16px;
    height: 16px;
    margin: 0px;
  }
`;

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
    <ProductListContainer>
      <ProductListUl>
        {products.products.map((product: Product) => (
          <ProductListItem key={product.id}>
            <img src={product.photo} alt={product.name} />
            <ProductNamePrice>
              <h3>{product.name}</h3>
              <strong className="padding">R${product.price}</strong>
            </ProductNamePrice>

            <p className="text">{product.description}</p>

            <ProductButton
              onClick={() =>
                addItem({
                  id: product.id,
                  photo: product.photo,
                  name: product.name,
                  quantity: 1,
                  price: parseFloat(product.price),
                })
              }
            >
              <img src={ShoppingBag} alt={ShoppingBag} className="image" />
              COMPRAR
            </ProductButton>
          </ProductListItem>
        ))}
      </ProductListUl>
    </ProductListContainer>
  );
};

export default ProductList;
