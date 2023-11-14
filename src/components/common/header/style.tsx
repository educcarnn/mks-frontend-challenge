import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #0f52ba;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  gap: 5%;
  align-items: flex-end;
`;

export const Logo = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoSecond = styled.div`
  color: white;
`;

export const CartIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardItem = styled.div`
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

export const CartCount = styled.strong`
  color: black;
`;
