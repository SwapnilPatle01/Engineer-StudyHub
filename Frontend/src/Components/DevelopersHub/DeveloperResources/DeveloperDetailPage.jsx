import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Card, Button, Row, Col, Pagination, message } from "antd";
import { CopyOutlined, LinkOutlined } from "@ant-design/icons";
import { MdArrowBackIos } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import topicsData from "../../../assets/data/topicsData";
import { Link } from "react-router-dom";

const { Content } = Layout;

const DeveloperDetailPage = () => {
  const { key } = useParams();
  const topic = topicsData[key];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!topic) {
    return (
      <div style={{ padding: "24px", fontSize: "14px" }}>
        <h1>Topic Not Found</h1>
      </div>
    );
  }

  const handleCopy = (subtopic) => {
    navigator.clipboard.writeText(subtopic);
    message.success("Copied successfully");
  };

  const handleView = (link) => {
    window.open(link, "_blank");
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSubtopics = topic.subtopics.slice(startIndex, endIndex);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content
          style={{
            padding: "20px",
            margin: 0,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              color: "#553cdf",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Link
                to="/DevelopersHub"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <MdArrowBackIos />
              </Link>
            </span>
            {topic.title}
          </h1>
          <Row gutter={[16, 22]}>
            {paginatedSubtopics.map((subtopic, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  title={subtopic.name}
                  bordered={false}
                  className="card-hover-effect"
                  headStyle={{
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "500",
                    paddingTop: "22px",
                  }}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                    border: "1px solid #F8F9FF",
                    borderRadius: "14px",
                    background: "#F8F9FF",
                    flex: "1",
                    // boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "1.5",
                      fontSize: "16px",
                      marginTop: "0",
                      marginBottom: "0",
                      color: "#737477",
                    }}
                  >
                    {subtopic.description}
                  </p>
                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      icon={<CopyOutlined />}
                      onClick={() => handleCopy(subtopic.link)}
                      style={{
                        borderColor: "#553cdf",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-around",
                        width: "120px",
                      }}
                    >
                      Copy Link
                    </Button>
                    <Button
                      onClick={() => handleView(subtopic.link)}
                      icon={<LinkOutlined />}
                      style={{
                        backgroundColor: "#553cdf",
                        color: "white",
                        borderColor: "#553cdf",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-around",
                        width: "120px",
                      }}
                    >
                      Visit site
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div
            style={{
              marginTop: "26px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={topic.subtopics.length}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeveloperDetailPage;
