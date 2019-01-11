import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
`;

export interface IButtonProps {
  text: string;
  children: any;
}

const Button = ({ text, children, ...rest }: IButtonProps) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
