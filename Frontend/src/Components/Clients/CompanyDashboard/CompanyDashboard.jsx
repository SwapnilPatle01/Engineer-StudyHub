import React from "react";
import {
  DashboardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Sider, Content } = Layout;
const { Title } = Typography;

function CompanyDashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider width={250} theme="light" style={{ background: "#fff", boxShadow: "2px 0 6px rgba(0,0,0,0.1)" }}>
        <div style={{ padding: "16px", textAlign: "center", borderBottom: "1px solid #ddd" }}>
          <Title level={4} style={{ marginBottom: 0, color: "#333" }}>Recruiter Dashboard</Title>
        </div>
        <Menu mode="inline" style={{ fontSize: "16px", fontWeight: 500 }}>
          <Menu.Item key="Dashboard" icon={<DashboardOutlined />}>
            <Link to="/Company/Dashboard/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="JobPost" icon={<FileTextOutlined />}>
            <Link to="/companies">Companies</Link>
          </Menu.Item>
          <Menu.Item key="companies" icon={<FileTextOutlined />}>
            <Link to="/job-post">Job Post</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout style={{ background: "#f5f5f5" }}>
        <Content
          style={{
            padding: "24px",
            margin: "20px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Outlet /> {/* This will render the active route inside Content */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default CompanyDashboard;
