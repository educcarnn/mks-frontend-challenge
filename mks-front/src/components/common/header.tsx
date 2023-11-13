import { useState } from "react";
import styled from "styled-components";
import CartDrawer from "../cart/cartDrawer";

const HeaderContainer = styled.header`
  background: #0f52ba;
  padding: 32px;
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
  
`

const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

const LogoSecond = styled.div`
  color: white;
`
const CartIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
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
      <CartIcon onClick={handleCartClick}>🛒</CartIcon>
      {isCartOpen && <CartDrawer />}{" "}

    </HeaderContainer>
  );
};

export default Header;
