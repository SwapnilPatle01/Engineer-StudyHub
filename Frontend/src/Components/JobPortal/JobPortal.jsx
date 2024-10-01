import React from "react";
import { Input, Button, Card } from "antd";
import "./JobPortal.css"; // Ensure this CSS file includes the styles below
import FeaturedJobs from "./Featuredjobs";
import { Link, Outlet, Route, useNavigate } from "react-router-dom";

const { Search } = Input;

const onSearch = (value) => {
  console.log("Search value:", value);
};

const cardData = [
  {
    title: "Job Hiring",
    description:
      "Apply for the jobs of your interest and get the offer letter in the next step.",
    stats: [
      { number: "3290+", label: "jobs live" },
      { number: "4000+", label: "total openings" },
    ],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEpvYiUyMEhpcmluZ3xlbnwwfHwwfHx8MA%3D%3D", // Add path to your image
  },
  {
    title: "Be an Intern",
    description:
      "Apply for the Internships of your interest and get the offer letter in the next step.",
    stats: [
      { number: "340+", label: "internships live" },
      { number: "1500+", label: "total openings" },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iVZefP_faOJoPSUonTxNFl6HYPrmUncpBzrYCanho3L8lvnGU7r_GVf09FvIqlgQrLU&usqp=CAU", // Add path to your image
  },
  {
    title: "Project Hub",
    description:
      "Paid projects that give you hands-on experience for a better career.",
    stats: [
      { number: "62+", label: "projects live" },
      { number: "62+", label: "ongoing projects" },
    ],
    img: "https://media.istockphoto.com/id/1257392472/photo/multicultural-teams-have-the-opportunity-bring-rich-and-varied-points-of-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yhu6JcC1k2YIJIQrhev-IpP6c1hNDruW4zXHiFmGapA=", // Add path to your image
  },
  {
    title: "Event Hiring",
    description:
      "Participate in the events directly conducted by the companies to highlight your profile.",
    stats: [
      { number: "20+", label: "events live" },
      { number: "35+", label: "total openings" },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iVZefP_faOJoPSUonTxNFl6HYPrmUncpBzrYCanho3L8lvnGU7r_GVf09FvIqlgQrLU&usqp=CAU", // Add path to your image
  },
];

function JobPortal() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="job-portal" style={{backgroundColor:"#f0f2f5", marginBottom:"0px"}}>
        <div className="background-logos">
          {/* Add paths to your company logos */}
          <img src="logo1.png" alt="Company Logo 1" className="logo" />
          <img src="logo2.png" alt="Company Logo 2" className="logo" />
          <img src="logo3.png" alt="Company Logo 3" className="logo" />
          {/* Add more logos as needed */}
        </div>
        <header className="jobPortal-upper-header">
          <div className="heading-jobPortal">
            <h1>Your Ultimate Job Search Companion</h1>
          </div>
          <div className="para-jobPortal">
            <p>
              Are you looking for the perfect job or ideal candidates? Find your
              dream job with thousands of job postings across industries.
            </p>

            <div className="search-bar">
              <Search
                placeholder="Search for jobs or candidates"
                onSearch={onSearch}
                enterButton
                className="custom-search-input"
              />
            </div>
          </div>
        </header>
        <main className="content-sections">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="info-card"
              cover={<img alt={card.title} src={card.img} />}
              hoverable
            >
              <div className="description">
                <Card.Meta
                  className="card-meta"
                  title={card.title}
                  description={card.description}
                  style={{ Color: "red" }}
                />
              </div>
              <div className="card-stats">
                {card.stats.map((stat, idx) => (
                  <div key={idx} className="stat">
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button
                type="primary"
                className="explore-button"
                onClick={() => {
                  //<Route path="JobListing" element={<JobListing />} />;
                  navigate("/JobListing");
                }}
              >
                Explore More
              </Button>
            </Card>
          ))}
        </main>
        <div className="thread-animation"></div>
      </div>
      <div style={{marginTop:"0px"}}>
        <FeaturedJobs />
      </div>
    </div>
  );
}

export default JobPortal;
