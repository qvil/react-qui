import React from "react";
import styled from "styled-components";

const _Button = styled.button`
  background-color: red;
`;

const Button = ({ text, ...rest }) => <_Button {...rest}>{text}</_Button>;

export default Button;
