import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const MealItem = ({ item }) => {
  return (
    <Container>
      <StyledItemInfo>
        <StyledTitle>{item.title}</StyledTitle>
        <span>{item.description}</span>
        <p>${item.price}</p>
      </StyledItemInfo>
      <MealItemForm id={item._id} title={item.title} price={item.price} />
    </Container>
  );
};

export default MealItem;

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
  text-align: start;
`;


const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 24px;
  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;


const StyledItemInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-top: 4px;
    text-align: start;
  }
  span {
    color: #ad5502;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 4px;
  }
`;
