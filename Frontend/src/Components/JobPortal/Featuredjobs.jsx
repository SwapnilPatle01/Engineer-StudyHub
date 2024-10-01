import React from "react";
import "./Featuredjobs.css";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = (job) => {
  const navigate = useNavigate();

  const FeaturedJobCards = [
    {
      id: 1,
      package: "15 - 30 LPA",
      location: "Bangalore Urban",
      title: "Software Development ",
      tags: ["#DSA", "#Problem solving"],
      company: "Grow",
      views: 1251,
      logo: require("../../assets/images/grow.png"),
      buttonColor: "#FFDD87",
    },
    {
      id: 2,
      package: "5 - 12 LPA",
      location: "Bangalore Urban",
      title: " Data Science  Engineer",
      tags: ["#API", "#React", "#.NET"],
      company: "Anthology",
      views: 2092,
      logo: require("../../assets/images/anthology.png"),
      buttonColor: "#87CEEB",
    },
    {
      id: 3,
      package: "5 - 10 LPA",
      location: "Noida",
      title: "React JS Developer",
      tags: ["#jQuery", "#React", "#Angular"],
      company: "Technoarch Softwares",
      views: 2042,
      logo: require("../../assets/images/tecnoarch.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 4,
      package: "8 - 12 LPA",
      location: "Pune",
      title: "Software Engineer |",
      tags: ["#SDK", "#JSON", "#XML"],
      company: "Technoarch Softwares",
      views: 2042,
      logo: require("../../assets/images/zebra.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 5,
      package: "6 - 10 LPA",
      location: "Noida",
      title: "Python Developer",
      tags: ["#python", "#sql", "#DSA"],
      company: "Impetus Technologies",
      views: 2042,
      logo: require("../../assets/images/impetus.png"),
      buttonColor: "#B2FF87",
    },
    {
      id: 6,
      package: "4.5 - 10 LPA",
      location: "Noida",
      title: "Jr. Node.js Developer",
      tags: ["#html/css", "#javascript", "#mongodb"],
      company: "Excellence Technologies",
      views: 2042,
      logo: require("../../assets/images/excellence.png"),
      buttonColor: "#B2FF87",
    },
  ];
  const handleViewClick = (id) => {
    navigate(`/job/${id}`);
  };
  return (
    <div style={{width:"100%", backgroundColor:"#f0f2f5", marginBottom:"20px"}}>
      <div
        className="job-container"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor:"transparent",
          maxWidth: "1400px",
          margin: "auto",
          border:"none"
        }}
      >
        <h5 className="header">Featured Jobs</h5>
        <div className="job-grid">
          {FeaturedJobCards.map((job) => (
            <div key={job.id} className="job-card" style={{height:"auto"}}>
              <div className="job-info">
                <p className="package">Package: {job.package}</p>
                <p className="location">
                  Job Location: <strong>{job.location}</strong>
                </p>
                <h3 className="job-title">{job.title}</h3>
                <div className="tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="job-footer"
                style={{ backgroundColor: job.buttonColor, marginBottom:"10px" }}
              >
                <div className="company-info">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="company-logo"
                  />
                  <p className="company-name">{job.company}</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => handleViewClick(job.id)}
                >
                  View
                </button>
              </div>
              <p className="views">👁️ {job.views}</p>
            </div>
          ))}
        </div>
        <div className="background-logos">
          <img src={job.logo} alt={job.company} className="logo" />
        </div>
      </div>
    </div>
  );
};
export default FeaturedJobs;
