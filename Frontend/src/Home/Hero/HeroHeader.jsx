import React, { useState, useEffect } from "react";
import { Button, Carousel, Typography, Row, Col, Input } from "antd";

import "../Home.css";
// import Girl from "../../assets/images/01.webp";

const { Title, Paragraph } = Typography;

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  //To trigger CSS whenever screen size changes
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or smaller
    };
    // Initial check
    updateSize();
    // Add resize event listener
    window.addEventListener("resize", updateSize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Carousel autoplay style={{
      width: "100%",
      overflowX: "hidden",
      boxSizing: "border-box",

    }}>
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
              <p style={{ color: "#553CDF" }}>Empowering you with the right resources</p>
              <Title
                level={1}
                className="slide-heading"
                style={{
                  fontSize: window.innerWidth <= 768 ? "38px" : "40px",
                  color: "#000",
                  fontWeight: "600",
                  lineHeight: "50px",
                  marginTop: "5px",
                  marginBottom: "30px",
                  position: "relative",
                  fontFamily: "Poppins",
                }}
              >
                Complete <span style={{ color: "#553CDF" }}> Learning and Career Hub </span> Designed for <span style={{ color: "#553CDF" }}>Engineers</span>
              </Title>
              <Paragraph
                className="slide-title"
                style={{
                  fontSize: "18px",
                  color: "#000",
                  width: "80%",
                 
                }}
              >
                Access essential resources like subject notes, PYQs, and video
                lectures. Engineer Study Hub empowers you to excel in academics
                and beyond. Unlock your potential and build a path to success
                today!
              </Paragraph>

              {/* Buttons */}
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
                    width: "auto",
                    border: "none",
                  }}
                >
                  Explore Learning Materials
                </Button>
                <Button
                  size="large"
                  style={{
                    marginRight: "10px",
                    padding: "14px 34px",
                    borderRadius: "4px",
                    transition: "0.3s",
                    border: "2px solid #553CDF",
                    fontWeight: "500",
                    width: "auto",
                    backgroundColor: "transparent",
                    color: "#553CDF",
                  }}
                >
                  Explore Job Opportunities
                </Button>
              </div>

              {/* Highlights Section */}
              <div
                className="highlights"
                style={{ marginTop: "20px", backgroundColor: "white" }}
              ></div>


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
                src="https://studyhub.org.uk/wp-content/uploads/2023/10/Image-18-1-1007x1024.png"
                alt="Student"
                className="student-image"
                style={{ height: "100%", maxWidth: 600 }}
              />
              {/* Review Boxes */}
              {/* <div className="review-box top-box">
                <span className="review-count">100+</span>
                <p>Online Courses</p>
              </div> */}
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
