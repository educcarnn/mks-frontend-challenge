import  { useState } from 'react';
import styled from 'styled-components';
import CartDrawer from '../cart/cartDrawer';

const HeaderContainer = styled.header`
  background: #0F52BA;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.h1`
  color: #FFF;
  font-size: 24px;
  margin: 0;
`;

const CartIcon = styled.div`
  color: #FFF;
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
      <Logo>MKS Sistemas</Logo>
      <CartIcon onClick={handleCartClick}>🛒</CartIcon>
      {isCartOpen && <CartDrawer />} {/* Renderiza o carrinho apenas se estiver aberto */}
    </HeaderContainer>
  );
};

export default Header;
