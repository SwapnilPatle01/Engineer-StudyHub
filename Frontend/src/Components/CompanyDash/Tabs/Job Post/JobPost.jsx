import React, { useState, useEffect } from "react";
import { Card, Button, Typography, Modal, message } from "antd";
import axios from "axios";
import JobForm from "./CompanyForm";

const { Title, Paragraph } = Typography;

function JobPost() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        setLoading(true);
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
        setJobPosts(response.data.jobs);
      } catch (error) {
        console.error("Error fetching job posts:", error);
        message.error("Failed to fetch job posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobPosts();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleJobSubmit = (values) => {
    setJobPosts([...jobPosts, values]);
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <Card
        style={{ width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        title={
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Title level={4} style={{ margin: 0 }}>Create a Job Post</Title>
            <Button type="primary" className="bg-violet-800"  onClick={showModal}>Create Job Post</Button>
          </div>
        }
      >
        <Paragraph>You can create a new job post by clicking the button above.</Paragraph>
      </Card>
      {loading ? (
        <Paragraph>Loading job posts...</Paragraph>
      ) : jobPosts.length > 0 ? (
        jobPosts.map((job, index) => (
          <Card
            key={index}
            style={{ width: "100%", marginTop: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            title={<Title level={4} style={{ margin: 0 }}>{job.title}</Title>}
          >
            <Paragraph><b>Company:</b> {job.company?.name || "Company Name"}</Paragraph>
            <Paragraph><b>Salary:</b> ${job.salary}</Paragraph>
            <Paragraph><b>Experience Level:</b> {job.experienceLevel} years</Paragraph>
            <Paragraph><b>Location:</b> {job.location}</Paragraph>
            <Paragraph><b>Job Type:</b> {job.jobType}</Paragraph>
            <Paragraph><b>Description:</b> {job.description}</Paragraph>
          </Card>
        ))
      ) : (
        <Paragraph>No job posts created yet.</Paragraph>
      )}
      <Modal title="Create a Job Post" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <JobForm onSubmit={handleJobSubmit} />
      </Modal>
    </div>
  );
}

export default JobPost;
