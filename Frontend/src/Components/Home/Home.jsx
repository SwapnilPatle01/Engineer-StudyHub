import React from "react";
import "./Home.css";
import Features from "./Features";
import Highlight from "./Highlight";
import HeroSlider from "./HeroSlider";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import UniversityLogoScroller from "./UniversityLogoScroller";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F9F8FF" }}>
      <HeroSlider />
      <UniversityLogoScroller />
      <Highlight />
      <HeroSection />
      <Features />
      <FAQ />
    </div>
  );
};

export default Home;
