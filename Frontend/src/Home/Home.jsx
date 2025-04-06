import React from "react";
import "./Home.css";
import Features from "./Features/Features";
import HeroHeader from "./Hero/HeroHeader";
import FAQ from "./Others/FAQ";
import CoursesSection from "./CourseSection/CoursesSection";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import AboutUs from "./HomeAbout/HomeAbout";
import UniversityLogoScroller from "./University/UniversityLogoScroller";
import FooterComponent from "../Components/Footer/FooterComponent"

const Home = () => {
  return (
    <div style={{ backgroundColor: "#F9F8FF" }}>
      <HeroHeader />
      <UniversityLogoScroller />
      <AboutUs />
     
      <CoursesSection />
      <VideoPlayer />
      <Features />
      <FAQ />
      <FooterComponent/>
    </div>
  );
};

export default Home;
