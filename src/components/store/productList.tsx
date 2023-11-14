import useProductList from "../../hooks/useProducts";
import { Product } from "../../hooks/useProducts";
import { useCart } from "../../context/cartContext";
import ShoppingBag from "../../assets/shopping-bag.svg";
import { isOmittedExpression } from "typescript";
import {
  ProductListItem,
  ProductListContainer,
  ProductListUl,
  ProductButton,
  ProductNamePrice,
} from "./style";

interface ProductListProps {}

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
