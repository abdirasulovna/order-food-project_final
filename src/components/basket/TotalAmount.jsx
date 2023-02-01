import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";

const TotalAmount = ({ price, showBasketHandler, onOrder }) => {
  const orderButton =
    price > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrice = price.toFixed(2);
  return (
    <Container>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>

      <ActionButtonsContainer>
        <Button variant="outlined" onClick={showBasketHandler}>
          Close
        </Button>
        {orderButton}
      </ActionButtonsContainer>
    </Container>
  );
};

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActionButtonsContainer = styled.div`
  margin-top: 24px;
  gap: 14px;
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  padding-top: 30px;
`;
