import { Button, Modal, Input, Card, Image } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import React, { useState } from "react";
import AddResource from "./AddResource";
import { Layout, Menu, Select } from "antd";
import "./Dashboard.css";
import "antd/dist/reset.css";

const { Option } = Select;
const { Sider } = Layout;
const { Search } = Input;

const tabList = [
  { key: "tab1", tab: "PYQ" },
  { key: "tab2", tab: "Notes" },
  { key: "tab3", tab: "Video" },
];

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [initialValues, setInitialValues] = useState(null);
  const [activeTabKeys, setActiveTabKeys] = useState({});

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

  const handleNewSubmission = (newSubmission) => {
    if (isEdit) {
      const updatedData = submittedData.map((item, index) =>
        index === editIndex ? newSubmission : item
      );
      setSubmittedData(updatedData);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setSubmittedData((prevData) => [...prevData, newSubmission]);
    }
    setIsModalVisible(false);
    setInitialValues(null);
  };

  const viewPdf = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, "_blank");
  };

  const openVideoLink = (url) => {
    window.open(url, "_blank");
  };

  //  delete an submition
  const handleDelete = (index) => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
  };

  //update submition
  const handleUpdate = (index) => {
    console.log(submittedData[index], index);
    setInitialValues(submittedData[index]);
    setEditIndex(index);
    setIsEdit(true);
    setIsModalVisible(true);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={285} backgroundColor="#553CDF">
        <Menu
          // theme="light "
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            height: "100%",
            borderRight: 0,
            backgroundColor: "#fff", // Light background
            color: "#000", // Text color
            padding: "16px", // Padding inside the menu
            fontSize: "16px", // Font size
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="head-sty" style={{display:"flex", flexDirection:"column"}}>
            <h1 style={{color:"#553CDF", fontWeight:"700"}}>Admin Dashboard</h1>
            <h2 style={{justifyContent:"left",fontSize:"16px",color:"#000"}}>All Filter</h2>
          </div>
          <div
            style={{ marginBottom: "30px", width: "250px", }}
          >
            <Select placeholder="Select Subject" style={{ width: "100%" }}>
              <Option value="Data Structures">Data Structures</Option>
              <Option value="Algorithms">Algorithms</Option>
              <Option value="Operating Systems">Operating Systems</Option>
              <Option value="Database Systems">Database Systems</Option>
              <Option value="Computer Networks">Computer Networks</Option>
              <Option value="Software Engineering">Software Engineering</Option>
              <Option value="Machine Learning">Machine Learning</Option>
              <Option value="Artificial Intelligence">
                Artificial Intelligence
              </Option>
            </Select>
          </div>

          <div
            style={{ marginBottom: "30px", width: "250px", }}
          >
            <Select placeholder="Select Semester" style={{ width: "100%" }}>
              <Option value="1st">1st Semester</Option>
              <Option value="2nd">2nd Semester</Option>
              <Option value="3rd">3rd Semester</Option>
              <Option value="4th">4th Semester</Option>
              <Option value="5th">5th Semester</Option>
              <Option value="6th">6th Semester</Option>
              <Option value="7th">7th Semester</Option>
              <Option value="8th">8th Semester</Option>
            </Select>
          </div>

          <div
            style={{ marginBottom: "30px", width: "250px",}}
          >
            <Select placeholder="Select University" style={{ width: "100%" }}>
              <Option value="RGPV">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </Option>
              <Option value="DAVV">Devi Ahilya Vishwavidyalaya (DAVV)</Option>
              <Option value="IITD">
                Indian Institute of Technology Delhi (IITD)
              </Option>
              <Option value="IITB">
                Indian Institute of Technology Bombay (IITB)
              </Option>
              <Option value="IIMB">
                Indian Institute of Management Bangalore (IIMB)
              </Option>
              <Option value="DU">University of Delhi (DU)</Option>
              <Option value="JNU">Jawaharlal Nehru University (JNU)</Option>
              <Option value="XYZ">XYZ University</Option>
            </Select>
          </div>

          <div
            style={{ marginBottom: "30px", width: "250px",}}
          >
            <Select placeholder="Select Branch" style={{ width: "100%" }}>
              <Option value="">Select a Branch</Option>
              <Option value="EC">Electronics and Communication</Option>
              <Option value="CS">Computer Science</Option>
              <Option value="ME">Mechanical Engineering</Option>
              <Option value="CE">Civil Engineering</Option>
              <Option value="IT">Information Technology</Option>
              <Option value="EE">Electrical Engineering</Option>
              <Option value="BT">Biotechnology</Option>
              <Option value="AE">Aerospace Engineering</Option>
            </Select>
          </div>

          <div
            style={{
              width: "100px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Button style={{ backgroundColor: "#553CDF", color: "#fff", padding:"10px 50px"}}>
              Apply
            </Button>
          </div>
        </Menu>
      </Sider>

      <Layout style={{ padding: "0 24px", background: "#f0f0f0",  }}>
        <div className="dash-container" >
          <div className="dash-content">
            <div className="flex-container" >
              <Search
                placeholder="Search Resources"
                allowClear
                size="medium"
                style={{ 
                  marginBottom:"0px"
                }}
                onSearch={(value) => console.log(value)}
              />
              <Button
                onClick={showModal}
                style={{
                  backgroundColor: "#553CDF",
                  borderRadius: "6px",
                  color: "#fff",
                  marginBottom:"0px",
                  padding:"10px 50px",
                }}
              >
                Add Resource
              </Button>
            </div>
            <Modal open={isModalVisible} onCancel={handleCancel} footer={null}>
              <AddResource
                onClose={handleCancel}
                onSubmit={handleNewSubmission}
                initialValues={initialValues}
              />
            </Modal>

            {/* Display Submitted Details */}

            <div className="submitted-details" style={{ marginTop: "50px" }}>
              <div
                className="cards"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                {submittedData.length > 0 ? (
                  submittedData.map((submission, index) => {
                    const activeTabKey = activeTabKeys[index] || "tab1"; // Default to 'tab1' if not set

                    return (
                      <Card
                        key={index}
                        title={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <b>
                                {submission.university} {submission.branch}{" "}
                                {submission.semester}
                              </b>
                              {submission.subject && (
                                <p>
                                  <strong>Subject:</strong> {submission.subject}
                                </p>
                              )}
                            </div>
                            <div>
                              <Button
                                style={{
                                  marginRight: "10px",
                                  background: "white",
                                  color: "black",
                                }}
                                onClick={() => handleDelete(index)}
                                icon={<DeleteFilled />}
                              />
                              <Button
                                onClick={() => handleUpdate(index)}
                                icon={<EditFilled />}
                              />
                            </div>
                          </div>
                        }
                        style={{
                          flex: "1 1 300px",
                          minWidth: "300px",
                          maxWidth: "400px",
                          margin: "10px",
                        }}
                        tabList={tabList}
                        activeTabKey={activeTabKey}
                        onTabChange={(key) => handleTabChange(index, key)} // Pass index and key
                      >
                        {activeTabKey === "tab1" && (
                          <>
                            {submission.title && submission.file && (
                              <>
                                <p>
                                  <strong>TitleOfPYQ:</strong>{" "}
                                  {submission.title}
                                </p>
                                <Button
                                  type="primary"
                                  onClick={() => viewPdf(submission.file)}
                                >
                                  PYQ PDF
                                </Button>
                              </>
                            )}
                          </>
                        )}

                        {activeTabKey === "tab2" && (
                          <>
                            {submission.noteTitle && submission.fileNote && (
                              <>
                                <p>
                                  <strong>TitleOfNotes:</strong>{" "}
                                  {submission.noteTitle}
                                </p>
                                <Button
                                  type="primary"
                                  onClick={() => viewPdf(submission.fileNote)}
                                >
                                  Notes PDF
                                </Button>
                              </>
                            )}
                          </>
                        )}

                        {activeTabKey === "tab3" && (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {submission.thumbnailPreview && (
                              <div
                                style={{
                                  marginRight: "20px",
                                  minWidth: "50px",
                                }}
                              >
                                <Image
                                  width={80}
                                  height={100}
                                  src={submission.thumbnailPreview}
                                  alt="Video Thumbnail Preview"
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            )}
                            <div>
                              {submission.videoTitle && (
                                <p>
                                  <strong>Title Video:</strong>{" "}
                                  {submission.videoTitle}
                                </p>
                              )}
                              {submission.videoDes && (
                                <p>
                                  <strong>Description:</strong>{" "}
                                  {submission.videoDes}
                                </p>
                              )}
                              {submission.videoLink && (
                                <Button
                                  type="primary"
                                  onClick={() =>
                                    openVideoLink(submission.videoLink)
                                  }
                                >
                                  Watch Video
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })
                ) : (
                  <p>No submissions available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
