import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const colorBgContainer = "#f0f2f5"; // Example background color
const borderRadiusLG = "8px"; // Example border radius

function CompanyDashboard() {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    navigate(e.key); // Navigate to the route based on the key
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={285}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["company-profile"]}
          style={{
            height: "100%",
            borderRight: 0,
            backgroundColor: "#fff",
            color: "#000",
            padding: "16px",
            fontSize: "16px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleMenuClick} // Handle menu clicks
        >
          {/* Company Menu */}
          <div className="head-sty" style={{display:"flex", flexDirection:"column"}}>
            <h1 style={{color:"#553CDF", fontWeight:"700"}}>Company Dashboard</h1>
          </div>

          <Menu.SubMenu key="company" icon={<UserOutlined />} title="Company">
            {/* <Menu.Item key="company-profile">Company Profile</Menu.Item> */}
            <Menu.Item key="create-company">Company Profile</Menu.Item>
          </Menu.SubMenu>

          {/* Create Menu */}
          <Menu.SubMenu key="create" icon={<LaptopOutlined />} title="Create">
            <Menu.Item key="create-job-post">Create Job Post</Menu.Item>
            <Menu.Item key="create-event">Create Event</Menu.Item>
          </Menu.SubMenu>

          {/* Notifications Menu */}
          <Menu.SubMenu key="notifications" icon={<NotificationOutlined />} title="Notifications">
            <Menu.Item key="view-notifications">View Notifications</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            padding: "24px",
          }}
        >
          {/* Render the selected component */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default CompanyDashboard;
