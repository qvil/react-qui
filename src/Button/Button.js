import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
`;

const Button = ({ text, children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
