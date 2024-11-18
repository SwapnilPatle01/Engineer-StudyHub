import React from "react";
import "./UniversityLogoScroller.css";

const UniversityLogoScroller = () => {
  const universityLogos = [
    {
      id: 1,
      logo: "https://nagpuruniversity.ac.in/images/rtmnu-logo.png",
    },
    {
      id: 2,
      logo: "https://www.nitt.edu/home/about/Low-Resolution-Emblem.png",
    },
    {
      id: 3,
      logo: "https://html.themewant.com/studyhub/assets/images/brand/13.svg",
    },
    {
      id: 4,
      logo: "https://html.themewant.com/studyhub/assets/images/brand/12.svg",
    },
    {
      id: 5,
      logo: "https://html.themewant.com/studyhub/assets/images/brand/09.svg",
    },
    {
      id: 6,
      logo: "https://html.themewant.com/studyhub/assets/images/brand/11.svg",
    },
  ];

  return (
    <div className="scroller-container">
      <span className="scroller-title">
        Associate with Universities accross
      </span>
      <div className="logo-grid">
        {universityLogos.map((uni) => (
          <img
            key={uni.id}
            src={uni.logo}
            alt={`University ${uni.id}`}
            className="uni-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityLogoScroller;
