import { useState } from "react";
import styled from "styled-components";
import CartDrawer from "../../cart/cartDrawer";
import { useCart } from "../../../context/cartContext";
import Cart from "../../../assets/cart-icon.svg";

const HeaderContainer = styled.header`
  background: #0f52ba;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  gap: 5%;
  align-items: flex-end;
`;

const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  display: flex;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const LogoSecond = styled.div`
  color: white;
`;

const CartIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CardItem = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  width: 5%;
  .image {
    width: 16px;
    height: 16px;
    margin: 0;
  }
`;

const CartCount = styled.strong`
  color: black;
`;

const Header = () => {
  const { totalQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <HeaderContainer>
      <LogoDiv>
        <Logo>MKS</Logo>
        <LogoSecond>Sistemas</LogoSecond>
      </LogoDiv>
      <CardItem>
        <CartIcon onClick={handleCartClick}>
          <img src={Cart} alt={Cart} className="image" />
          {totalQuantity > 0 && <CartCount>{totalQuantity}</CartCount>}
        </CartIcon>
      </CardItem>
      {isCartOpen && <CartDrawer />}{" "}
    </HeaderContainer>
  );
};

export default Header;
