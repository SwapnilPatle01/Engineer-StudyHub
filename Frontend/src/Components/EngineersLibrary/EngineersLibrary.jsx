import React, { useState, useEffect } from "react";
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
} from "antd";
import axios from "axios";
import "./EngineersLibrary.css";
import LandingForNotes from "./../Home/Hero/LandingForNotes";

const { Sider, Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

function LearningMaterial() {
  const [universities, setUniversities] = useState([]);
  const [branches, setBranches] = useState([]); // Changed to plural for clarity
  const [semesters, setSemesters] = useState([]); // Changed to plural for clarity
  const [subjects, setSubjects] = useState([]); // Changed to plural for clarity
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null); // Track selected subject
  const [showContent, setShowContent] = useState(true);
  const [submittedLearning, setSubmittedLearning] = useState([]);
  const [notes, setNotes] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [videoLectures, setVideoLectures] = useState([]);
  // const [syllabus,setSyllabus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/resource/resources"
        );
        const learningData = response.data;
        setSubmittedLearning(learningData);
        console.log(learningData);

        // Extract unique universities
        const uniqueUniversities = [
          ...new Set(learningData.map((item) => item.university)),
        ];
        setUniversities(uniqueUniversities);

        // Extract notes, pyqs, and video lectures
        const notesData = learningData
          .map((item) => ({
            title: item.note?.title || "No title",
            pdf: item.note?.pdfUrl,
          }))
          .filter((note) => note.pdf);

        const pyqsData = learningData
          .map((item) => ({
            title: item.pyq?.title || "No title",
            pdf: item.pyq?.pdfUrl,
          }))
          .filter((pyq) => pyq.pdf);

        // const syllabusData = learningData.map(item => ({
        //     title: item.syllabus?.title || 'No title',
        //    pdf: item.syllabus?.pdfUrl
        //    })).filter(syllabus => syllabus.pdf);

        const videoLecturesData = learningData
          .map((item) => ({
            title: item.video?.title || "No title",
            link: item.video?.videoUrl,
          }))
          .filter((video) => video.link);

        setNotes(notesData);
        setPyqs(pyqsData);
        // setSyllabus(syllabusData);
        setVideoLectures(videoLecturesData);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchData();
  }, []);

  // Handle university change
  const handleUniversityChange = (value) => {
    setSelectedUniversity(value);
    const filteredBranches = submittedLearning.filter(
      (item) => item.university === value
    );
    const uniqueBranches = [
      ...new Set(filteredBranches.map((item) => item.branch)),
    ];
    setBranches(uniqueBranches);

    // Reset the dependent fields
    setSelectedBranch(null);
    setSelectedSemester([]);
    setSubjects([]);
  };

  // Handle branch change
  const handleBranchChange = (value) => {
    setSelectedBranch(value);
    const filteredSemesters = submittedLearning.filter(
      (item) => item.university === selectedUniversity && item.branch === value
    );
    const uniqueSemesters = [
      ...new Set(filteredSemesters.map((item) => item.semester)),
    ];
    setSemesters(uniqueSemesters);

    // Reset the dependent fields
    setSelectedSemester(null);
    setSubjects([]);
  };

  // Handle semester change
  const handleSemesterChange = (value) => {
    setSelectedSemester(value);
    const filteredSubjects = submittedLearning.filter(
      (item) =>
        item.university === selectedUniversity &&
        item.branch === selectedBranch &&
        item.semester === value
    );
    const uniqueSubjects = [
      ...new Set(filteredSubjects.map((item) => item.subject)),
    ];
    setSubjects(uniqueSubjects);
  };

  // Handle subject change
  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
  };

  // Handle Search button click
  const handleSearch = () => {
    setShowContent(true);
  };

  // Filter notes, pyqs, and videos based on selected subject
  const filteredNotes = notes.filter((note) =>
    submittedLearning.some(
      (item) =>
        item.note?.title === note.title && item.subject === selectedSubject
    )
  );

  const filteredPyqs = pyqs.filter((pyq) =>
    submittedLearning.some(
      (item) =>
        item.pyq?.title === pyq.title && item.subject === selectedSubject
    )
  );

  const filteredVideos = videoLectures.filter((video) =>
    submittedLearning.some(
      (item) =>
        item.video?.title === video.title && item.subject === selectedSubject
    )
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ background: "#f0f0f0" }}>
        <div
          className="material-search-area"
          style={{
            background: "linear-gradient(90deg, #553CDF, #1a2980)",
            width: "100%",
            height: "auto",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#fff", paddingTop: "20px", fontWeight: "700" }}>
            Engineer's Library
          </h1>
          <p style={{ color: "#fff" }}>
            Unlock high-quality study materials and notes crafted by top
            achievers from renowned universities such as RTMNU, MIT-WPU, COEP,
            VJTI Mumbai, and more!
          </p>
          <div
            className="search-bars-container"
            style={{ display: "flex", marginBottom: "30px" }}
          >
            <div style={{ width: "250px", marginRight: "10px" }}>
              <Select
                placeholder="Select University"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  border: "1px solid #ff5000",
                }}
                onChange={handleUniversityChange}
                value={selectedUniversity}
              >
                {universities.map((uni, index) => (
                  <Option key={index} value={uni}>
                    {uni}
                  </Option>
                ))}
              </Select>
            </div>
            <div style={{ width: "250px", marginRight: "10px" }}>
              <Select
                placeholder="Select Branch"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  border: "1px solid #ff5000",
                }}
                onChange={handleBranchChange}
                value={selectedBranch}
                disabled={!selectedUniversity}
              >
                {branches.map((br, index) => (
                  <Option key={index} value={br}>
                    {br}
                  </Option>
                ))}
              </Select>
            </div>

            <div style={{ width: "250px", marginRight: "10px" }}>
              <Select
                placeholder="Select Semester"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  border: "1px solid #ff5000",
                }}
                onChange={handleSemesterChange}
                value={selectedSemester}
                disabled={!selectedBranch}
              >
                {semesters.map((sem, index) => (
                  <Option key={index} value={sem}>
                    {sem}
                  </Option>
                ))}
              </Select>
            </div>

            <div style={{ width: "250px", marginRight: "10px" }}>
              <Select
                placeholder="Select Subject"
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  border: "1px solid #ff5000",
                }}
                onChange={handleSubjectChange}
                value={selectedSubject}
                disabled={!selectedSemester}
              >
                {Array.isArray(subjects) &&
                  subjects.map((sub, index) => (
                    <Option key={index} value={sub}>
                      {sub}
                    </Option>
                  ))}
              </Select>
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#553CDF",
                padding: "6px 50px",
                width: "100%",
              }}
              onClick={handleSearch}
              disabled={!selectedSubject}
            >
              Let's Find
            </Button>
          </div>
        </div>

        {showContent ? (
          <Content style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab="Notes"
                  key="1"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Row gutter={[16, 16]}>
                    {filteredNotes.map((note, index) => (
                      <Col span={24} sm={12} md={8} lg={23} key={index}>
                        <Card title={note.title} bordered={false}>
                          <div>
                            <Button
                              style={{ marginRight: "10px" }}
                              onClick={() =>
                                window.open(
                                  `http://localhost:5000/${note.pdf}`,
                                  "_blank"
                                )
                              }
                            >
                              View
                            </Button>
                            <Button
                              type="primary"
                              style={{ border: "none" }}
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = `http://localhost:5000/${note.pdf}`;
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
                    {filteredPyqs.map((pyq, index) => (
                      <Col span={24} sm={12} md={8} lg={23} key={index}>
                        <Card title={pyq.title} bordered={false}>
                          <div>
                            <Button
                              style={{ marginRight: "10px" }}
                              onClick={() =>
                                window.open(
                                  `http://localhost:5000/${pyq.pdf}`,
                                  "_blank"
                                )
                              }
                            >
                              View
                            </Button>
                            <Button
                              type="primary"
                              style={{ border: "none" }}
                              onClick={() => {
                                const link = document.createElement("a");
                                link.href = `http://localhost:5000/${pyq.pdf}`;
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

                {/* comment for syllabus */}

                {/* <TabPane tab="Syllabus" key="3">
                <Row gutter={[16, 16]}>
                  {syllabus.map((syllabusItem, index) => (
                    <Col span={24} key={index}>
                      <Card title={syllabusItem.title} bordered={false}>
                        <div>
                          <Button
                            style={{ marginRight: "10px" }}
                            onClick={() => window.open(syllabusItem.pdf, "_blank")}
                          >
                            View
                          </Button>
                          <Button
                            type="primary"
                            style={{ border: "none" }}
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = syllabusItem.pdf;
                              link.setAttribute("download", syllabusItem.title);
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
              </TabPane>  */}

                <TabPane tab="Video Lectures" key="3">
                  <Row gutter={[16, 16]}>
                    {filteredVideos.map((video, index) => (
                      <Col
                        span={24}
                        sm={12}
                        md={8}
                        lg={23}
                        key={index}
                        style={{ backgroundColor: "#fff" }}
                      >
                        <Card title={video.title} bordered={false}>
                          <div>
                            <div>
                              <img
                                style={{
                                  width: "250px",
                                  marginBottom: "20px",
                                }}
                                src="https://i.ytimg.com/vi/I7RWAQgMRVI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPnfC0gGKXWqKMuH9-orfmCbLaMA"
                                alt="img"
                              />
                            </div>
                            <Button
                              type="primary"
                              style={{ width: "120px" }}
                              onClick={() => window.open(video.link, "_blank")}
                            >
                              Watch Video
                            </Button>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              </Tabs>
            </div>
            <div>
              {filteredNotes.length === 0 &&
                filteredPyqs.length === 0 &&
                filteredVideos.length === 0 && (
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{ height: 150, marginTop: "20px" }}
                    description={
                      <Typography.Text
                        style={{ fontSize: "15px", marginBottom: "30px" }}
                      >
                        There is nothing to show! Just head towards the
                        selectors given above to search for Notes, PYQs,
                        Syllabus, Video Lecture
                      </Typography.Text>
                    }
                  />
                )}
            </div>
          </Content>
        ) : (
          <Content style={{ padding: "24px", textAlign: "center" }}>
            {/* <h2>Please select the options to display the learning materials.</h2> */}
          </Content>
        )}
      </Layout>
    </Layout>
  );
}

export default LearningMaterial;
