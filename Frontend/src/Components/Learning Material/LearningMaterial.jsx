import React, { useState } from "react";
import {Menu, Layout, Button, Select, Tabs, Card, Row, Col } from "antd";
import HeroSection from "../Home/HeroSection";

const { Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

const mockData = {
  notes: [
    { title: "Note 1", pdf: "https://docs.google.com/document/d/1hlskK9_sxeY5WeB7ar9cuvltlehZYFrSJkcY8eL8mz8/edit" },
    { title: "Note 2", pdf: "/path/to/note2.pdf" },
    { title: "Note 3", pdf: "/path/to/note3.pdf" }
  ],
  pyqs: [
    { title: "PYQ 1", pdf: "/path/to/pyq1.pdf" },
    { title: "PYQ 2", pdf: "/path/to/pyq2.pdf" },
    { title: "PYQ 3", pdf: "/path/to/pyq3.pdf" }
  ],
  syllabus: [
    { title: "Syllabus 1", pdf: "/path/to/syllabus1.pdf" },
    { title: "Syllabus 2", pdf: "/path/to/syllabus2.pdf" },
    { title: "Syllabus 3", pdf: "/path/to/syllabus3.pdf" }
  ],
  videoLectures: [
    { title: "Lecture 1", link: "https://youtu.be/lecture1" },
    { title: "Lecture 2", link: "https://youtu.be/lecture2" },
    { title: "Lecture 3", link: "https://youtu.be/lecture3" }
  ]
};

// Subjects for each semester
const subjectsBySemester = {
  "1st": ["Mathematics", "Physics", "Basic Electrical Engineering", "Chemistry", "Programming in C"],
  "2nd": ["Discrete Mathematics", "Data Structures", "Digital Electronics", "Operating Systems", "OOPS in Java"],
  // Add other semesters as needed
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
            <Tabs defaultActiveKey="1">
              <TabPane tab="Notes" key="1">
                <Row gutter={[16, 16]}>
                  {mockData.notes.map((note, index) => (
                    <Col span={24} key={index}>
                      <Card title={note.title} bordered={false}>
                        <div>
                          <Button
                            style={{ marginRight: "10px" }}
                            onClick={() => window.open(note.pdf, "_blank")}
                          >
                            View
                          </Button>
                          <Button
                            type="primary"
                            style={{ border: "none" }}
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = note.pdf;
                              link.setAttribute("download", note.title);
                              document.body.appendChild(link);
                              link.click();
                              link.remove();
                            }}
                          >
                            Download
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              <TabPane tab="Previous Year Questions" key="2">
                <Row gutter={[16, 16]}>
                  {mockData.pyqs.map((pyq, index) => (
                    <Col span={24} key={index}>
                      <Card title={pyq.title} bordered={false}>
                        <div>
                          <Button
                            style={{ marginRight: "10px" }}
                            onClick={() => window.open(pyq.pdf, "_blank")}
                          >
                            View
                          </Button>
                          <Button
                            type="primary"
                            style={{ border: "none" }}
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = pyq.pdf;
                              link.setAttribute("download", pyq.title);
                              document.body.appendChild(link);
                              link.click();
                              link.remove();
                            }}
                          >
                            Download
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              <TabPane tab="Syllabus" key="3">
                <Row gutter={[16, 16]}>
                  {mockData.syllabus.map((syllabus, index) => (
                    <Col span={24} key={index}>
                      <Card title={syllabus.title} bordered={false}>
                        <div>
                          <Button
                            style={{ marginRight: "10px" }}
                            onClick={() => window.open(syllabus.pdf, "_blank")}
                          >
                            View
                          </Button>
                          <Button
                            type="primary"
                            style={{ border: "none" }}
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = syllabus.pdf;
                              link.setAttribute("download", syllabus.title);
                              document.body.appendChild(link);
                              link.click();
                              link.remove();
                            }}
                          >
                            Download
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>

              <TabPane tab="Video Lectures" key="4">
                <Row gutter={[16, 16]}>
                  {mockData.videoLectures.map((lecture, index) => (
                    <Col span={24} key={index}>
                      <Card title={lecture.title} bordered={false}>
                        <Button
                          type="primary"
                          style={{ border: "none" }}
                          onClick={() => window.open(lecture.link, "_blank")}
                        >
                          Watch
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            </Tabs>
          </Content>
        ) : (
          <HeroSection />
        )}
      </Layout>
    </Layout>
  );
}

export default LearningMaterial;
