import React, { useContext } from "react";
import ThemeContext from "../../../utility/themeContext";

export default function Heading({ text }) {
  const { theme } = React.useContext(ThemeContext);
  return <h2 style={{ color: theme ? "white" : "black" }}>{text}</h2>;
}
