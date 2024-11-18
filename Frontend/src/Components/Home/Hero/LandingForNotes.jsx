import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "./LandingForNotes.css";
import { Link } from "react-router-dom";

const { Text } = Typography;

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background Image with overlay */}
      <div className="hero-background">
        <Row
          justify="center"
          align="middle"
          className="hero-content"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Main Content */}
          <Col
            span={20}
            className="hero-main-content"
            md={12}
            style={{ width: "100%", height: "auto", margin: "auto" }}
          >
            <h1 className="hero-title" style={{ marginTop: "50px" }}>
              Premium Notes, PYQs, and Videos from Academic High Achievers
            </h1>
            <Text className="hero-subtitle">
              Unlock high-quality study materials and notes crafted by top
              achievers from renowned universities such as
              <strong> RTMNU, MIT-WPU, COEP, VJTI Mumbai</strong> and more!
            </Text>
            <div className="hero-buttons">
              <Link to="/engineerLib">
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    width: "auto",
                  }}
                >
                  Find Your Resources
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
