import React, { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

export function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}

export default PageContent;
