import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import "./DeveloperHub.css";
import MainContent from "./MainContent/MainContent";

const { Content } = Layout;

function DevelopersHub() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content>
          <MainContent />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DevelopersHub;
