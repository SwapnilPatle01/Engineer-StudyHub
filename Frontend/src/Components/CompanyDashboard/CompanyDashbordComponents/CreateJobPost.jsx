import React, { useState, useEffect } from "react";
import { Card, Button, Typography, Modal, message } from "antd";
import axios from "axios";
import JobForm from "./CompanyForm";

const { Title, Paragraph } = Typography;

function CreateJobPost() {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [jobPosts, setJobPosts] = useState([]); // State to store job posts
  const [loading, setLoading] = useState(false); // Loading state for fetching data

  // Fetch job posts from the API when the component mounts
  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        setLoading(true); // Start loading
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const config = {
          headers: {
            token: token,
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get("http://localhost:5000/api/v1/job/get", config);
  
        setJobPosts(response.data.jobs); // Assuming the jobs are returned in `response.data.jobs`
      } catch (error) {
        console.error("Error fetching job posts:", error);
        message.error("Failed to fetch job posts.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchJobPosts(); // Call the fetch function when the component mounts
  }, []);

  // Show modal when button is clicked
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Hide modal when canceled
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle form submission and add new job post to state
  const handleJobSubmit = (values) => {
    setJobPosts([...jobPosts, values]); // Add new job post to jobPosts array
    setIsModalVisible(false); // Close the modal after submission
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Card
        style={{ width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Create a Job Post
            </Title>
            <Button
              type="primary"
              style={{ width: "auto", padding: "0px 50px" }}
              onClick={showModal}
            >
              Create Job Post
            </Button>
          </div>
        }
      >
        <Title level={4}>Job Details</Title>
        <Paragraph>
          You can create a new job post by clicking the button above. Make sure
          to provide accurate job details, including the job title, description,
          and qualifications.
        </Paragraph>
      </Card>

      {/* Render fetched job posts */}
      {loading ? (
        <Paragraph>Loading job posts...</Paragraph>
      ) : jobPosts.length > 0 ? (
        jobPosts.map((job, index) => (
          <Card
            key={index}
            style={{
              width: "30%",
              marginTop: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            title={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src="public/Engineer_StudyHub_-removebg-preview.png"/>
                <Title level={4} style={{ margin: 0 }}>
                  {job.title} {/* Job title as the card title */}
                </Title>
               
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span>{job.company?.name || "Company Name"}</span> {/* Company name */}
                </div>
              </div>
            }
          >
            <div>
    
              <b>Salary:</b> ${job.salary}
              <br />
              <b>Experience Level:</b> {job.experienceLevel} years
              <br />
              <b>Location:</b> {job.location}
              <br />
              <b>Job Type:</b> {job.jobType}
              <br />
              <b>Position Level:</b> {job.position}
              <br />
              <b>Description:</b> {job.description}<br/>
              
            </div>
          </Card>
        ))
      ) : (
        <Paragraph>No job posts created yet.</Paragraph>
      )}

      {/* Modal to create a job post */}
      <Modal
        title="Create a Job Post"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // No footer buttons for the modal
      >
        <JobForm onSubmit={handleJobSubmit} /> {/* Pass the submission handler */}
      </Modal>
    </div>
  );
}

export default CreateJobPost;
