import React from "react";
// import { FaGlobe } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { FaCompass } from "react-icons/fa";
// import { FaCamera } from "react-icons/fa";
import safety from "../img/safety.svg";
import transparency from "../img/transparency.svg";
import reliability from "../img/reliability.svg";

export const Features = () => {
  return (
    <section className="section-features">
      <div className="row" style={{ width: "60%" }}>
        <div className="col-1-of-3 ">
          <div className="feature-box">
            <div className="feature-box__icon u-margin-bottom-small">
              <img src={safety} alt ="safety" size="6rem" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">Safety</h3>
            <p className="feature-box__text">
              Drivers are fingerprinted & must pass FBI, DOJ and DMV background
              checks.
            </p>
          </div>
        </div>
        <div className="col-1-of-3 ">
          <div className="feature-box">
            <div className="feature-box__icon u-margin-bottom-small">
              <img src={transparency} alt="transparency" size="6rem" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              transparency
            </h3>
            <p className="feature-box__text">
              Parents can track rides in real time. Prior to the ride, parents
              can view the driver’s profile.
            </p>
          </div>
        </div>
        <div className="col-1-of-3 ">
          <div className="feature-box">
            <div className="feature-box__icon u-margin-bottom-small">
              <img src={reliability} alt="reliability"size="6rem" />
            </div>
            <h3 className="heading-tertiary u-margin-bottom-small">
              reliability
            </h3>
            <p className="feature-box__text">
              We take pride in our punctuality and our ability to complete all
              rides booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
