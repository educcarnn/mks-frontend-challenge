import styled from "styled-components";
import useProductList from "../../hooks/useProducts";
import { Product } from "../../hooks/useProducts";
import { useCart } from "../../context/cartContext";

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
  align-items: center;
`;

const ProductListItem = styled.li`
  margin: 10px;
  text-align: center;
`;

const ProductButton = styled.button`
  background-color: #0f52ba;
 width: 100%;
  height: 32px;
  border-radius: 0 0 10px 10px;
  
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
              <p className="padding">R${product.price}</p>
            </ProductNamePrice>
            <p>{product.brand}</p>
            <p>{product.description}</p>
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
              COMPRAR
            </ProductButton>
          </ProductListItem>
        ))}
      </ProductListUl>
    </ProductListContainer>
  );
};

export default ProductList;
