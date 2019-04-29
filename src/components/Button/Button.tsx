import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  ${({
    theme: {
      color: { primary, primaryHover }
    }
  }) => `
  background: ${primary};
  &:hover {
    background: ${primaryHover};
  }
  `};
`;

export default function Button({ children }: any, ...others: any) {
  return <StyledButton {...others}>{children}</StyledButton>;
}
