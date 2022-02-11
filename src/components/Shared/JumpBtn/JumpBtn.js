import React, { useState } from "react";
import "./JumpBtn.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const JumpBtn = () => {
  const [btnValue, setBtnValue] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBtnValue(true);
    } else {
      setBtnValue(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <Link
      style={{ display: btnValue ? "block" : "none" }}
      onClick={scrollToTop}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="jump-link"
      title="GO TOP"
    >
      <AiOutlineArrowUp />
    </Link>
  );
};

export default JumpBtn;
