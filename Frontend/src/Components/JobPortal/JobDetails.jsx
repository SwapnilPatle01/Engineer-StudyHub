import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Layout, Row } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ProfileOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  LockOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./JobDetails.css";

const { Sider, Content } = Layout;

const JobDetails = () => {
  const [selectedJobType, setSelectedJobType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const FeaturedJobCards = [
    {
      id: 1,
      package: "3 - 5 LPA",
      location: "Remote",
      title: "Junior Developer",
      tags: ["#JavaScript", "#React"],
      company: "Freshers Inc.",
      views: 500,
      logo: require("../../assets/images/grow.png"),
      buttonColor: "#87CEEB",
      startDate: "2024-01-01",
      experience: "0-1 years",
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
  const FreshersJobCards = [
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
  ];
  const ExperiencedJobCards = [
    {
      id: 1,
      package: "6 - 12 LPA",
      location: "Pune",
      title: "Senior Software Engineer",
      tags: ["#Java", "#Spring"],
      company: "Experienced Corp.",
      views: 900,
      // logo: require("../../assets/images/experienced.png"),
      buttonColor: "#FFD700",
    },
  ];
  const InternshipJobCards = [
    {
      id: 1,
      package: "2 - 3 LPA",
      location: "Bangalore",
      title: "Internship in Data Science",
      tags: ["#Python", "#ML"],
      company: "Internship Hub",
      views: 300,
      // logo: require("../../assets/images/internship.png"),
      buttonColor: "#FF69B4",
    },
  ];

  const job = FeaturedJobCards.find((job) => job.id === parseInt(id));
  if (!job) return <div>Job not found</div>;


  const handleApplyNow = () => {
    navigate(`applynowandknowmore`, { state: { view: 'apply' } }); // Pass state
  };
  
  const handleKnowMore = () => {
    navigate(`applynowandknowmore`, { state: { view: 'know-more' } }); // Pass state
  };
  return (
    <Layout>
      <Sider
        width={250}
        style={{
          color: "#000",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="icon-container">
          <div className="icon-item" onClick={() => setSelectedJobType("")}>
            <span
              style={{ fontSize: "20px", color: "#553cdf", fontWeight: "700" }}
            >
              All Opportunities
            </span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Jobs</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("freshers")}
          >
            <UsergroupAddOutlined
              style={{ fontSize: "24px", color: "#52c41a" }}
            />
            <span style={{ color: "#000" }}>Freshers Job</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("experienced")}
          >
            <TeamOutlined style={{ fontSize: "24px", color: "#FFA500" }} />
            <span style={{ color: "#000" }}>Experienced Job</span>
          </div>
          <div
            className="icon-item"
            onClick={() => setSelectedJobType("internship")}
          >
            <BookOutlined style={{ fontSize: "24px", color: "#FF4500" }} />
            <span style={{ color: "#000" }}>Internships</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Events</span>
          </div>
          <div className="icon-item">
            <ProfileOutlined style={{ fontSize: "24px", color: "#ff5000" }} />
            <span style={{ color: "#000" }}>Hackethon</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Request</span>
          </div>
          <div className="icon-item">
            <ProfileOutlined style={{ fontSize: "24px", color: "#13c2c2" }} />
            <span style={{ color: "#000" }}>Resume Review</span>
          </div>
          <div className="icon-item">
            <span style={{ color: "#000" }}>Community</span>
          </div>
          <div className="icon-item">
            <MessageOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Discussions</span>
          </div>
          <div className="icon-item">
            <ReadOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Roadmaps</span>
          </div>
          <div className="icon-item">
            <SolutionOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
            <span style={{ color: "#000" }}>Interview Experience</span>
          </div>
        </div>
      </Sider>

      <Layout>
        <Content style={{ padding: "20px" }}>
          {selectedJobType === "freshers" && (
            <div>
              <h2>Freshers Jobs</h2>
              <div className="job-grid">
                {FreshersJobCards.map((job) => (
                  <Card
                    key={job.id}
                    style={{
                      margin: "10px",
                      padding: "10px",
                      width: "500px",
                      height: "auto",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="job-info">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={{ width: "100px" }}
                      />
                      <h3 style={{ marginTop: "20px", fontSize: "22px" }}>
                        {job.title}
                      </h3>
                    </div>

                    <p>Package: {job.package}</p>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <p>Views: {job.views}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "left",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "start",
                          flexDirection: "column",
                        }}
                      >
                        <p style={{ margin: 0, marginBottom: "5px" }}>
                          Start Date: <strong>??{job.startDate}</strong>
                        </p>
                        <p style={{ margin: 0, marginBottom: "5px" }}>
                          Experience: <strong>??{job.experience}</strong>
                        </p>
                      </div>
                    </div>
                    <div class="job-buttons">
                      <Button type="primary" onClick={handleApplyNow}>Apply</Button>
                      <Button onClick={handleKnowMore}>Know More</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "experienced" && (
            <div>
              <h2>Experienced Jobs</h2>
              <div className="job-grid">
                {ExperiencedJobCards.map((job) => (
                  <Card
                    key={job.id}
                    title={job.title}
                    style={{
                      margin: "10px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p>Package: {job.package}</p>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <p>Views: {job.views}</p>
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{ width: "100px" }}
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "internship" && (
            <div>
              <h2>Internships</h2>
              <div className="job-grid">
                {InternshipJobCards.map((job) => (
                  <Card
                    key={job.id}
                    title={job.title}
                    style={{ margin: "10px" }}
                  >
                    <p>Package: {job.package}</p>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <p>Views: {job.views}</p>
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{ width: "100px" }}
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}
          {selectedJobType === "" && (
            <div
              style={{
                width: "100%",
              }}
            >
              <h2>All Opportunities</h2>
              <div className="job-grid">
                {FeaturedJobCards.map((job) => (
                  <Card
                    key={job.id}
                    title={job.title}
                    style={{
                      margin: 10,
                      width: "300px",
                      height: "auto",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p>Package: {job.package}</p>
                    <p>Location: {job.location}</p>
                    <p>Company: {job.company}</p>
                    <p>Views: {job.views}</p>
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{ width: "100px" }}
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default JobDetails;
