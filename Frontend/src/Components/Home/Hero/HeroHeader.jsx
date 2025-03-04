import React from "react";
import { Button, Carousel, Typography, Row, Col, Input } from "antd";

import "../Home.css";
// import Girl from "../../assets/images/01.webp";

const { Title, Paragraph } = Typography;

const HeroSlider = () => {
  return (
    <Carousel autoplay>
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
              {/* Search Bar */}
              <div
                className="search-bar"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: "block",
                }}
              >
                <Input.Search
                  placeholder="Search PYQs, Notes, Syllabus..."
                  enterButton="Explore"
                  size="large"
                  style={{
                    maxWidth: "50%",
                    borderRadius: "0px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    border:"none"
                  }}
                  onSearch={(value) => console.log(`Search for: ${value}`)}
                />
              </div>
              <Title
                level={1}
                className="slide-heading"
                style={{
                  fontSize: "45px",
                  color: "#ff914d",
                  fontWeight: "400",
                  lineHeight: "50px",
                  marginTop: "5px",
                  position: "relative",
                  fontFamily: "Cherry Bomb One",
                }}
              >
                Your Ultimate Destination for Engineering Success!
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
                    backgroundColor: "#ff914d",
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
                    fontWeight: "500",
                    width: "auto",
                    backgroundColor: "#553CDF",
                    color: "#fff",
                  }}
                >
                  Get Started with Free Resources
                </Button>
              </div>

              {/* Highlights Section */}
              <div
                className="highlights"
                style={{ marginTop: "20px", backgroundColor: "white" }}
              ></div>

              <Paragraph style={{ textAlign: "left", marginTop: "10px" }}>
                Stay ahead in your academics and career. Learn. Practice.
                Achieve.
              </Paragraph>
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
