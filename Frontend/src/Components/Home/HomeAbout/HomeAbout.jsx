import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Button, Modal } from "antd";
import {
  PlayCircleOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./AboutUs.css";

const { Title, Text } = Typography;

const AboutUs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "50px 20px", background: "#f9f9f9" }}>
      <Row gutter={[2, 2]} align="middle">
        {/* Left Column - 50% width */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="review-video-wrapper">
            {/* Left Part: Review Box and Image Below */}
            <div className="revieww-container">
              {/* Review Box */}
              <Card
                style={{
                  backgroundColor: "#f0f2f5",
                  textAlign: "center",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
                bodyStyle={{ padding: "20px" }}
              >
                <Title level={3} style={{ margin: 0, color: "#723bdb" }}>
                  2.4k
                </Title>
                <Text>Positive Review</Text>
              </Card>

              {/* Image under review box */}
              <img
                src="https://html.themewant.com/studyhub/assets/images/about/02.jpg"
                alt="Learning"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  maxHeight: "550px",
                  marginBottom: "20px",
                }}
              />
            </div>

            {/* Right Part: Video/Image with Play Button */}
            <div className="videoo-container">
              <img
                src="https://html.themewant.com/studyhub/assets/images/about/01.jpg"
                alt="Video"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  maxHeight: "700px",
                }}
              />
              {/* Play Button Overlay */}
              <Button
                type="primary"
                shape="circle"
                icon={<PlayCircleOutlined style={{
                  display:"flex",
                  alignItems: "center"   //positioning icon in the center of the Button Background
                }}/>}
                size="large"
                style={{
                  position: "absolute",
                  top: isMobile? "50%" : "45%",
                  left: isMobile? "50%" :"65%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "36px",
                  opacity: 0.8,
                }}
                onClick={showModal}
              />
            </div>
          </div>
        </Col>

        {/* Right Column - 50% width */}
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* Section with title and description */}
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            {/* Gateway to Lifelong Learning Section */}
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
              <Text style={{ fontSize: "20px", color: "#723bdb" }}>
                Your Gateway to Engineering Success
              </Text>
            </div>
            <Title level={1} style={{ color: "rgb(85, 60, 223)" }}>
              Welcome to Engineer StudyHub: Fueling Future Engineers
            </Title>
            <Text
              style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}
            >
              At Engineer StudyHub, we provide engineering students with
              top-notch resources, including subject notes, past year papers,
              and video lectures. Our mission is to promote academic excellence
              and support your path to a successful engineering career.
            </Text>
          </div>

          {/* Expert and Instructors Section */}
          <Row
            gutter={16}
            style={{
              marginTop: "10px",
            }}
          >
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingBottom: "20px" }} // Padding between cards
            >
              <Card
                bodyStyle={{ padding: "10px", textAlign: "center" }}
                bordered={false}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <UserOutlined style={{ fontSize: "30px", color: "#723bdb" }} />
                <Title level={4}>Essential Resources for Engineers</Title>
                <Text>
                  We are dedicated to empowering students with essential
                  resources for success.
                </Text>
              </Card>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingBottom: "20px" }} // Padding between cards
            >
              <Card
                bodyStyle={{ padding: "10px", textAlign: "center" }}
                bordered={false}
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <StarOutlined style={{ fontSize: "30px", color: "#723bdb" }} />
                <Title level={4}>Tools for Success</Title>
                <Text>
                  Essential tools for your engineering success and career
                  growth.
                </Text>
              </Card>
            </Col>
          </Row>
          {/* CEO Section */}
          <div style={{ marginTop: "30px", padding: "20px" }}>
            <Row gutter={16} align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                style={{ marginBottom: "25px" }}
              >
                <Row align="middle">
                  <Col>
                    <img
                      src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
                      alt="CEO & Founder"
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col style={{ marginLeft: "10px" }}>
                    <Text strong style={{ fontSize: "16px", color: "#333" }}>
                      Ethan Caldwell
                    </Text>
                    <br />
                    <Text style={{ fontSize: "14px", color: "#888" }}>
                      Founder, Engineer StudyHub
                    </Text>
                  </Col>
                </Row>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                style={{ marginBottom: "25px" }}
              >
                <Row align="middle">
                  <Col>
                    <img
                       src="https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png"
                      alt="CTO & Co-Founder"
                      style={{
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col style={{ marginLeft: "10px" }}>
                    <Text strong style={{ fontSize: "16px", color: "#333" }}>
                      GRyan Fischer
                    </Text>
                    <br />
                    <Text style={{ fontSize: "14px", color: "#888" }}>
                      Co-Founder, Engineer StudyHub
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Modal for YouTube Video */}
      <Modal
        title="Video"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width={800}
        style={{ top: "50%", transform: "translateY(-50%)" }}
        bodyStyle={{ padding: 0 }}
      >
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CTnJyZZNOjU"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AboutUs;
