import React from "react";
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
      <p>|</p>
      {Object.keys(headerTitleAndRoutes).map((title) => {
        return (
          <ul>
            <Link id="header__link" to={`/${headerTitleAndRoutes[title]}`}>
              {title}
            </Link>
            <p>|</p>
          </ul>
        );
      })}
    </header>
  );
}

export default Header;
