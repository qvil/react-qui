import React from "react";

export default function Button({ children }, ...others) {
  return <button {...others}>{children}</button>;
}
