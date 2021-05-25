import React from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const headerTitleAndRoutes = {
    HOME: "",
    WORK: "work",
    ARCHITECTURE: "architecture",
    PHOTOGRAPHY: "photography",
    ILLUSTRATIONS: "illustrations",
    FASHION: "fashion",
  };

  return (
    <header>
      <Link id="header__link" to="/">
        {/* <Link
        id="header__link"
        activeClass="active"
        to="homePage"
        spy={true}
        smooth={true}
      > */}
        Home
      </Link>
      <p>|</p>
      <Link id="header__link" to="/portfolio">
        {/* <Link id="header__link" to="portfolio" spy={true} smooth={true}> */}
        Portfolio
      </Link>
      <p>|</p>
      <Link id="header__link" to="/resume">
        {/* <Link id="header__link" to="resume" spy={true} smooth={true}> */}
        Resume
      </Link>
    </header>
  );
}

export default Header;
