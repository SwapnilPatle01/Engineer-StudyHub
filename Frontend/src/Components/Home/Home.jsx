import React from "react";
import "./Home.css";
import Features from "./Features";
import Highlight from "./Highlight";
import HeroSlider from "./HeroSlider";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";


const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <Highlight/>
      <HeroSection/>
      <Features/>
      <FAQ/>
    </div>
  );
};

export default Home;
