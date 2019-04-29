import * as React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import theme from "../styles/theme";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const App = (props: HelloProps) => (
  <ThemeProvider theme={theme}>
    <>
      <p>
        Hello from {props.compiler} and {props.framework}!
      </p>
      <Button>Button</Button>
    </>
  </ThemeProvider>
);
