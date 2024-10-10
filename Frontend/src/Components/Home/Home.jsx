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
    <div>
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
