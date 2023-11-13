import { useState } from "react";
import styled from "styled-components";

import { useCart } from "../../context/cartContext";

const StyledDrawer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  background-color: #0f52ba;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
`;

const CartItem = styled.li`
  margin-bottom: 16px;
`;

const QuantityButton = styled.button`
  margin: 0 8px;
`;

const TotalSection = styled.div`
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const CartDrawer = () => {
  const { items, removeItem, updateItemQuantity } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleDecreaseQuantity = (itemId: number) => {
    const currentItem = items.find((item) => item.id === itemId);
    if (currentItem && currentItem.quantity > 0) {
      updateItemQuantity(itemId, -1);
    }
  };

  const handleIncreaseQuantity = (itemId: number) => {
    updateItemQuantity(itemId, 1);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    console.log("Compra finalizada!");
  };

  return (
    <StyledDrawer style={{ display: isDrawerOpen ? "block" : "none" }}>
      <h2>Carrinho de compras</h2>
      <CloseButton onClick={handleCloseDrawer}>Fechar</CloseButton>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
         
            <span>{item.name}</span>
            <span>Quantidade: {item.quantity}</span>
            <span>
              Preço Total: R$ {(item.price * item.quantity).toFixed(2)}
            </span>
            <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
              -
            </QuantityButton>
            <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
              +
            </QuantityButton>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </CartItem>
        ))}
      </ul>
      <TotalSection>
        <strong>Valor Total: R$ {calculateTotal().toFixed(2)}</strong>
      </TotalSection>
      <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
    </StyledDrawer>
  );
};

export default CartDrawer;
