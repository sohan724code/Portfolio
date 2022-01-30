import React from "react";
import "./Toggle.css";
import Sun from "../images/sun.png";
import Moon from "../images/night-mode.png";
import useDark from "../hooks/useDark";

const Toggle = () => {
  const { dark, setDark } = useDark();
  const handleClick = () => {
    setDark(!dark);
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: dark ? "0px" : "25px" }}
      ></div>
    </div>
  );
};

export default Toggle;
