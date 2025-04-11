import React from "react";
import { Layout, Row, Col, Card, Button, Typography } from "antd";
import { StarOutlined, ForkOutlined,TwitterOutlined, GithubOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { FaDiscord } from "react-icons/fa";
// import menuData from "../../../assets/data/menuData";
import categories from "../../../assets/data/categoryData";
import { Link } from "react-router-dom";
import "../DeveloperHub.css";

const { Title, Text } = Typography;

// Moved static data outside component
const socialLinks = [
    {
      icon: <TwitterOutlined style={{ fontSize: "30px", color: "#1DA1F2" }} />,
      title: "Twitter",
      text: "Follow us on Twitter to get updates, announcements, and general information.",
    },
    {
      icon: <FaDiscord style={{ fontSize: "30px", color: "#7289DA" }} />,
      title: "Discord",
      text: "Join our Discord community for updates, questions, and tips sharing.",
    },
    {
      icon: <GithubOutlined style={{ fontSize: "30px", color: "#333" }} />,
      title: "GitHub",
      text: "Join us on GitHub to report issues, suggest features, and contribute.",
    },
  ];

const MainContent = () => {

  // Memoize categories to prevent recalculation
  const memoizedCategories = React.useMemo(() => Object.values(categories), []);

  return (
    <Layout
      style={{
        marginLeft: 10,
        padding: "20px",
        minHeight: "100vh",
        maxHeight: "600px",
        overflowY: "auto",
        background: "#ffffff",
      }}
    >
      <div>
        <Title
          style={{
            fontSize: "22px",
            marginBottom: "8px",
          }}
        >
          Welcome!
        </Title>
        <Text
          style={{
            fontSize: "16px",
            color: "#A6ABBF",
            marginRight: "10px",
          }}
        >
          Welcome to the Engineer Study Hub. Explore various technologies!
        </Text>
      </div>
      <Row
        gutter={[24, 16]}  
        style={{
          marginTop: "20px",
          borderRadius: "25px",
          padding: "16px",
          background: "#F8F9FF",
        }}
      >
        {/* Left Side with Title and Description */}
        <Col xs={24} md={16}>
          <Title level={2} style={{ color: "#553cdf" }}>
            Engineer Study Hub
          </Title>
          <Text
            style={{ fontSize: "17px", lineHeight: "1.6", color: "#737477" }}
          >
            Engineer Study Hub provides essential resources like subject notes,
            past year question papers, and video lectures to help you excel in
            your studies. Unlock your potential and pave your way to academic
            and professional success with us!
          </Text>
        </Col>

        {/* Right Side with Two Boxes */}
        <Col xs={24} md={8}>
          <Row gutter={[18, 12]}>
            <Col span={12}>
              <Card
                headStyle={{
                  borderBottom: "none",
                }}
                style={{
                  background: "#0000000D",
                  height: "180px",
                  marginTop: "10px",
                }}
                bordered={false}
                extra={
                  <StarOutlined
                    style={{
                      fontSize: "26px",
                      color: "black",
                      padding: "4px",
                      background: "#FBD449",
                      borderRadius: "15px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      marginTop: "15px",
                    }}
                  />
                }
              >
                <div>
                  <span
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "500",
                      lineHeight: "2.25rem",
                    }}
                  >
                    789
                  </span>
                  <span style={{ fontSize: "1.25rem" }}>Stars</span>
                </div>
                <div style={{ marginTop: "8px" }}>
                  <Button
                    type="primary"
                    style={{
                      fontSize: "14px",
                      width: "100%",
                      background: "#FBD449",
                      color: "#000000",
                    }}
                  >
                    Give a Star
                  </Button>
                </div>
              </Card>
            </Col>

            {/* Second Card with Fork Icon */}
            <Col span={12}>
              <Card
                headStyle={{
                  borderBottom: "none",
                }}
                style={{
                  background: "#0000000D",
                  height: "180px",
                  marginTop: "12px",
                }}
                bordered={false}
                extra={
                  <ForkOutlined
                    style={{
                      fontSize: "26px",
                      color: "white",
                      background: "#714EFF",
                      borderRadius: "15px",
                      padding: "4px",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      marginTop: "15px",
                    }}
                  />
                }
              >
                <div>
                  <span
                    style={{
                      fontSize: "1.875rem",
                      fontWeight: "500",
                      lineHeight: "2.25rem",
                    }}
                  >
                    570
                  </span>
                  <span style={{ fontSize: "1.25rem" }}>Forks</span>
                </div>
                <div style={{ marginTop: "8px" }}>
                  <Button
                    type="primary"
                    style={{
                      width: "100%",
                      background: "#714EFF",
                      fontSize: "14px",
                    }}
                  >
                    Contribute Now
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Card Row */}
      <div>
        <Title
          style={{
            margin: "25px 0px 8px 0px",
            fontSize: "22px",
          }}
        >
          Community
        </Title>
        <Text style={{ fontSize: "16px", color: "#A6ABBF" }}>
          Get involved! Everyone is welcome!
        </Text>
      </div>
      {/* // */}
      <div>
        <Row gutter={[16, 16]} style={{ marginTop: "24px", width: "100%" }}>
          {socialLinks.map((link) => (  // Changed from index to link as key
            <Col xs={24} sm={12} md={8} key={link.title}> {/* Use title as key */}
              <Card
                className="social-card card-hover-effect" 
                headStyle={{ borderBottom: "none" }}
                style={{
                  minHeight: "200px",
                  border: "none",
                  background: "#F8F9FF",
                }}
                bordered={false}
                hoverable
                // Remove this duplicate className because react will onlly use the last className declaration
                // className="card-hover-effect"
                title={
                  <Row align="middle">
                    <Col>{link.icon}</Col>
                    <Col>
                      <Text style={{ fontSize: "20px", paddingLeft: "10px" }}>
                        {link.title}
                      </Text>
                    </Col>
                  </Row>
                }
              >
                <Text
                  style={{
                    fontSize: "17px",
                    color: "#737477",
                    lineHeight: 1.6,
                  }}
                >
                  {link.text}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/*  resources card */}
      <div>
        <Title
          style={{
            marginTop: "15px",
            marginBottom: "8px",
            fontSize: "22px",
          }}
        >
          Resources
        </Title>
        <Text style={{ fontSize: "16px", color: "#A6ABBF" }}>
          We've curated a wealth of resources just for you. Go ahead and explore
          at your own pace.
        </Text>
      </div>
  
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        {memoizedCategories.map((category) => (
          <Col xs={24} sm={12} md={8} key={category.key}>
            <Link to={`/resources/${category.key}`} style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
              <Card
                bordered={false}
                hoverable
                style={{
                  padding: "16px",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  background: "#F8F9FF",
                  borderRadius: "12px",
                  height: "100%",
                }}
                className="hover-card"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "18px",
                      color: "#737477",
                      fontWeight: "500",
                    }}
                  >
                    {category.title}
                  </Text>
                  <ArrowRightOutlined
                    className="arrow-icon"
                    style={{
                      fontSize: "18px",
                      color: "#553cdf",
                      opacity: 0.5,
                    }}
                  />
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default React.memo(MainContent);