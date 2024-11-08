import React from "react";
import { Button, Carousel, Typography, Row, Col } from "antd";

import "./Home.css";
import Girl from "../../assets/images/01.webp";

const { Title, Paragraph } = Typography;

const HeroSlider = () => {
  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div className="slide-container">
        <Row
          className="slide-content"
          justify="space-between"
          align="middle"
          style={{
            backgroundColor: "#F9F8FF",
            margin: 0,
            width: "100%",
          }}
        >
          {/* Left Section - Appears first on all screen sizes */}
          <Col
            span={12}
            xs={{ span: 24, order: 1 }} // Full width on mobile and appears first
            sm={{ span: 24, order: 1 }} // Full width and appears first on small screens
            md={{ span: 12, order: 1 }} // Normal order on medium+ screens
            className="left-main"
          >
            <div className="left-section">
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://html.themewant.com/studyhub/assets/images/banner/bulb.png"
                  alt="Gateway to Lifelong Learning"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
                <span
                  className="responsive-text"
                  style={{ fontSize: "20px", color: "#723bdb" }}
                >
                  Your Gateway to Engineering Success
                </span>
              </div>

              <Title
                level={1}
                className="slide-heading"
                style={{
                  fontSize: "45px",
                  color: "#221859",
                  fontWeight: "600",
                  lineHeight: "66px",
                  marginTop: "5px",
                  position: "relative",
                  fontFamily: "Hind",
                }}
              >
                Unlock Your Potential
                <br />
                with{" "}
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    lineHeight: "66px",
                    background: "linear-gradient(45deg, #5B2F91, #3F7DAA)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    letterSpacing: "1px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Online Learning Materials
                </span>
              </Title>
              <Paragraph
                className="slide-title"
                style={{
                  fontSize: "18px",
                  color: "#737477",
                  width: "80%",
                  marginTop: "-19px",
                }}
              >
                Engineer Study Hub provides essential resources like subject
                notes, past year question papers, and video lectures to help you
                excel in your studies. Unlock your potential and pave your way
                to academic and professional success with us!
              </Paragraph>
              <div className="buttons">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#553CDF",
                    color: "#fff",
                    marginRight: "10px",
                    padding: "14px 34px",
                    borderRadius: "4px",
                    transition: "0.3s",
                    fontWeight: "500",
                    width: "150px",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  size="large"
                  style={{
                    marginRight: "10px",
                    padding: "14px 34px",
                    borderRadius: "4px",
                    transition: "0.3s",
                    fontWeight: "500",
                    width: "150px",
                  }}
                >
                  Explore More
                </Button>
              </div>
            </div>
          </Col>

          {/* Right Section - Appears second on all screen sizes */}
          <Col
            span={12}
            xs={{ span: 24, order: 2 }} // Full width on mobile and appears second
            sm={{ span: 24, order: 2 }} // Full width and appears second on small screens
            md={{ span: 12, order: 2 }} // Normal order on medium+ screens
            className="right-section"
          >
            <div className="right-section">
              <img
                src={Girl}
                alt="Student"
                className="student-image"
                style={{ height: "100%", maxWidth: 600 }}
              />
              {/* Review Boxes */}
              <div className="review-box top-box">
                <span className="review-count">100+</span>
                <p>Online Courses</p>
              </div>
              <div className="review-box bottom-box">
                <span className="review-count">4.6K+</span>
                <p>Best study notes & materials</p>
              </div>
              <div className="review-box left-box">
                <span className="review-count">250+</span>
                <p>Job Opportunities Listed</p>
              </div>
              <div className="review-box lower-left-box">
                <span className="review-count">500+</span>
                <p>Interview Questions</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
