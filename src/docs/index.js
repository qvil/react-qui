import React from "react";
import ReactDOM from "react-dom";
import Button from "../lib/Button";

const App = () => (
  <div>
    <h1>React QUI</h1>
    <Button text="click!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
