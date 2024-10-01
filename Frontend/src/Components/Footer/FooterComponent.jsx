import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./Footer.css"; // You can style further in this file
import logo from "../../assets/images/logo.png";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;


const FooterComponent = () => {
  return (
    <Footer
      style={{ backgroundColor: "#000", color: "#fff", padding: "40px 50px" }}
    >
      <div className="footer-logo flex" style={{width:"100%",}}>
        <img src={logo} alt="logo" style={{ width: 350,paddingBottom:"35px", }} />
      </div>
      <Row gutter={[32, 32]} justify="space-between">
        {/* About Us Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            About Engineers StudyHub
          </Title>
          <Text style={{ color: "#fff" }}>
            At Engineers StudyHub, we provide top-notch learning resources,
            in-demand skill development materials, and career opportunities
            tailored for engineering students. Our goal is to empower future
            engineers to excel academically and professionally.
          </Text>
        </Col>

        {/* Resources Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Learning Resources
          </Title>
          <Space direction="vertical">
            <Link href="#" style={{ color: "#fff" }}>
              Study Materials
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Developer Resources
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Career Portal
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Video Lectures & Tutorials
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Exam Preparation Tips
            </Link>
          </Space>
        </Col>

        {/* Quick Links Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <Space direction="vertical">
            <Link href="#" style={{ color: "#fff" }}>
              Home
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              About Us
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Learning Resources
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Developer's HUB
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              FAQs
            </Link>
            <Link href="#" style={{ color: "#fff" }}>
              Contact Us
            </Link>
          </Space>
        </Col>

        {/* Contact Information Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Contact Us
          </Title>
          <Text style={{ color: "#fff" }}>
            Email: support@engineerstudyhub.in
          </Text>
          <br />
          <Text style={{ color: "#fff" }}>Phone: +91 9876543210</Text>
          <br />
          <Text style={{ color: "#fff" }}>
            Address: XYZ Tower, Tech Park, City
          </Text>
          <br />
          <Text style={{ color: "#fff" }}>
            Working Hours: Mon - Fri, 9:00 AM - 6:00 PM
          </Text>
        </Col>

        {/* Social Media Links Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Follow Us
          </Title>
          <Space size="large">
            <Link href="https://facebook.com" target="_blank">
              <FacebookOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <TwitterOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedinOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <InstagramOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <YoutubeOutlined style={{ fontSize: "24px", color: "#fff" }} />
            </Link>
          </Space>
        </Col>
      </Row>

      {/* Footer Bottom Section */}
      <Row
        justify="space-between"
        style={{
          marginTop: "40px",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        <Col xs={24} sm={12}>
          <Text style={{ color: "#fff" }}>
            © 2024 Engineers StudyHub. All rights reserved.
          </Text>
        </Col>
        <Col xs={24} sm={12} style={{ textAlign: "right" }}>
          <Link href="#" style={{ color: "#fff", marginRight: "10px" }}>
            Privacy Policy
          </Link>
          <Link href="#" style={{ color: "#fff" }}>
            Terms of Service
          </Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
