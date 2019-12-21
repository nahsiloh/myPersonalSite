import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link id="header__link" to="/">
        Home
      </Link>
      <p>|</p>
      <Link id="header__link" to="/portfolio">
        Portfolio
      </Link>
    </header>
  );
}

export default Header;
