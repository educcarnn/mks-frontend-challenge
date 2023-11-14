import styled from "styled-components";

export const StyledDrawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
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

export const CloseButton = styled.button`
  background-color: #000000;
  border-radius: 100%;

  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
`;

export const CartItem = styled.li`
  margin-bottom: 16px;
  background-color: white;
  display: flex;
  flex-direction: row;
  gap: 5%;
  padding: 24px;
  width: 100%;
  border-radius: 8px;

  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;

  .image {
    width: 50px;
    height: 50px;
  }
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  margin: 0 8px;
`;

export const CardName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 10%;
  gap: 70%;
`;

export const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const CheckoutButton = styled.button`
  background: #000000;

  color: white;
  padding: 10px;
  height: 100px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const CartTexts = styled.div`
  display: flex;
  height: 50%;
  font-size: 24px;
  color: white;
  flex-direction: row;
  justify-content: space-around;
`;

export const RemoveButton = styled.button`
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

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const QuantityItem = styled.div`
  display: flex;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 2px;
`;

export const QuantityBar = styled.div`
  height: 100%;
  width: 1px;
  background-color: #bfbfc0;
  position: absolute;
`;

export const LeftQuantityBar = styled(QuantityBar)`
  left: -6px;
`;

export const RightQuantityBar = styled(QuantityBar)`
  right: -6px;
`;
