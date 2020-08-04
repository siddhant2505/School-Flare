import React from "react";
import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";
import video from "../img/video.mp4";
import videoSchool from "../img/video-school.webm";
import videoSchool1 from "../img/video-school1.webm";
import videow from "../img/video.webm";

export const Testimonials = () => {
  return (
    <section className="section-testimonials">
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={videoSchool1}></source>
          <source src={videow}></source>
          Your browser is not supported!
        </video>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div class="story">
          <figure class="story__shape">
            <img class="story__img" src={nat8} alt="Person"></img>
            <figcaption className="story__caption"> Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small ">
              I had the best experience with zum
            </h3>
            <p>
              “Working with Zūm has given me the flexibility of work/life
              balance all while working with AMAZING children. Zūm gives me job
              security on my own schedule."
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="story">
          <figure class="story__shape">
            <img class="story__img" src={nat9} alt="Person"></img>
            <figcaption className="story__caption"> Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small ">
              My life is completely different now!
            </h3>
            <p>
              {" "}
              “Most superintendents will realize that for cost and quality and
              level of service there isn’t anything that will rival what Zūm can
              provide districts. Most superintendents will realize that for cost
              and quality and level of service there isn’t anything that will
              rival what Zūm can provide districts.”
            </p>
          </div>
        </div>
      </div>
      <div class="u-center-text u-margin-top-big">
        <a href="#" className=" btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};
