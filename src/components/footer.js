import React from "react";
import logo from "../img/logo-green-2x.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Full logo" className="footer__logo"></img>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">
                  Conditions
                </a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="/#" className="footer__link">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p class="footer__copyright">
            Built by{" "}
            <a href="/#" className="footer__link">
              Sid
            </a>
            &nbsp; You can also checkout his
            <a href="/#" className="footer__link">
              &nbsp; Portfolio
            </a>
            . Copyright &copy;2020. This website is designed for practice
            purposes. Read all scheme related queries
          </p>
        </div>
      </div>
    </footer>
  );
};
