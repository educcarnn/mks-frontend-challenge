import { useState } from "react";
import { HeaderContainer, LogoDiv, Logo, LogoSecond, CardItem, CartIcon, CartCount } from "./style";
import CartDrawer from "../../cart/cartDrawer";
import { useCart } from "../../../context/cartContext";
import Cart from "../../../assets/cart-icon.svg";


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
