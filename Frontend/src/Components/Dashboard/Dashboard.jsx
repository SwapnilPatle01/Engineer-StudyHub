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
  { key: "tab1", tab: <span><BookOutlined style={ { marginRight: "8px" } } />PYQ</span> },
  { key: "tab2", tab: <span><FileTextOutlined style={ { marginRight: "8px" } } />Notes</span> },
  { key: "tab3", tab: <span><VideoCameraOutlined style={ { marginRight: "8px" } } />Video</span> },
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
      setSubmittedData(response.data);
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

  console.log("Submitted Data:", submittedData);
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

  const viewPdf = (pdfUrl) => {
    if (!pdfUrl) {
      console.error("PDF URL is missing");
      return;
    }

    // Extract just the path portion if it's a full URL
    const pdfPath = pdfUrl.startsWith('http')
      ? new URL(pdfUrl).pathname
      : pdfUrl;

    // Construct the backend URL with port 5000
    const backendUrl = `http://localhost:5000${pdfPath}`;

    // Open PDF in a new tab
    window.open(backendUrl, '_blank');
  };
  // Example usage: viewPdf('/uploads/pdfs/1742712555563.pdf');

  // If you want to implement a modal viewer instead, you would need additional state:
  /*
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [pdfSource, setPdfSource] = useState(null);
  
  // And then in your component's JSX:
  {isViewerOpen && (
    <Modal 
      title="PDF Viewer" 
      visible={isViewerOpen} 
      onCancel={() => setViewerOpen(false)}
      width="80%"
      footer={null}
    >
      <iframe 
        src={`${pdfSource}#toolbar=1`} 
        width="100%" 
        height="500px" 
        title="PDF Viewer"
        style={{ border: 'none' }}
      />
    </Modal>
  )}
  */


  // Example usage: viewPdf('/uploads/pdfs/1742712555563.pdf');

  // If you want to implement a modal viewer instead, you would need additional state:
  /*
  const [isViewerOpen, setViewerOpen] = useState(false);
  const [pdfSource, setPdfSource] = useState(null);
  
  // And then in your component's JSX:
  {isViewerOpen && (
    <Modal 
      title="PDF Viewer" 
      visible={isViewerOpen} 
      onCancel={() => setViewerOpen(false)}
      width="80%"
      footer={null}
    >
      <iframe 
        src={`${pdfSource}#toolbar=1`} 
        width="100%" 
        height="500px" 
        title="PDF Viewer"
        style={{ border: 'none' }}
      />
    </Modal>
  )}
  */
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
    <Layout style={ { minHeight: "100vh", background: "#f5f7fa" } }>
      <Content style={ { padding: "24px" } }>
        <div className="dashboard-container">
          <div className="dashboard-header" style={ { marginBottom: "24px" } }>
            <Title level={ 2 } style={ { color: "#553CDF", marginBottom: "24px" } }>Admin Dashboard</Title>

            {/* Search and Add Resource Row */ }
            <Row gutter={ [16, 16] } align="middle" justify="space-between" style={ { marginBottom: "24px" } }>
              <Col xs={ 24 } md={ 12 }>
                <Search
                  placeholder="Search Resources"
                  allowClear
                  size="large"
                  style={ { width: "100%" } }
                  onSearch={ (value) => console.log(value) }
                />
              </Col>
              <Col xs={ 24 } md={ 12 } style={ { textAlign: "right" } }>
                <Button
                  onClick={ showModal }
                  size="large"
                  style={ {
                    backgroundColor: "#553CDF",
                    borderRadius: "8px",
                    color: "#fff",
                    height: "48px",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(85, 60, 223, 0.3)",
                  } }
                  icon={ <FileTextOutlined /> }
                >
                  Add Resource
                </Button>
              </Col>
            </Row>

            {/* Filters Row */ }
            <Card style={ { marginBottom: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" } }>
              <Row gutter={ [16, 16] }>
                <Col xs={ 24 } sm={ 12 } md={ 6 }>
                  <Select
                    placeholder="Select Subject"
                    style={ { width: "100%" } }
                    size="large"
                    value={ selectedSubject }
                    onChange={ setSelectedSubject }
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
                <Col xs={ 24 } sm={ 12 } md={ 6 }>
                  <Select
                    placeholder="Select Semester"
                    style={ { width: "100%" } }
                    size="large"
                    value={ selectedSemester }
                    onChange={ setSelectedSemester }
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
                <Col xs={ 24 } sm={ 12 } md={ 6 }>
                  <Select
                    placeholder="Select University"
                    style={ { width: "100%" } }
                    size="large"
                    value={ selectedUniversity }
                    onChange={ setSelectedUniversity }
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
                <Col xs={ 24 } sm={ 12 } md={ 6 }>
                  <Select
                    placeholder="Select Branch"
                    style={ { width: "100%" } }
                    size="large"
                    value={ selectedBranch }
                    onChange={ setSelectedBranch }
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
              <Row style={ { marginTop: "16px" } }>
                <Col xs={ 24 } style={ { textAlign: "right" } }>
                  <Button
                    type="primary"
                    onClick={ handleApplyFilters }
                    style={ {
                      backgroundColor: "#553CDF",
                      borderRadius: "6px",
                      fontWeight: "500",
                    } }
                    size="large"
                  >
                    Apply Filters
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>

          <Modal open={ isModalVisible } onCancel={ handleCancel } footer={ null } width={ 700 }>
            <AddResource
              onClose={ handleCancel }
              onSubmit={ handleNewSubmission }
              initialValues={ initialValues }
            />
          </Modal>

          <div className="resources-grid">
            <Row gutter={ [24, 24] }>
              { filteredData.length > 0 ? (
                filteredData.map((submission, index) => {
                  const activeTabKey = activeTabKeys[index] || "tab1";

                  // Check if content exists for the current tab
                  const hasPYQ = submission.pyq && submission.pyq.pdfUrl;
                  const hasNotes = submission.note && submission.note.pdfUrl;
                  const hasVideo = submission.video && submission.video.videoUrl;

                  // Determine if there's any content in the current tab
                  const hasContent =
                    (activeTabKey === "tab1" && hasPYQ) ||
                    (activeTabKey === "tab2" && hasNotes) ||
                    (activeTabKey === "tab3" && hasVideo);

                  return (
                    <Col xs={ 24 } sm={ 12 } lg={ 8 } key={ index }>
                      <Card
                        hoverable
                        className="resource-card"
                        style={ {
                          borderRadius: "12px",
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column"
                        } }
                        headStyle={ {
                          borderBottom: "none",
                          padding: 0,
                          margin: 0
                        } }
                        bodyStyle={ {
                          padding: 0,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column"
                        } }
                        title={
                          <div className="card-header" style={ {
                            background: "linear-gradient(135deg, #553CDF 0%, #6E56DB 100%)",
                            padding: "16px",
                            color: "white",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px"
                          } }>
                            <div style={ { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }>
                              <div>
                                <Text strong style={ { color: "white", fontSize: "16px" } }>
                                  { submission.university } • { submission.branch }
                                </Text>
                                <div style={ { marginTop: "4px" } }>
                                  <Tag color="blue">{ submission.semester }</Tag>
                                  { submission.subject && (
                                    <Tag color="green">{ submission.subject }</Tag>
                                  ) }
                                </div>
                              </div>
                              <div>
                                <Space>
                                  <Popconfirm
                                    title="Are you sure you want to delete?"
                                    onConfirm={ () => handleDelete(submission._id, index) }
                                  >
                                    <Button
                                      type="text"
                                      icon={ <DeleteFilled style={ { color: "white" } } /> }
                                      style={ { background: "rgba(255, 255, 255, 0.2)", marginRight: "8px" } }
                                    />
                                  </Popconfirm>
                                  <Button
                                    type="text"
                                    onClick={ () => handleUpdate(index) }
                                    icon={ <EditFilled style={ { color: "white" } } /> }
                                    style={ { background: "rgba(255, 255, 255, 0.2)" } }
                                  />
                                </Space>
                              </div>
                            </div>
                          </div>
                        }
                        tabList={ tabList }
                        activeTabKey={ activeTabKey }
                        onTabChange={ (key) => handleTabChange(index, key) }
                        tabBarStyle={ {
                          padding: "0 16px",
                          marginBottom: 0,
                          backgroundColor: "#f9f9f9",
                          borderBottom: "1px solid #eee"
                        } }
                      >
                        <div className="flex flex-col h-full p-4">
                          {/* PYQ Tab Content */ }
                          { activeTabKey === "tab1" && (
                            <>
                              { submission.pyq && submission.pyq.pdfUrl ? (
                                <div className="flex flex-col h-full justify-between">
                                  <div className="flex items-center mb-4">
                                    <BookOutlined className="text-2xl text-indigo-600 mr-3" />
                                    <div>
                                      <Text strong className="text-base">
                                        { submission.pyq.title || "Previous Year Paper" }
                                      </Text>
                                      <div><Text type="secondary">Previous Year Question Paper</Text></div>
                                    </div>
                                  </div>
                                  <Button
                                    type="primary"
                                    onClick={ () => viewPdf(submission.pyq.pdfUrl) }
                                    className="w-full h-10 rounded-md font-medium mt-auto"
                                    style={ { backgroundColor: "#553CDF" } }
                                  >
                                    View PYQ PDF
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  <div className="text-center py-4 px-3 bg-gray-100 rounded-md w-full">
                                    <Text type="secondary" strong>No PYQ available</Text>
                                  </div>
                                </div>
                              ) }
                            </>
                          ) }

                          {/* Notes Tab Content - Updated to match tab1 styling */ }
                          { activeTabKey === "tab2" && (
                            <>
                              { submission.note && submission.note.pdfUrl ? (
                                <div className="flex flex-col h-full justify-between">
                                  <div className="flex items-center mb-4">
                                    <FileTextOutlined className="text-2xl text-indigo-600 mr-3" />
                                    <div>
                                      <Text strong className="text-base">
                                        { submission.note.title || "Study Notes" }
                                      </Text>
                                      <div><Text type="secondary">Study Notes</Text></div>
                                    </div>
                                  </div>
                                  <Button
                                    type="primary"
                                    onClick={ () => viewPdf(submission.note.pdfUrl) }
                                    className="w-full h-10 rounded-md font-medium mt-auto"
                                    style={ { backgroundColor: "#553CDF" } }
                                  >
                                    View Notes PDF
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  <div className="text-center py-4 px-3 bg-gray-100 rounded-md w-full">
                                    <Text type="secondary" strong>No Notes available</Text>
                                  </div>
                                </div>
                              ) }
                            </>
                          ) }

                          {/* Video Tab Content - Updated to match tab1 styling */ }
                          { activeTabKey === "tab3" && (
                            <>
                              { submission.video && submission.video.videoUrl ? (
                                <div className="flex flex-col h-full justify-between">
                                  <div className="flex items-start mb-4">
                                    { submission.video.imageUrl ? (
                                      <img
                                        width={ 100 }
                                        height={ 60 }
                                        src={ `http://localhost:5000${submission.video.imageUrl}` }
                                        alt="Video Thumbnail"
                                        className="object-cover rounded-md mr-3"
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center w-24 h-16 bg-gray-100 rounded-md mr-3">
                                        <VideoCameraOutlined className="text-2xl text-indigo-600" />
                                      </div>
                                    ) }
                                    <div>
                                      <Text strong className="text-base">
                                        { submission.video.title || "Video Resource" }
                                      </Text>
                                      { submission.video.description && (
                                        <Text type="secondary" className="block mt-1">
                                          { submission.video.description.length > 60
                                            ? `${submission.video.description.substring(0, 60)}...`
                                            : submission.video.description }
                                        </Text>
                                      ) }
                                    </div>
                                  </div>
                                  <Button
                                    type="primary"
                                    onClick={ () => openVideoLink(submission.video.videoUrl) }
                                    className="w-full h-10 rounded-md font-medium mt-auto flex items-center justify-center"
                                    style={ { backgroundColor: "#553CDF" } }
                                  >
                                    <VideoCameraOutlined className="mr-2" /> Watch Video
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center h-full">
                                  <div className="text-center py-4 px-3 bg-gray-100 rounded-md w-full">
                                    <Text type="secondary" strong>No Video available</Text>
                                  </div>
                                </div>
                              ) }
                            </>
                          ) }
                        </div>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Col span={ 24 }>
                  <div style={ {
                    textAlign: "center",
                    padding: "40px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
                  } }>
                    <Title level={ 4 } style={ { color: "#553CDF" } }>No resources found</Title>
                    <Text type="secondary">Try adjusting your filters or add new resources</Text>
                  </div>
                </Col>
              ) }
            </Row>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;

