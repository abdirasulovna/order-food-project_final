import React from "react";
import styled from "styled-components";

const SummaryInfoCard = () => {
  return (
    <Card>
      <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Card>
  );
};

export default SummaryInfoCard;

const Card = styled.div`
  text-align: center;
  margin: -195px auto auto;
  background-color: #383838;
  border-radius: 14px;
  position: relative;
  box-shadow: 0 1px 18px 10px rgb(0 0 0 / 25%);
  width: 854px;
  height: 270px;
  color: #fff;
  display: grid;
  align-items: center;
  padding: 1rem;
`;
const StyledTitle = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 0em;
  text-align: left;

  /* font-family: Manrope;
  font-size: 36px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left; */
`;
