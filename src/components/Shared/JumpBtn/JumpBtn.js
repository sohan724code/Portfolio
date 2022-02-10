import React, { useState } from "react";
import "./JumpBtn.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const JumpBtn = () => {
  const [btnValue, setBtnValue] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBtnValue(true);
    } else {
      setBtnValue(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <a
      style={{ display: btnValue ? "block" : "none" }}
      href="#home"
      className="jump-link"
      title="GO TOP"
    >
      <AiOutlineArrowUp />
    </a>
  );
};

export default JumpBtn;
