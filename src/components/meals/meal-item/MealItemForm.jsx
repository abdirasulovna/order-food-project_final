import React from "react";
import styled from "styled-components";
import { Button } from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus-icons.svg";
import { useState } from "react";
import { addToBasket } from "../../../store/basket/basketReducer";
import { useDispatch } from "react-redux";

const MealItemForm = ({ id, title, price }) => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };

    dispatch(addToBasket(basketItem));
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Container>
        <StyledInputContainer>
          <label htmlFor={id}>Amount</label>
          <input
            value={amount}
            onChange={amountChangeHandler}
            max={5}
            min={0}
            type="number"
            id={id}
          />
        </StyledInputContainer>
      </Container>
      <Button>
        <StyledIcon />
        Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;
const Container = styled.div`
  margin-bottom: 15px;
`;
const StyledInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
  label {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-right: 20px;
    color: #222222;
  }
  input {
    background: #ffffff;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    padding: 4px 12px;
    outline: none;
    color: #222222;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
