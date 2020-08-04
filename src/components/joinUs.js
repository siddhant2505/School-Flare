import React from "react";

export const JoinUs = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div class=" u-margin-bottom-medium">
              <h2 class="heading-secondary">Join us now</h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                ></input>
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  id="email"
                  required
                ></input>
                <label htmlFor="name" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  ></input>
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  ></input>
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div class="form__group">
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
