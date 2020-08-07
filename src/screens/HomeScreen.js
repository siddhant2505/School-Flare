import React from "react";
import { Header } from "../components/header";

// import logo from "../img/favicon.png";

//import "../css/icon-font.css";
import "../sass/main.scss";
import { About } from "../components/about";
import { Features } from "../components/features";
import { Plans } from "../components/plans";
import { Testimonials } from "../components/testimonials";
import { JoinUs } from "../components/joinUs";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

export const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Plans />
      <Testimonials />
      <JoinUs />
      <Footer />
    </>
  );
};
