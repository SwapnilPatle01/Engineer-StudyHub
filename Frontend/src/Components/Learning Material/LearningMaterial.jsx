import React, { useState } from "react";
import {
  Menu,
  Layout,
  Button,
  Select,
  Tabs,
  Card,
  Row,
  Col,
  Empty,
  Typography,
  Image,
} from "antd";

const { Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

const mockData = {
  notes: [
    {
      title: "Note 1",
      pdf: "https://docs.google.com/document/d/1hlskK9_sxeY5WeB7ar9cuvltlehZYFrSJkcY8eL8mz8/edit",
    },
    { title: "Note 2", pdf: "/path/to/note2.pdf" },
    { title: "Note 3", pdf: "/path/to/note3.pdf" },
  ],
  pyqs: [
    { title: "PYQ 1", pdf: "/path/to/pyq1.pdf" },
    { title: "PYQ 2", pdf: "/path/to/pyq2.pdf" },
    { title: "PYQ 3", pdf: "/path/to/pyq3.pdf" },
  ],
  syllabus: [
    { title: "Syllabus 1", pdf: "/path/to/syllabus1.pdf" },
    { title: "Syllabus 2", pdf: "/path/to/syllabus2.pdf" },
    { title: "Syllabus 3", pdf: "/path/to/syllabus3.pdf" },
  ],
  videoLectures: [
    {
      title: "Create server in node js & callback function javascript",
      link: "https://www.youtube.com/watch?v=bflieVmJQeg",
      thumbnail:
        "https://i.ytimg.com/vi/bflieVmJQeg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDvFXeCP9aZqpNqfScwHTtwLosaxw",
    },
    {
      title: "Why should you (not) write GATE Exam?",
      link: "https://www.youtube.com/watch?v=RoussHHwZGI",
      thumbnail:
        "https://i.ytimg.com/vi/RoussHHwZGI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCcalEkAqaHnv8qmtzDSo5H7Fz8wA",
    },
    {
      title: "Express js tutorial for beginners | REST api node js express | ",
      link: "https://www.youtube.com/watch?v=qthiEMUDCkU&list=PLzjZaW71kMwScTRKzoasdyB1sX-a9EbFp&index=5",
      thumbnail:
        "https://i.ytimg.com/vi/qthiEMUDCkU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBvOZ61X5OcIlwQMYYtDPKp91JbqA",
    },
  ],
};

// Subjects for each semester
const subjectsBySemester = {
  "1st": [
    "Mathematics",
    "Physics",
    "Basic Electrical Engineering",
    "Chemistry",
    "Programming in C",
  ],
  "2nd": [
    "Discrete Mathematics",
    "Data Structures",
    "Digital Electronics",
    "Operating Systems",
    "OOPS in Java",
  ],
  "8th": [
    "Computer and Network Security",
    "Natural Language Processing",
    "Deep Learning",
    "Waste management",
    "Final Year Project",
  ],
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
            <h1
              style={{ color: "#553CDF", fontWeight: "700", marginTop: "50px" }}
            >
              Engineer's Library
            </h1>
            <h2 style={{ fontSize: "16px", color: "#000", marginTop: "50px" }}>
              Search your learning Materials
            </h2>
          </div>

          <div
            style={{ marginBottom: "30px", width: "250px", marginTop: "20px" }}
          >
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
              <Option value="CS">Computer Science and Engineering</Option>
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
                      <Card bordered={false}>
                        <Row align="middle">
                          {/* Thumbnail on the left */}
                          <Col flex="80px">
                            <Image
                              width={240}
                              height={130}
                              style={{
                                borderRadius: "9px",
                              }}
                              src={
                                lecture.thumbnail ||
                                "https://via.placeholder.com/80"
                              }
                              alt={lecture.title}
                            />
                          </Col>

                          {/* Title in the middle */}
                          <Col flex="auto" style={{ padding: "0 16px" }}>
                            <h3>{lecture.title}</h3>
                          </Col>

                          {/* Watch button on the right */}
                          <Col>
                            <Button
                              type="primary"
                              style={{ border: "none" }}
                              onClick={() =>
                                window.open(lecture.link, "_blank")
                              }
                            >
                              Watch
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            </Tabs>
          </Content>
        ) : (
          <Empty
          style={{marginTop:"200px"}}
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 170,
            }}
            description={
              <Typography.Text>
                No data availabe! Head towards the sidebar and search you will find your resources
              </Typography.Text>
            }
          >
          </Empty>
        )}
      </Layout>
    </Layout>
  );
}

export default LearningMaterial;
