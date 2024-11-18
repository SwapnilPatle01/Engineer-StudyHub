import React from "react";
import "./Home.css";
import Features from "./Features/Features";
// import Highlight from "./Highlight";
import HeroHeader from "./Hero/HeroHeader";
import FAQ from "./Others/FAQ";
import HeroSection from "./Hero/LandingForNotes";
import CoursesSection from "./CourseSection/CoursesSection";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
// import ReviewBOx from "./ReviewBox";
import AboutUs from "./HomeAbout/HomeAbout";
import UniversityLogoScroller from "./University/UniversityLogoScroller";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F9F8FF" }}>
      <HeroHeader />
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
