import React from "react";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Логотип место" />
    </header>
  );
}
