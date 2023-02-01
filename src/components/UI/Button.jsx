import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  variant = "contained",
  borderStyled = "rounded",
  ...restProps
}) => {
  return (
    <StyledButton
      {...restProps}
      variant={variant}
      borderStyle={borderStyled}
    >
      {children}
    </StyledButton>
  );
};

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#fffff";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06 ";
};

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : " #8a2b06 ";
};

const getRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : " 6px ";
};

const StyledButton = styled.button`
  background-color: ${getBackgroundColor};
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: ${getRadius};
  color: ${getColor};
  border: ${getBorder};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  :hover {
    color: white;
    background-color: #7e2a0a;
    path {
      stroke: white;
    }
  }
  :active {
    background: #993108;
  }
`;
