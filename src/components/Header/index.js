import React from "react";
import "./Header.scss";
import Logo from "./JadeLogo.svg";

function Header() {
  return (
    <div className="Header">
      <img src={Logo}></img>
    </div>
  );
}

export default Header;
