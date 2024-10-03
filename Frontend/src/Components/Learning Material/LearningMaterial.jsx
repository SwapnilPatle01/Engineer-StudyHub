import React, { useState, useEffect } from "react";
import { Menu, Layout, Button, Select, Tabs, Card, Row, Col } from "antd";
import HeroSection from "../Home/HeroSection";
import axios from "axios";

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
  const [showContent, setShowContent] = useState(false);
  const [submittedLearning, setSubmittedLearning] = useState([]);
  const [notes, setNotes] = useState([]);
  const [pyqs, setPyqs] = useState([]);
  const [videoLectures, setVideoLectures] = useState([]);
  // const [syllabus,setSyllabus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/resource/resources');
        const learningData = response.data;
        setSubmittedLearning(learningData);
        console.log(learningData);

        // Extract unique universities
        const uniqueUniversities = [...new Set(learningData.map(item => item.university))];
        setUniversities(uniqueUniversities);
        
        // Extract notes, pyqs, and video lectures
        const notesData = learningData.map(item => ({
          title: item.note?.title || 'No title',  
          pdf: item.note?.pdfUrl
        })).filter(note => note.pdf);

        const pyqsData = learningData.map(item => ({
          title: item.pyq?.title || 'No title',
          pdf: item.pyq?.pdfUrl
        })).filter(pyq => pyq.pdf);

        // const syllabusData = learningData.map(item => ({
        //     title: item.syllabus?.title || 'No title',
        //    pdf: item.syllabus?.pdfUrl
        //    })).filter(syllabus => syllabus.pdf);

        const videoLecturesData = learningData.map(item => ({
          title: item.video?.title || 'No title',
          link: item.video?.videoUrl
        })).filter(video => video.link);

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
    const filteredBranches = submittedLearning.filter(item => item.university === value);
    const uniqueBranches = [...new Set(filteredBranches.map(item => item.branch))];
    setBranches(uniqueBranches);
    
    // Reset the dependent fields
    setSelectedBranch(null);
    setSelectedSemester([]);
    setSubjects([]);
  };

  // Handle branch change
  const handleBranchChange = (value) => {
    setSelectedBranch(value);
    const filteredSemesters = submittedLearning.filter(item => item.university === selectedUniversity && item.branch === value);
    const uniqueSemesters = [...new Set(filteredSemesters.map(item => item.semester))];
    setSemesters(uniqueSemesters);
    
    // Reset the dependent fields
    setSelectedSemester(null);
    setSubjects([]);
  };

  // Handle semester change
  const handleSemesterChange = (value) => {
    setSelectedSemester(value);
    const filteredSubjects = submittedLearning.filter(item => item.university === selectedUniversity && item.branch === selectedBranch && item.semester === value);
    const uniqueSubjects = [...new Set(filteredSubjects.map(item => item.subject))];
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
  const filteredNotes = notes.filter(note => 
    submittedLearning.some(item => item.note?.title === note.title && item.subject === selectedSubject)
  );

  const filteredPyqs = pyqs.filter(pyq => 
    submittedLearning.some(item => item.pyq?.title === pyq.title && item.subject === selectedSubject)
  );

  const filteredVideos = videoLectures.filter(video => 
    submittedLearning.some(item => item.video?.title === video.title && item.subject === selectedSubject)
  );

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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Branch"
              style={{ width: "100%" }}
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

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Semester"
              style={{ width: "100%" }}
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

          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select
              placeholder="Select Subject"
              style={{ width: "100%" }}
              onChange={handleSubjectChange}
              value={selectedSubject}
              disabled={!selectedSemester}
            >
              {Array.isArray(subjects) && subjects.map((sub, index) => (
                <Option key={index} value={sub}>
                  {sub}
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
              disabled={!selectedSubject}
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
                  {filteredNotes.map((note, index) => (
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
                  {filteredPyqs.map((pyq, index) => (
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
                    <Col span={24} key={index}>
                      <Card title={video.title} bordered={false}>
                        <div>
                          <Button
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
          </Content>
        ) : (
          <Content style={{ padding: "24px", textAlign: "center" }}>
            {/* <h2>Please select the options to display the learning materials.</h2> */}
            <HeroSection/>
          </Content>
        )}
      </Layout>
    </Layout>
  );
}

export default LearningMaterial;
