import { Typography, Button, Modal, Row, Col, Card } from "antd";
import { PlayCircleOutlined, LinkedinOutlined } from "@ant-design/icons";
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
      name: "Ethan Caldwell",
      title: "Founder",
      description:
        "As the full stack developer and founder of Engineer StudyHub, Ethan Caldwell is committed to providing future engineers with accessible, high-quality educational resources. With a robust engineering background, he drives the platform's mission to integrate academic knowledge with practical industry skills, ensuring students are well-prepared for their careers.",
      image:
        "https://eencrypted-tbn0.gstateic.com/images?q=tbn:ANd9GcROrNO-3i-suP7E4U1ujqk67dgi4mkiqiMQBQ&s",
      linkedin: "https://in.linkedin.com/in-821534223",
    },
    {
      name: "Ryan Fischer",
      title: "Co-Founder",
      description:
        "Co-founder and React full stack developer of Engineer StudyHub, Ryan Fischer plays a pivotal role in the platform's development. His expertise in modern web technologies helps create a seamless learning experience, empowering engineering students with the tools they need for success in their academic and professional journeys.",
      image:
        "https://media.licdn.com/dms/imagse/v2/D5603AQEBmg-wc9nIAQ/profile-displayphoto-sshrink_400_400/profile-displayphoto-shrink_400_400/0/1679968900193?e=1734566400&v=beta&td=MN5EozGGIpoVFd6oCsK2gFe0DuTtIzBSi6tvUGg-RvA",
      linkedin: "https://www.linkedin.com/in/-233753221/",
    },
    {
      name: "Dakota Bennett",
      title: "Co-Founder | Resource Management Specialist",
      description:
        "Co-founder and web developer of Engineer StudyHub, Dakota Bennett excels in resource management, ensuring efficient delivery of high-quality educational materials. His web development skills enhance the platform’s functionality, creating a seamless user experience for engineering students.",
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQHymr7VyxLdtg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1721381594722?e=1731218400&v=beta&t=8R-EeNSkRG2y0fosXkzCchCeE46Ta-uXM_KDGfQ1FCs",
      linkedin: "https://www.linkedin.com/in/hari-yengantiwar-09592a257/",
    },
    {
      name: "Prof. Rahul Bhandekar",
      title: "Guide and Mentor",
      description:
        "Prof. Rahul Bhandarakar serves as a mentor for Engineer StudyHub. His guidance ensures that the platform's resources align with academic standards, supporting students in developing the critical skills necessary for their careers.",
      image:
        "https://static.wixstatic.com/media/d890ed_8b0ed38afff841dc99be56fb67a7511a~mv2.png/v1/crop/x_0,y_2,w_285,h_251/fill/w_233,h_205,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image014.png",
      linkedin: "https://in.linkedin.com",
    },
    {
      name: "Rupendra Girare",
      title: "Startup Entrepreneur | Mentor",
      description:
        "Rupendra Girare is a startup entrepreneur and YouTuber passionate about cryptocurrency and digital content creation. His insights on emerging technologies and entrepreneurial strategies inspire aspiring business leaders, while his mentorship fosters creativity and collaboration within the community.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQE1PRl7imis4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726749964356?e=1736380800&v=beta&t=-k6-y_QQ6fC7eESx_j8EtWH-OZw58ZjYLIIt1qndOww",
      linkedin: "https://www.linkedin.com/in/rupendragirare/",
    },
  ];

  return (
    <>
      <Row
        justify="start"
        align="middle"
        gutter={[16, 16]}
        style={{ margin: "0 auto", padding: "20px 0 20px 40px" }}
      >
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: "#723BDB" }}>
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
          style={{ maxWidth: "1400px", margin: "10px auto" }}
          gutter={[16, 16]}
        >
          <Col xs={24} style={{ textAlign: "center" }}>
            <Title level={1}>Our Mission</Title>
            <Title level={4} style={{ color: "#48485E", fontWeight: 600 }}>
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

      <div style={{ padding: "40px 20px", backgroundColor: "#f0f2f5" }}>
        <Row
          justify="center"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          <Col span={24}>
            <Title level={1}>Leadership Team</Title>
          </Col>
        </Row>

        <Row
          justify="center"
          gutter={[24, 24]}
          style={{ maxWidth: "1200px", margin: "auto", marginTop: "50px" }}
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
                  // height: "100%",
                  padding: "10px",
                  margin: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "160px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "2px solid #723BDB",
                    }}
                  />
                </div>
                <Title
                  level={3}
                  style={{ color: "#723BDB", marginTop: "16px" }}
                >
                  {member.name}
                </Title>
                <Text
                  style={{
                    color: "#737477",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {member.title}
                </Text>
                <Text
                  style={{
                    marginTop: "6px",
                    color: "#737477",
                    fontSize: "13px",
                    textAlign: "justify",
                  }}
                >
                  {member.description}
                </Text>
                <Link
                  to={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="primary"
                    icon={<LinkedinOutlined />}
                    style={{ marginTop: "16px", borderRadius: "8px" }}
                  >
                    LinkedIn
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default AboutUs;
