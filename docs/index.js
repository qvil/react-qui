import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../build";

const App = () => (
  <div>
    <h1>React App!</h1>
    <Button>Button</Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
