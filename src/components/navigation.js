import React from "react";

export const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        class="navigation__checkbox"
        id="navi-toggle"
      ></input>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span class="navigation__icon"></span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul className="navigation__list">
          <li class="navigation__item">
            <a href="/#" className="navigation__link">
              <span>01</span>About us
            </a>
          </li>
          <li class="navigation__item">
            <a href="/#" className="navigation__link">
              <span>02</span>Your Benefits
            </a>
          </li>
          <li class="navigation__item">
            <a href="/#" className="navigation__link">
              <span>03</span>Our Plans
            </a>
          </li>
          <li class="navigation__item">
            <a href="/#" className="navigation__link">
              <span>04</span> Testimonials
            </a>
          </li>
          <li class="navigation__item">
            <a href="/#" className="navigation__link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
