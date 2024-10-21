import React from "react";
import "./Home.css";
import Features from "./Features";
// import Highlight from "./Highlight";
import HeroSlider from "./HeroSlider";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import CoursesSection from "./CoursesSection";
import VideoPlayer from "./VideoPlayer";
// import ReviewBOx from "./ReviewBox";
import AboutUs from "./AboutUs";
import UniversityLogoScroller from "./UniversityLogoScroller";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <UniversityLogoScroller />
      <AboutUs />
      <HeroSection />
      <CoursesSection />
      <VideoPlayer />
      {/* <Highlight /> */}
      <Features />
      <FAQ />
      {/* <ReviewBOx /> */}
    </div>
  );
};

export default Home;
