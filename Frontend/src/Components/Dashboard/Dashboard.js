import { Button, Modal, Input, Card, Image, Space, Popconfirm, Row, Col, Typography, Tag } from "antd";
import { DeleteFilled, EditFilled, FileTextOutlined, VideoCameraOutlined, BookOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import AddResource from "./AddResource";
import { Layout, Menu, Select } from "antd";
import "./Dashboard.css";
import "antd/dist/reset.css";
import axios from "axios";
import { message } from "antd";

const { Option } = Select;
const { Content } = Layout;
const { Search } = Input;
const { Title, Text } = Typography;

const tabList = [
  { key: "tab1", tab: <span><BookOutlined style={{ marginRight: "8px" }} />PYQ</span> },
  { key: "tab2", tab: <span><FileTextOutlined style={{ marginRight: "8px" }} />Notes</span> },
  { key: "tab3", tab: <span><VideoCameraOutlined style={{ marginRight: "8px" }} />Video</span> },
];

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [initialValues, setInitialValues] = useState(null);
  const [activeTabKeys, setActiveTabKeys] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/resource/resources",
      );
      console.log("API Response:", response.data);
      setSubmittedData(response.data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleTabChange = (index, key) => {
    setActiveTabKeys((prevState) => ({
      ...prevState,
      [index]: key,
    }));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleNewSubmission = async (newSubmission) => {
    try {
      if (isEdit) {
        // Update the existing resource using axios.put
        const updatedResource = await axios.put(
          `http://localhost:5000/api/v1/resource/${submittedData[editIndex]._id}`,
          newSubmission,
        );
        // Update the state with the updated resource
        const updatedData = submittedData.map((item, index) =>
          index === editIndex ? updatedResource.data : item,
        );
        setSubmittedData(updatedData);
        setIsEdit(false);
        setEditIndex(null);
      } else {
        // Add new resource using axios.post
        const addedResource = await axios.post(
          "http://localhost:5000/api/v1/resource",
          newSubmission,
        );
        // Add the new resource to the state
        setSubmittedData((prevData) => [...prevData, addedResource.data]);
      }
      setIsModalVisible(false);
      setInitialValues(null);
      message.success("Resource saved successfully!");
    } catch (error) {
      console.error("Error saving resource:", error);
      message.error("Failed to save the resource!");
    }
  };

  const viewPdf = (file) => {
    console.log(file, "file");
    
    // Make sure the URL is properly formatted
    let fileURL = file;
    if (file && !file.startsWith('http')) {
      fileURL = `http://localhost:5000${file.startsWith('/') ? '' : '/'}${file}`;
    }
    
    console.log("Opening URL:", fileURL);
    window.open(fileURL, "_blank");
  };

  const openVideoLink = (url) => {
    window.open(url, "_blank");
  };

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/resource/${id}`);
      setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
      message.success("Successfully deleted the resource!");
    } catch (error) {
      console.error("Error deleting resource:", error);
      message.error("Failed to delete the resource!");
    }
  };

  const handleUpdate = (index) => {
    console.log(submittedData[index], index);
    setInitialValues(submittedData[index]);
    setEditIndex(index);
    setIsEdit(true);
    setIsModalVisible(true);
  };

  const handleApplyFilters = () => {
    // Implement filter logic here
    message.info("Filters applied!");
  };

  const filteredData = submittedData.filter(item => {
    let match = true;
    if (selectedSubject && item.subject !== selectedSubject) match = false;
    if (selectedSemester && item.semester !== selectedSemester) match = false;
    if (selectedUniversity && item.university !== selectedUniversity) match = false;
    if (selectedBranch && item.branch !== selectedBranch) match = false;
    return match;
  });

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f7fa" }}>
      <Content style={{ padding: "24px" }}>
        <div className="dashboard-container">
          <div className="dashboard-header" style={{ marginBottom: "24px" }}>
            <Title level={2} style={{ color: "#553CDF", marginBottom: "24px" }}>Admin Dashboard</Title>
            
            {/* Search and Add Resource Row */}
            <Row gutter={[16, 16]} align="middle" justify="space-between" style={{ marginBottom: "24px" }}>
              <Col xs={24} md={12}>
                <Search
                  placeholder="Search Resources"
                  allowClear
                  size="large"
                  style={{ width: "100%" }}
                  onSearch={(value) => console.log(value)}
                />
              </Col>
              <Col xs={24} md={12} style={{ textAlign: "right" }}>
                <Button
                  onClick={showModal}
                  size="large"
                  style={{
                    backgroundColor: "#553CDF",
                    borderRadius: "8px",
                    color: "#fff",
                    height: "48px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(85, 60, 223, 0.3)",
                  }}
                  icon={<FileTextOutlined />}
                >
                  Add Resource
                </Button>
              </Col>
            </Row>
            
            {/* Filters Row */}
            <Card style={{ marginBottom: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6}>
                  <Select 
                    placeholder="Select Subject" 
                    style={{ width: "100%" }}
                    size="large"
                    value={selectedSubject}
                    onChange={setSelectedSubject}
                    allowClear
                  >
                    <Option value="Data Structures">Data Structures</Option>
                    <Option value="Algorithms">Algorithms</Option>
                    <Option value="Operating Systems">Operating Systems</Option>
                    <Option value="Database Systems">Database Systems</Option>
                    <Option value="Computer Networks">Computer Networks</Option>
                    <Option value="Software Engineering">Software Engineering</Option>
                    <Option value="Machine Learning">Machine Learning</Option>
                    <Option value="natural-language-processing">NLP(Natural Language Processing)</Option>
                    <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Select 
                    placeholder="Select Semester" 
                    style={{ width: "100%" }}
                    size="large"
                    value={selectedSemester}
                    onChange={setSelectedSemester}
                    allowClear
                  >
                    <Option value="1st">1st Semester</Option>
                    <Option value="2nd">2nd Semester</Option>
                    <Option value="3rd">3rd Semester</Option>
                    <Option value="4th">4th Semester</Option>
                    <Option value="5th">5th Semester</Option>
                    <Option value="6th">6th Semester</Option>
                    <Option value="7th">7th Semester</Option>
                    <Option value="8th">8th Semester</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Select 
                    placeholder="Select University" 
                    style={{ width: "100%" }}
                    size="large"
                    value={selectedUniversity}
                    onChange={setSelectedUniversity}
                    allowClear
                  >
                    <Option value="RGPV">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</Option>
                    <Option value="DAVV">Devi Ahilya Vishwavidyalaya (DAVV)</Option>
                    <Option value="IITD">Indian Institute of Technology Delhi (IITD)</Option>
                    <Option value="IITB">Indian Institute of Technology Bombay (IITB)</Option>
                    <Option value="IIMB">Indian Institute of Management Bangalore (IIMB)</Option>
                    <Option value="DU">University of Delhi (DU)</Option>
                    <Option value="JNU">Jawaharlal Nehru University (JNU)</Option>
                    <Option value="XYZ">XYZ University</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Select 
                    placeholder="Select Branch" 
                    style={{ width: "100%" }}
                    size="large"
                    value={selectedBranch}
                    onChange={setSelectedBranch}
                    allowClear
                  >
                    <Option value="EC">Electronics and Communication</Option>
                    <Option value="CS">Computer Science</Option>
                    <Option value="ME">Mechanical Engineering</Option>
                    <Option value="CE">Civil Engineering</Option>
                    <Option value="IT">Information Technology</Option>
                    <Option value="EE">Electrical Engineering</Option>
                    <Option value="BT">Biotechnology</Option>
                    <Option value="AE">Aerospace Engineering</Option>
                  </Select>
                </Col>
              </Row>
              <Row style={{ marginTop: "16px" }}>
                <Col xs={24} style={{ textAlign: "right" }}>
                  <Button 
                    type="primary"
                    onClick={handleApplyFilters}
                    style={{
                      backgroundColor: "#553CDF",
                      borderRadius: "6px",
                      fontWeight: "500",
                    }}
                    size="large"
                  >
                    Apply Filters
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>

          <Modal open={isModalVisible} onCancel={handleCancel} footer={null} width={700}>
            <AddResource
              onClose={handleCancel}
              onSubmit={handleNewSubmission}
              initialValues={initialValues}
            />
          </Modal>

          {/* Display Submitted Details */}
          <div className="resources-grid">
            <Row gutter={[24, 24]}>
              {filteredData.length > 0 ? (
                filteredData.map((submission, index) => {
                  const activeTabKey = activeTabKeys[index] || "tab1";
                  
                  // Determine which content to show based on active tab
                  const hasContent = 
                    (activeTabKey === "tab1" && submission.pyq) ||
                    (activeTabKey === "tab2" && submission.note) ||
                    (activeTabKey === "tab3" && submission.video);
                  
                  return (
                    <Col xs={24} sm={12} lg={8} key={index}>
                      <Card
                        hoverable
                        className="resource-card"
                        style={{ 
                          borderRadius: "12px", 
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column"
                        }}
                        headStyle={{ 
                          borderBottom: "none", 
                          padding: 0,
                          margin: 0
                        }}
                        bodyStyle={{
                          padding: 0,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column"
                        }}
                        title={
                          <div className="card-header" style={{ 
                            background: "linear-gradient(135deg, #553CDF 0%, #6E56DB 100%)",
                            padding: "16px",
                            color: "white",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px"
                          }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                              <div>
                                <Text strong style={{ color: "white", fontSize: "16px" }}>
                                  {submission.university} • {submission.branch}
                                </Text>
                                <div style={{ marginTop: "4px" }}>
                                  <Tag color="blue">{submission.semester}</Tag>
                                  {submission.subject && (
                                    <Tag color="green">{submission.subject}</Tag>
                                  )}
                                </div>
                              </div>
                              <div>
                                <Space>
                                  <Popconfirm
                                    title="Are you sure you want to delete?"
                                    onConfirm={() => handleDelete(submission._id, index)}
                                  >
                                    <Button 
                                      type="text" 
                                      icon={<DeleteFilled style={{ color: "white" }} />} 
                                      style={{ background: "rgba(255, 255, 255, 0.2)", marginRight: "8px" }}
                                    />
                                  </Popconfirm>
                                  <Button
                                    type="text"
                                    onClick={() => handleUpdate(index)}
                                    icon={<EditFilled style={{ color: "white" }} />}
                                    style={{ background: "rgba(255, 255, 255, 0.2)" }}
                                  />
                                </Space>
                              </div>
                            </div>
                          </div>
                        }
                        tabList={tabList}
                        activeTabKey={activeTabKey}
                        onTabChange={(key) => handleTabChange(index, key)}
                        tabBarStyle={{ 
                          padding: "0 16px", 
                          marginBottom: 0,
                          backgroundColor: "#f9f9f9",
                          borderBottom: "1px solid #eee"
                        }}
                      >
                        <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: hasContent ? "space-between" : "center" }}>
                          {/* Render content based on active tab */}
                          {activeTabKey === "tab1" && submission.pyq ? (
                            <div className="tab-content" style={{ height: "100%" }}>
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                                <BookOutlined style={{ fontSize: "24px", color: "#553CDF", marginRight: "12px" }} />
                                <div>
                                  <Text strong style={{ fontSize: "16px" }}>{submission.pyq.title}</Text>
                                  <div><Text type="secondary">Previous Year Question Paper</Text></div>
                                </div>
                              </div>
                              <Button
                                disabled={!submission.pyq.pdfUrl}
                                type="primary"
                                onClick={() => viewPdf(submission.pyq.pdfUrl)}
                                style={{ 
                                  width: "100%", 
                                  backgroundColor: "#553CDF",
                                  borderRadius: "6px",
                                  height: "40px",
                                  marginTop: "auto"
                                }}
                              >
                                View PYQ PDF
                              </Button>
                            </div>
                          ) : activeTabKey === "tab2" && submission.note ? (
                            <div className="tab-content" style={{ height: "100%" }}>
                              <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                                <FileTextOutlined style={{ fontSize: "24px", color: "#553CDF", marginRight: "12px" }} />
                                <div>
                                  <Text strong style={{ fontSize: "16px" }}>{submission.note.title}</Text>
                                  <div><Text type="secondary">Study Notes</Text></div>
                                </div>
                              </div>
                              <Button
                                disabled={!submission.note.pdfUrl}
                                type="primary"
                                onClick={() => viewPdf(submission.note.pdfUrl)}
                                style={{ 
                                  width: "100%", 
                                  backgroundColor: "#553CDF",
                                  borderRadius: "6px",
                                  height: "40px",
                                  marginTop: "auto"
                                }}
                              >
                                View Notes PDF
                              </Button>
                            </div>
                          ) : activeTabKey === "tab3" && submission.video ? (
                            <div className="tab-content" style={{ height: "100%" }}>
                              <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "16px" }}>
                                {submission.video.imageUrl ? (
                                  <Image
                                    width={100}
                                    height={60}
                                    src={submission.video.imageUrl}
                                    alt="Video Thumbnail"
                                    style={{ objectFit: "cover", borderRadius: "6px", marginRight: "12px" }}
                                  />
                                ) : (
                                  <div style={{ 
                                    width: 100, 
                                    height: 60, 
                                    background: "#f0f0f0", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center",
                                    borderRadius: "6px",
                                    marginRight: "12px"
                                  }}>
                                    <VideoCameraOutlined style={{ fontSize: "24px", color: "#553CDF" }} />
                                  </div>
                                )}
                                <div>
                                  <Text strong style={{ fontSize: "16px" }}>{submission.video.title}</Text>
                                  {submission.video.description && (
                                    <Text type="secondary" style={{ display: "block", marginTop: "4px" }}>
                                      {submission.video.description.length > 60 
                                        ? `${submission.video.description.substring(0, 60)}...` 
                                        : submission.video.description}
                                    </Text>
                                  )}
                                </div>
                              </div>
                              {submission.video.videoUrl && (
                                <Button
                                  type="primary"
                                  onClick={() => openVideoLink(submission.video.videoUrl)}
                                  style={{ 
                                    width: "100%", 
                                    backgroundColor: "#553CDF",
                                    borderRadius: "6px",
                                    height: "40px",
                                    marginTop: "auto"
                                  }}
                                  icon={<VideoCameraOutlined />}
                                >
                                  Watch Video
                                </Button>
                              )}
                            </div>
                          ) : (
                            <div style={{ textAlign: "center", padding: "20px 0" }}>
                              <Text type="secondary">No {activeTabKey === "tab1" ? "PYQ" : activeTabKey === "tab2" ? "Notes" : "Video"} available</Text>
                            </div>
                          )}
                        </div>
                      </Card> 
                    </Col>
                  );
                })
              ) : (
                <Col span={24}>
                  <div style={{ 
                    textAlign: "center", 
                    padding: "40px", 
                    background: "white", 
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
                  }}>
                    <Title level={4} style={{ color: "#553CDF" }}>No resources found</Title>
                    <Text type="secondary">Try adjusting your filters or add new resources</Text>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;

