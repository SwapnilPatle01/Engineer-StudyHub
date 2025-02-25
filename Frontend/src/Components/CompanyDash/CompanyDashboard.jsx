import React, { useState } from "react";
import { Layout } from "antd";
import {
  AppstoreOutlined,
  SolutionOutlined,
  CalendarOutlined,
  BankOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DashboardHome from "./Tabs/DashboardHome";
import JobPost from "./Tabs/Job Post/JobPost";
import CreateEvent from "./Tabs/Create Event/CreateEvent";

const { Sider, Content } = Layout;

const CompanyDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard", icon: <AppstoreOutlined /> },
    { label: "Job Post", icon: <SolutionOutlined /> },
    { label: "Create Event", icon: <CalendarOutlined /> },
    { label: "Company Profile", icon: <BankOutlined /> },
    { label: "Notification", icon: <BellOutlined /> },
    { label: "Settings", icon: <SettingOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        style={{ backgroundColor: "#fff", padding: "20px 10px" }}
      >
        <h2
          style={{
            fontSize: "20px",
            color: "#000",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Company Dashboard
        </h2>

        {menuItems.map(({ label, icon }) => (
          <div
            key={label}
            className="icon-item"
            onClick={() => setSelectedTab(label)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background 0.3s",
              backgroundColor:
                selectedTab === label ? "rgba(0, 0, 0, 0.1)" : "transparent",
            }}
          >
            <span style={{ fontSize: "24px", color: "#000" }}>{icon}</span>
            <span
              style={{ marginLeft: "10px", color: "#000", fontWeight: "500" }}
            >
              {label}
            </span>
          </div>
        ))}
      </Sider>

      <Layout>
        <Content
          style={{
            padding: "35px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          {selectedTab === "Dashboard" && <DashboardHome />}
          {selectedTab === "Job Post" && <JobPost />}
          {selectedTab === "Create Event" && <CreateEvent />}
          {selectedTab === "Company Profile" && (
            <div>Company Profile Content</div>
          )}
          {selectedTab === "Notification" && <div>Notification Content</div>}
          {selectedTab === "Settings" && <div>Settings Content</div>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CompanyDashboard;
