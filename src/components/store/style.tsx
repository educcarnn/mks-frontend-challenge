import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const ProductNamePrice = styled.div`
  display: flex;
  gap: 10%;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  flex-wrap: nowrap;
  justify-content: space-around;
  .padding {
    background: #373737;
    padding: 8px;
    color: white;
    border-radius: 8px;
  }
`;

export const ProductListUl = styled.ul`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`;

export const ProductListItem = styled.li`
  margin: 16px;
  text-align: center;
  padding: 16px;
  border-radius: 8px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

  .text {
    font-size: 12px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 80%;
  }
`;


export const ProductButton = styled.button`
  display: flex;
  background-color: #0f52ba;
  color: white;
  width: 100%;
  height: 32px;
  border-radius: 0 0 10px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5%;
  .image {
    width: 16px;
    height: 16px;
    margin: 0px;
  }
`;