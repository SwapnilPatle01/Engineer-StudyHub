import { Typography, Button, Modal, Row, Col, Card } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import logo from "../../assets/images/aboutus.png";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

function AboutUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const teamMembers = [
    {
      name: "Swapnil Patle",
      title: "Founder and CEO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrNO-3i-suP7E4U1ujqk67dgi4mkiqiMQBQ&s",
      linkedin: "https://in.linkedin.com/in/swapnil-patle-821534223",
    },
    {
      name: "Ghamesh Rahangdale",
      title: "Co-Founder",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEBmg-wc9nIAQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679968900193?e=1734566400&v=beta&t=MN5EozGGIpoVFd6oCsK2gFe0DuTtIzBSi6tvUGg-RvA",
      linkedin: "https://in.linkedin.com/in/ghamesh-rahangdale-233753221",
    },
  ];

  return (
    <>
      <Row
        justify="start"
        align="middle"
        gutter={[16, 16]}
        style={{
          margin: "0 auto",
          padding: "20px 0 20px 40px",
          // background: "red", add background color
        }}
      >
        <Col xs={24} md={12}>
          <Title
            level={2}
            style={{
              color: "#723BDB",
            }}
          >
            Welcome to Engineer StudyHub: Your Gateway to Engineering Excellence
          </Title>
          <Text
            style={{
              fontSize: "19px",
              lineHeight: "1.6",
              marginTop: "40px",
              fontWeight: "400",
              color: "#737477",
            }}
          >
            Engineer StudyHub is a premier educational platform designed to
            empower future engineers with high-quality academic resources. We
            provide meticulously crafted subject notes, comprehensive past exam
            papers, and expertly produced video lectures to facilitate deeper
            understanding and academic achievement. Our commitment is to equip
            you with the tools necessary for excellence in your studies and to
            lay a solid foundation for a distinguished career in engineering.
          </Text>
        </Col>
        <Col
          xs={24}
          md={12}
          style={{ position: "relative", marginTop: "20px" }}
        >
          <img
            src="https://html.themewant.com/studyhub/assets/images/about/01.jpg"
            alt="Video"
            style={{
              width: "95%",
              height: "400px",
              borderRadius: "8px",
              objectFit: "cover",
              maxHeight: "450px",
              marginTop: "20px",
            }}
          />

          {/* Play Button Overlay */}
          <Button
            type="primary"
            shape="circle"
            icon={<PlayCircleOutlined />}
            size="large"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "36px",
              opacity: 0.8,
            }}
            onClick={showModal}
          />
        </Col>
      </Row>

      <Modal
        title="Video"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      </Modal>

      {/* Our Mission Section */}
      <div
        style={{
          padding: "40px 20px",
          backgroundColor: "#f0f2f5",
          marginTop: "10px",
        }}
      >
        <Row
          justify="center"
          align="middle"
          style={{
            maxWidth: "1400px",
            margin: "10px auto",
          }}
          gutter={[16, 16]}
        >
          {/* Full-width Column for Mission Content */}
          <Col
            xs={24}
            style={{
              textAlign: "center",
            }}
          >
            <Title level={1}>Our Mission</Title>
            <Title
              level={4}
              style={{
                color: "#48485E",
                fontWeight: 600,
              }}
            >
              Empowering Engineering Excellence
            </Title>
            <Text
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#737477",
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              At Engineer StudyHub, we empower aspiring engineers by providing
              top-quality resources tailored to their academic journey. Our
              platform features comprehensive subject notes, past year papers,
              and engaging video lectures, fostering an environment of learning
              and collaboration. We are committed to supporting each student in
              developing critical skills and achieving their career goals,
              shaping the future of engineering education together.
            </Text>
          </Col>
        </Row>
      </div>

      {/* Leadership team section */}
      <div style={{ padding: "40px 20px", backgroundColor: "#f0f2f5" }}>
        <Row
          justify="center"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          <Col span={24}>
            <Title level={1}>Leadership Team</Title>
          </Col>
        </Row>

        {/* Leader Cards */}
        <Row
          justify="center"
          gutter={[24, 24]}
          style={{ maxWidth: "1200px", margin: " auto", marginTop: "50px" }}
        >
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                className="aboutus-card"
                style={{
                  borderRadius: "8px",
                  textAlign: "center",
                  overflow: "hidden",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  height: "420px",
                  padding: "10px",
                  margin: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px 0",
                    padding: "10px",
                  }}
                >
                  <img
                    alt={member.name}
                    src={member.image}
                    style={{
                      borderRadius: "50%",
                      width: "110px",
                      height: "110px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Title
                  level={4}
                  style={{
                    fontSize: "20px",
                    marginBottom: "5px",
                    padding: "5px",
                    fontWeight: "600",
                  }}
                >
                  {member.name}
                </Title>
                <Text
                  type="primary"
                  style={{
                    marginBottom: "5px",
                    display: "block",
                    padding: "4px",
                    fontWeight: "450",
                  }}
                >
                  {member.title}
                </Text>
                <div style={{ padding: "30px" }}>
                  <Link
                    to={member.linkedin}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor: "#0077B5",
                      color: "#fff",
                      borderRadius: "5px",
                      padding: "8px 16px",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "background-color 0.3s",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 8px",
                    }}
                  >
                    <LinkedinOutlined
                      style={{ fontSize: "18px", marginRight: "4px" }}
                    />
                    <Text
                      style={{ margin: 0, fontSize: "16px", color: "#fff" }}
                    >
                      LinkedIn
                    </Text>{" "}
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* contact information */}
      <section style={{ padding: "40px 20px" }}>
        <Row
          gutter={[16, 16]}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            background: "#4687E9",
            borderRadius: "8px",
            height: "100%",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Col xs={24} md={12} style={{ textAlign: "left" }}>
            <h6
              style={{
                fontSize: "22px",
                color: "white",
              }}
            >
              GET IN TOUCH
            </h6>
            <h5
              style={{
                fontSize: "30px",
                margin: "10px 0",
                color: "white",
              }}
            >
              For Queries, Feedback or Assistance
            </h5>
            <Link to="/ContactUs">
              <Button
                type="primary"
                size="large"
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  background: "#fff",
                  color: "#4687E9",
                  fontWeight: "700",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Col>
          <Col
            xs={0}
            md={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingLeft: "20px",
            }}
          >
            <img
              src={logo}
              alt="Banner"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "5px",
                objectFit: "cover",
                marginLeft: "60px",
              }}
            />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default AboutUs;
