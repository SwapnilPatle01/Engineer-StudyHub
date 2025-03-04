import React from "react";
import { Layout, Menu, Avatar, Typography, Card, Progress } from "antd";
import {
  DashboardOutlined,
  BookOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  SolutionOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const ProfileComponent = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider theme="light" width={250}>
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Avatar size={80} icon={<UserOutlined />} />
          <Title level={5} style={{ marginTop: "10px" }}>
            John Doe
          </Title>
          <Text type="secondary">Computer Science and Engineering</Text>
        </div>
        <Menu mode="inline" defaultSelectedKeys={["dashboard"]}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.SubMenu key="learningHub" icon={<BookOutlined />} title="Learning Hub">
            <Menu.Item key="myCourses">My Courses</Menu.Item>
            <Menu.Item key="materials">Materials</Menu.Item>
            <Menu.Item key="favorites">Favorites</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="careerHub" icon={<SolutionOutlined />} title="Career Hub">
            <Menu.Item key="jobListings">Job Listings</Menu.Item>
            <Menu.Item key="myApplications">My Applications</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="achievements" icon={<TrophyOutlined />}>
            Achievements & Progress
          </Menu.Item>
          <Menu.Item key="notifications" icon={<BellOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.SubMenu key="settings" icon={<SettingOutlined />} title="Profile Settings">
            <Menu.Item key="editProfile">Edit Profile</Menu.Item>
            <Menu.Item key="privacySettings">Privacy Settings</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="logout" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Content Area */}
      <Layout>
        <Content style={{ margin: "20px", padding: "20px", background: "#fff" }}>
          <Title level={4}>Dashboard</Title>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Card title="My Courses" bordered style={{ width: 300 }}>
              <p>3 Courses Enrolled</p>
              <Progress percent={70} size="small" status="active" />
              <Text>Completed: 70%</Text>
            </Card>

            <Card title="My Applications" bordered style={{ width: 300 }}>
              <p>2 Applications Pending</p>
              <Text>Status: Follow-up Required</Text>
            </Card>

            <Card title="Achievements" bordered style={{ width: 300 }}>
              <p>2 Certificates Earned</p>
              <p>1 Badge Unlocked</p>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfileComponent;
