import { useState } from "react";
import styled from "styled-components";

import { useCart } from "../../context/cartContext";

const StyledDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  z-index: 1000;
  overflow: auto;
  .title {
    font-weight: bold;
    color: white;
    font-size: x-large;
  }
`;

const CloseButton = styled.button`
  background-color: #000000;
  border-radius: 100%;
  width: 10%;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
`;

const CartItem = styled.li`
      margin-bottom: 16px;
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 16px;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    align-items: center;
`;

const QuantityButton = styled.button`
  margin: 0 8px;
`;

const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  gap: 5rem;
  height: 10%;
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background: #000000;

  color: white;
  padding: 10px;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const CartTexts = styled.div`
  display: flex;
  height: 50%;
  font-size: 24px;
  color: white;
  flex-direction: row;
  justify-content: space-around;
`;

const RemoveButton = styled.button`
  background-color: black;
  border-radius: 100%;
  color: #fff;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  align-self: flex-start;
  margin-left: auto;
  margin-top: -30px;
    margin-right: -25px;

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
    <StyledDrawer style={{ display: isDrawerOpen ? "flex" : "none" }}>
      <CardName>
        <h2 className="title">Carrinho de compras</h2>
        <CloseButton onClick={handleCloseDrawer}>X</CloseButton>
      </CardName>

      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
           
            <img src={item.photo} alt={item.name} />
            <span>{item.name}</span>
            <div>
              <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
                -
              </QuantityButton>
              <span>Qtd: {item.quantity}</span>
              <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
                +
              </QuantityButton>
            </div>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            <RemoveButton onClick={() => removeItem(item.id)}>X</RemoveButton>
          </CartItem>
        ))}
      </ul>
      <TotalSection>
        <CartTexts>
          <strong>Total: </strong>
          <strong>R$ {calculateTotal().toFixed(2)}</strong>
        </CartTexts>

        <CheckoutButton onClick={handleCheckout}>
          Finalizar Compra
        </CheckoutButton>
      </TotalSection>
    </StyledDrawer>
  );
};

export default CartDrawer;
