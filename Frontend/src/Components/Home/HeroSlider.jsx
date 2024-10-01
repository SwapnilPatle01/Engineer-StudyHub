import React from "react";
import { Button, Carousel, Typography, Row, Col } from "antd";
import { BulbOutlined, BookOutlined, LaptopOutlined } from "@ant-design/icons"; // Icons for animation
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            margin: 0,
          }}
        >
          <Col span={12}>
            <div className="left-section">
              <div className="pre-title-container">
                <img
                  src="https://html.themewant.com/studyhub/assets/images/banner/bulb.png"
                  alt="icon"
                  className="animated-icon"
                />
                <span className="pre-title animated-3d-text">
                  Gateway to Lifelong Learning
                </span>
              </div>
              <Title
                level={1}
                className="slide-heading"
                style={{
                  fontSize: "50px",
                  color: "#221859",
                  fontWeight: "600",
                  lineHeight: "66px",
                  marginTop: "10px",
                  position: "relative",
                  fontFamily: "Hind",
                }}
              >
                Unlock Your Potential
                <br />
                with{" "}
                <span
                  style={{
                    fontSize: "56px",
                    fontWeight: "bold",
                    lineHeight: "66px",
                    background: "linear-gradient(45deg, #5B2F91, #3F7DAA)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    // textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
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

              {/* Animated Icons */}
              {/* <div className="animated-icons">
                <BulbOutlined className="icon animated-icon bounce" />
                <BookOutlined className="icon animated-icon bounce" />
                <LaptopOutlined className="icon animated-icon bounce" />
              </div> */}
            </div>
          </Col>
          <Col span={12}>
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
