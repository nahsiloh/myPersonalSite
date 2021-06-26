import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link
        id="header__link"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
      >
        Home
      </Link>
      <Link
        id="header__link"
        activeClass="active"
        to="aboutMe"
        spy={true}
        smooth={true}
      >
        About Me
      </Link>
      <Link id="header__link" to="workPage" spy={true} smooth={true}>
        Work
      </Link>
    </header>
  );
};

export default Header;
