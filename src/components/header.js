import React from "react";
import logoWhite from "../img/logo-white.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo" className="header__logo"></img>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main"> schoolflare</span>
          <span className="heading-primary--sub">
            reliable student transformation
          </span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover Plans
        </a>
      </div>
    </header>
  );
};
