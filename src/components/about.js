import React from "react";
import p1 from "../img/nat-1-large.jpg";
import p2 from "../img/nat-2-large.jpg";
import p3 from "../img/nat-3-large.jpg";

export const About = () => {
  return (
    <main>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Over 4,000 schools and districts contracted already
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary margin-bottom-small">
              Why use SchoolFlare?
            </h3>
            <p className="paragraph">
              Build the world’s largest and most-trusted platform for kids
              transportation and care. Student safety is paramount. That’s why
              Zūm has the most rigorous driver vetting program, including
              fingerprinting and complete background checks and vehicle
              certification.
            </p>
            <h3 className="heading-tertiary margin-bottom-small">
              Live Adventures like never before
            </h3>
            <p className="paragraph">
              Student safety is paramount. That’s why Zūm has the most rigorous
              driver vetting program, including fingerprinting and complete
              background checks and vehicle certification.
            </p>
            <a href="#" class="btn-text">
              Want SchoolFlare at your school &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={p1}
                alt="photo-1"
                className="composition__photo composition__photo--p1"
              ></img>
              <img
                src={p2}
                alt="photo-2"
                className="composition__photo composition__photo--p2"
              ></img>
              <img
                src={p3}
                alt="photo-3"
                className="composition__photo composition__photo--p3"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
