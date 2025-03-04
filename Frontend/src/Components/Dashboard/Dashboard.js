import { Button, Modal, Input, Card, Image, Space, Popconfirm } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import AddResource from "./AddResource";
import { Layout, Menu, Select } from "antd";
import "./Dashboard.css";
import "antd/dist/reset.css";
import axios from "axios";
import { message } from "antd";

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/resource/resources",
      );
      console.log(response.data);
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

  // const handleNewSubmission = (newSubmission) => {
  //   if (isEdit) {
  //     const updatedData = submittedData.map((item, index) =>
  //       index === editIndex ? newSubmission : item
  //     );
  //     setSubmittedData(updatedData);
  //     setIsEdit(false);
  //     setEditIndex(null);
  //   } else {
  //     setSubmittedData((prevData) => [...prevData, newSubmission]);
  //   }
  //   setIsModalVisible(false);
  //   setInitialValues(null);
  // };

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

    const fileURL = `http://localhost:5000/${file}`;
    // const fileURL = `http://localhost:5000/uploads/pdfs/${file}`;
    window.open(fileURL, "_blank");
  };

  const openVideoLink = (url) => {
    window.open(url, "_blank");
  };

  //  delete an submition
  // const handleDelete = (index) => {
  //   setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
  // };

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
          <div
            className="head-sty"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1 style={{ color: "#553CDF", fontWeight: "700" }}>
              Admin Dashboard
            </h1>
            <h2
              style={{
                justifyContent: "left",
                fontSize: "16px",
                color: "#000",
              }}
            >
              All Filter
            </h2>
          </div>
          <div style={{ marginBottom: "30px", width: "250px" }}>
            <Select placeholder="Select Subject" style={{ width: "100%" }}>
              <Option value="Data Structures">Data Structures</Option>
              <Option value="Algorithms">Algorithms</Option>
              <Option value="Operating Systems">Operating Systems</Option>
              <Option value="Database Systems">Database Systems</Option>
              <Option value="Computer Networks">Computer Networks</Option>
              <Option value="Software Engineering">Software Engineering</Option>
              <Option value="Machine Learning">Machine Learning</Option>
              <Option value="natural-language-processing">NLP(Natural Language Processing)</Option>
              <Option value="Artificial Intelligence">
                Artificial Intelligence
              </Option>
            </Select>
          </div>

          <div style={{ marginBottom: "30px", width: "250px" }}>
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

          <div style={{ marginBottom: "30px", width: "250px" }}>
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

          <div style={{ marginBottom: "30px", width: "250px" }}>
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
            <Button
              style={{
                backgroundColor: "#553CDF",
                color: "#fff",
                padding: "10px 50px",
              }}
            >
              Apply
            </Button>
          </div>
        </Menu>
      </Sider>

      <Layout style={{ padding: "0 24px", background: "#f0f0f0" }}>
        <div className="dash-container">
          <div className="dash-content">
            <div className="flex-container">
              <Search
                placeholder="Search Resources"
                allowClear
                size="medium"
                style={{
                  marginBottom: "0px",
                }}
                onSearch={(value) => console.log(value)}
              />
              <Button
                onClick={showModal}
                style={{
                  backgroundColor: "#553CDF",
                  borderRadius: "6px",
                  color: "#fff",
                  marginBottom: "0px",
                  padding: "10px 50px",
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
                style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
              >
                {submittedData.length > 0 ? (
                  submittedData.map((submission, index) => {
                    const activeTabKey = activeTabKeys[index] || "tab1";

                    return (
                      <Card
                        key={index}
                        title={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
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
                              <Space>
                                <Popconfirm
                                  title="Are you sure you want to delete?"
                                  onConfirm={() =>
                                    handleDelete(submission._id, index)
                                  }
                                >
                                  <Button
                                    style={{ marginRight: "10px" }}
                                    icon={<DeleteFilled />}
                                  />
                                </Popconfirm>
                              </Space>

                              {/* <Button style={{ marginRight: "10px" }} 
                              onClick={() => handleDelete(submission._id, index)} 
                              icon={<DeleteFilled />} />
                               */}

                              <Button
                                onClick={() => handleUpdate(index)}
                                icon={<EditFilled />}
                              />
                            </div>
                          </div>
                        }
                        tabList={tabList}
                        activeTabKey={activeTabKey}
                        onTabChange={(key) => handleTabChange(index, key)}
                      >
                        {/* Render content based on active tab */}
                        {activeTabKey === "tab1" && submission.pyq && (
                          <>
                            <p>
                              <strong>Title Of PYQ:</strong>{" "}
                              {submission.pyq.title}
                            </p>
                            <Button
                              disabled={!submission.pyq.pdfUrl}
                              type="primary"
                              onClick={() => viewPdf(submission.pyq.pdfUrl)}
                            >
                              PYQ PDF
                            </Button>
                          </>
                        )}

                        {activeTabKey === "tab2" && submission.note && (
                          <>
                            <p>
                              <strong>Title Of Notes:</strong>{" "}
                              {submission.note.title}
                            </p>
                            <Button
                              disabled={!submission.note.pdfUrl}
                              type="primary"
                              onClick={() => viewPdf(submission.note.pdfUrl)}
                            >
                              Notes PDF
                            </Button>
                          </>
                        )}

                        {activeTabKey === "tab3" && submission.video && (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {submission.video.imageUrl && (
                              <div style={{ marginRight: "20px" }}>
                                <Image
                                  width={80}
                                  height={100}
                                  src={submission.video.imageUrl}
                                  alt="Video Thumbnail Preview"
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            )}
                            <div>
                              {submission.video.title && (
                                <p>
                                  <strong>Title Video:</strong>{" "}
                                  {submission.video.title}
                                </p>
                              )}
                              {submission.video.description && (
                                <p>
                                  <strong>Description:</strong>{" "}
                                  {submission.video.description}
                                </p>
                              )}
                              {submission.video.videoUrl && (
                                <Button
                                  type="primary"
                                  onClick={() =>
                                    openVideoLink(submission.video.videoUrl)
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

