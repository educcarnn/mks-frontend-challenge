import { useState } from "react";
import { StyledDrawer, TotalSection, CheckoutButton, CartTexts, CartItem, RemoveButton, QuantityItem, QuantityButton, QuantityWrapper, RightQuantityBar, LeftQuantityBar, CardName, CloseButton } from "./style";
import { useCart } from "../../context/cartContext";

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
            <img src={item.photo} alt={item.name} className="image"/>
            <span>{item.name}</span>

            <div>
              <span>Qtd:</span>
              <QuantityItem>
                <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </QuantityButton>
                <QuantityWrapper>
                  <LeftQuantityBar />
                  <span>{item.quantity}</span>
                  <RightQuantityBar />
                </QuantityWrapper>
                <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </QuantityButton>
              </QuantityItem>
            </div>

            <strong>R$ {(item.price * item.quantity).toFixed(2)}</strong>
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
