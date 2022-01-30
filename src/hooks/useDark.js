import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const useDark = () => {
  return useContext(ThemeContext);
};

export default useDark;
