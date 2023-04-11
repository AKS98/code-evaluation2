import React from "react";
import styled from "styled-components";

const Button = ({ type, children }) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
};

export default Button;
const ButtonContainer = styled.div`
  width: max-content;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  border-radius: 1.7rem;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: ${(props) => (props?.type === "submit" ? "green" : "#5A5A5A")};

  &:hover {
    background: ${(props) => (props?.type === "submit" ? "#90EE90" : "grey")};;
    color: #000;
    border-color: transparent;
  }
`;
