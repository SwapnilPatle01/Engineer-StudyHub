import React, { useState } from "react";
import { Layout, Breadcrumb } from "antd";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ProfileOutlined,
  MessageOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import ResumeSubmission from "./Request/ResumeSubmission";
import Discussion from "./Community/Discussion";
import Roadmap from "./Roadmap/Roadmap";
import InterviewExperience from "./InterviewExperience/InterviewExperience";
import AllOpportunities from "./Pages/AllOpportunities";

const { Sider, Content } = Layout;

const JobDetails = () => {
  const [selectedJobType, setSelectedJobType] = useState("");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        style={{
          background: "linear-gradient(180deg, #553CDF, #1a2980)",
          padding: "20px 10px",
        }}
      >
        <h2 style={{ fontSize: "20px", color: "#fff", fontWeight: "700", textAlign: "center", marginBottom: "20px" }}>
          Engineer Career Hub
        </h2>
        {[
          { label: "All Opportunities", icon: <HomeOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Freshers Job", icon: <UsergroupAddOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Experienced Job", icon: <TeamOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Internships", icon: <BookOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Hackethon", icon: <ProfileOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Resume Review", icon: <ProfileOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Discussions", icon: <MessageOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Roadmaps", icon: <ReadOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
          { label: "Interview Experience", icon: <SolutionOutlined style={{ fontSize: "24px", color: "#fff" }} /> },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className="icon-item"
            onClick={() => setSelectedJobType(label)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background 0.3s",
              backgroundColor: selectedJobType === label ? "rgba(255, 255, 255, 0.2)" : "transparent",
            }}
          >
            {icon}
            <span style={{ marginLeft: "10px", color: "#fff", fontWeight: "500" }}>{label}</span>
          </div>
        ))}
      </Sider>

      <Layout>
        <Content style={{ padding: "35px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
          <Breadcrumb style={{ marginBottom: "16px" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedJobType || "All Opportunities"}</Breadcrumb.Item>
          </Breadcrumb>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
            {selectedJobType === "All Opportunities" && <AllOpportunities/>}
          </h2>
          {selectedJobType === "Resume Review" && <ResumeSubmission />}
          {selectedJobType === "Discussions" && <Discussion />}
          {selectedJobType === "Roadmaps" && <Roadmap />}
          {selectedJobType === "Interview Experience" && <InterviewExperience />}
          {selectedJobType === "Hackethon" && <div>Hackethon Section</div>}
          {selectedJobType === "Freshers Job" && <h2>Freshers Jobs</h2>}
          {selectedJobType === "Experienced Job" && <h2>Experienced Jobs</h2>}
          {selectedJobType === "Internships" && <h2>Internships</h2>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default JobDetails;
