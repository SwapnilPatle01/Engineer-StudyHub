import React, { useState } from "react";
import { Layout, Button, Select, Menu, Card, Row, Col } from "antd";
import HeroSection from "../Home/HeroSection";

const { Sider, Content } = Layout;
const { Option } = Select;

const mockData = {
  notes: ["Note 1", "Note 2", "Note 3"],
  pyqs: ["PYQ 1", "PYQ 2", "PYQ 3"],
  syllabus: ["Syllabus 1", "Syllabus 2", "Syllabus 3"],
  videoLectures: ["Lecture 1", "Lecture 2", "Lecture 3"],
};

// Subjects for each semester
const subjectsBySemester = {
  "1st": ["Mathematics", "Physics", "Basic Electrical Engineering", "Chemistry", "Programming in C"],
  "2nd": ["Discrete Mathematics", "Data Structures", "Digital Electronics", "Operating Systems", "OOPS in Java"],
  "3rd": ["Algorithms", "Computer Organization", "Theory of Computation", "Database Management Systems", "Computer Networks"],
  "4th": ["Software Engineering", "Compiler Design", "Artificial Intelligence", "Web Technologies", "Microprocessors"],
  "5th": ["Machine Learning", "Big Data Analytics", "Cloud Computing", "Cryptography", "Network Security"],
  "6th": ["Data Mining", "Natural Language Processing", "Mobile Computing", "IoT", "Parallel Computing"],
  "7th": ["Cyber Security", "Blockchain Technology", "Quantum Computing", "Augmented Reality", "Distributed Systems"],
  "8th": ["Project Management", "Advanced Machine Learning", "Deep Learning", "DevOps", "Final Year Project"],
};

function LearningMaterial() {
  const [university, setUniversity] = useState(null);
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);
  const [showContent, setShowContent] = useState(false);

  // Handle Search button click
  const handleSearch = () => {
    setShowContent(true);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={285} backgroundColor="#553CDF">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            height: "100%",
            borderRight: 0,
            backgroundColor: "#fff",
            padding: "16px",
            fontSize: "16px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: "#553CDF", fontWeight: "700", marginTop: "50px" }}>
              Engineer's Library
            </h1>
            <h2 style={{ fontSize: "16px", color: "#000", marginTop: "50px" }}>
              Search your learning Materials
            </h2>
          </div>

          <div style={{ marginBottom: "30px", width: "250px", marginTop: "20px" }}>
            <Select
              placeholder="Select University"
              style={{ width: "100%" }}
              onChange={(value) => setUniversity(value)}
            >
              <Option value="RGPV">RGPV</Option>
              <Option value="IITD">IIT Delhi</Option>
              <Option value="DU">University of Delhi</Option>
            </Select>
          </div>

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Branch"
              style={{ width: "100%" }}
              onChange={(value) => setBranch(value)}
              disabled={!university}
            >
              <Option value="CS">Computer Science</Option>
              <Option value="IT">Information Technology</Option>
            </Select>
          </div>

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Semester"
              style={{ width: "100%" }}
              onChange={(value) => setSemester(value)}
              disabled={!branch}
            >
              {Object.keys(subjectsBySemester).map((sem) => (
                <Option key={sem} value={sem}>
                  {sem} Semester
                </Option>
              ))}
            </Select>
          </div>

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Subject"
              style={{ width: "100%" }}
              onChange={(value) => setSubject(value)}
              disabled={!semester}
            >
              {semester &&
                subjectsBySemester[semester].map((subject) => (
                  <Option key={subject} value={subject}>
                    {subject}
                  </Option>
                ))}
            </Select>
          </div>

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Button
              style={{
                backgroundColor: "#553CDF",
                color: "#fff",
                padding: "10px 50px",
                width: "100%",
              }}
              onClick={handleSearch}
              disabled={!subject}
            >
              Search
            </Button>
          </div>
        </Menu>
      </Sider>

      <Layout style={{ background: "#f0f0f0" }}>
        {showContent ? (
          <Content style={{ padding: "24px" }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card title="Notes" bordered={false}>
                  {mockData.notes.map((note, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{note}</span>
                      <div>
                        <Button
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                        >
                          View
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            border: "none",
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Previous Year Questions" bordered={false}>
                  {mockData.pyqs.map((pyq, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{pyq}</span>
                      <div>
                        <Button
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                        >
                          View
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            border: "none",
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Syllabus" bordered={false}>
                  {mockData.syllabus.map((syllabus, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{syllabus}</span>
                      <div>
                        <Button
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                        >
                          View
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            border: "none",
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </Card>
              </Col>
              <Col span={24}>
                <Card title="Video Lectures" bordered={false}>
                  {mockData.videoLectures.map((lecture, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{lecture}</span>
                      <div>
                        <Button
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                        >
                          View
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            width: "auto",
                            height: "auto",
                            padding: "5px 30px",
                            marginBottom: "10px",
                            border: "none",
                          }}
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </Card>
              </Col>
            </Row>
          </Content>
        ) : (
          <HeroSection />
        )}
      </Layout>
    </Layout>
  );
}

export default LearningMaterial;
