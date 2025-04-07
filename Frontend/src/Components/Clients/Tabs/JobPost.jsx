import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Select, Typography, Space, Table, message } from "antd";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

function JobPost() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token is missing. Please log in.");
      }

      const { data } = await axios.get("http://localhost:5000/api/v1/job/get", {
        headers: {
          Authorization: token,
        },
      });

      setJobs(data.jobs || []);
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const requiredFields = [
        "title",
        "description",
        "requirements",
        "salary",
        "location",
        "jobType",
        "experience",
        "position",
      ];
  
      for (const field of requiredFields) {
        if (!formData[field]) {
          message.error("Please fill all required fields.");
          return;
        }
      }
  
      const token = localStorage.getItem("token");
      if (!token) {
        message.error("Authentication token is missing. Please log in.");
        return;
      }
  
      const payload = {
        title: formData.title,
        description: formData.description,
        requirements: formData.requirements, // ✅ Keep as string
        salary: Number(formData.salary),
        location: formData.location,
        jobType: formData.jobType,
        experience: formData.experience, // ✅ Keep as string
        position: formData.position, // ✅ Keep as string or number depending on backend
        companyId: "67ccfbbc44f03a0b9b04d15b", // ✅ backend expects companyId
      };
  debugger;
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/job/post",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
  
      message.success("Job posted successfully!");
      setShowForm(false);
      fetchJobs();
      setFormData({});
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to post job.");
    }
  };
  
  

  const columns = [
    { title: "Job Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Salary (INR)", dataIndex: "salary", key: "salary" },
    { title: "Experience (yrs)", dataIndex: "experienceLevel", key: "experienceLevel" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Job Type", dataIndex: "jobType", key: "jobType" },
    { title: "Positions", dataIndex: "position", key: "position" },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Space style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <Title level={3}>Job Posts</Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setShowForm(true)}>
          Create Job Post
        </Button>
      </Space>

      <Table columns={columns} dataSource={jobs} rowKey="_id" loading={loading} bordered />

      <Modal title="New Job Post" open={showForm} onCancel={() => setShowForm(false)} footer={null}>
        <label>Job Title</label>
        <Input name="title" value={formData.title || ""} onChange={handleChange} />

        <label>Job Description</label>
        <Input.TextArea name="description" rows={3} value={formData.description || ""} onChange={handleChange} />

        <label>Job Requirements (Comma Separated)</label>
        <Input name="requirements" value={formData.requirements || ""} onChange={handleChange} />

        <label>Salary (INR)</label>
        <Input type="number" name="salary" value={formData.salary || ""} onChange={handleChange} />

        <label>Experience (yrs)</label>
<Input type="number" name="experience" value={formData.experience || ""} onChange={handleChange} />


        <label>Location</label>
        <Input name="location" value={formData.location || ""} onChange={handleChange} />

        <label>Job Type</label>
        <Select name="jobType" value={formData.jobType || ""} onChange={(value) => handleSelectChange("jobType", value)}>
          <Option value="Full-time">Full-time</Option>
          <Option value="Part-time">Part-time</Option>
          <Option value="Internship">Internship</Option>
        </Select>

        <label>Number of Positions</label>
        <Input type="number" name="position" value={formData.position || ""} onChange={handleChange} />

        <Space style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
          <Button onClick={() => setShowForm(false)}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit}>Post Job</Button>
        </Space>
      </Modal>
    </div>
  );
}

export default JobPost;
