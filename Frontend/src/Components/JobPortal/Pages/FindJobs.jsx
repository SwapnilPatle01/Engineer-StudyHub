import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Spin, message, Input, Modal, Form, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

function AllOpportunities() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    experience: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    handleFilterJobs();
  }, [searchValue, filters, jobs]);

  const handleApplyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        message.error("You must be logged in to apply.");
        return;
      }

      const { data } = await axios.post(
        `http://localhost:5000/api/v1/application/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (data.success) {
        const updatedAppliedJobs = [...appliedJobs, jobId];
        setAppliedJobs(updatedAppliedJobs);
        localStorage.setItem("appliedJobs", JSON.stringify(updatedAppliedJobs)); // Save it!
        message.success("🎉 Thank you for applying! We'll be in touch soon.");
      } else {
        message.warning(data.message || "Could not apply.");
      }
    } catch (error) {
      message.error(
        error.response?.data?.message || "Failed to apply for the job."
      );
    }
  };

  useEffect(() => {
    const savedApplied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(savedApplied);
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

  const handleFilterJobs = () => {
    let filtered = [...jobs];

    if (searchValue) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter((job) => job.location === filters.location);
    }

    if (filters.jobType) {
      filtered = filtered.filter((job) => job.jobType === filters.jobType);
    }

    if (filters.experience) {
      filtered = filtered.filter(
        (job) => job.experienceLevel.toString() === filters.experience
      );
    }

    setFilteredJobs(filtered);
  };

  const handleFilterSubmit = (values) => {
    setFilters({
      location: values.location || "",
      jobType: values.jobType || "",
      experience: values.experience || "",
    });
    setIsFilterModalOpen(false);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Search
          placeholder="Search job title"
          allowClear
          size="large"
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: "500px" }}
        />
        <Button
          onClick={() => setIsFilterModalOpen(true)}
          icon={<FilterOutlined />}
          style={{ borderColor: "#553CDF", color: "#553CDF" }}
        >
          Filter
        </Button>
      </div>
      {loading ? (
        <Spin size="large" style={{ margin: "auto" }} />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            padding: 0,
            margin: 0,
          }}
        >
          {filteredJobs.map((job) => (
            <Card
              key={job._id}
              bordered={false}
              style={{
                width: 350,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  color: "#553CDF",
                  fontSize: "25px",
                  marginBottom: "18px",
                  fontWeight: "700",
                }}
              >
                {job.title}
              </h1>
              <p>
                <strong>Company:</strong> {job?.company?.name || "N/A"}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
              <p>
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p>
                <strong>Experience:</strong> {job.experienceLevel} Years
              </p>
              <p>{job.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "16px",
                }}
              >
                {/* <Button
                  type="default"
                  style={{
                    padding: "6px 16px",
                    color: "#553CDF",
                    borderColor: "#553CDF",
                  }}
                >
                  Read More
                </Button> */}
                <Button
                  type="primary"
                  disabled={appliedJobs.includes(job._id)}
                  style={{
                    padding: "6px 16px",
                    backgroundColor: appliedJobs.includes(job._id)
                      ? "#a0a0a0"
                      : "#553CDF",
                    borderColor: appliedJobs.includes(job._id)
                      ? "#a0a0a0"
                      : "#553CDF",
                    color: appliedJobs.includes(job._id) ? "#fff" : "#fff",
                    cursor: appliedJobs.includes(job._id)
                      ? "not-allowed"
                      : "pointer",
                  }}
                  onClick={() => handleApplyJob(job._id)}
                >
                  {appliedJobs.includes(job._id) ? "✅ Applied" : "Apply Now"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        title="Filter Jobs"
        open={isFilterModalOpen}
        onCancel={() => setIsFilterModalOpen(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleFilterSubmit}>
          <Form.Item label="Location" name="location">
            <Input placeholder="Enter location" />
          </Form.Item>
          <Form.Item label="Job Type" name="jobType">
            <Select placeholder="Select job type" allowClear>
              <Option value="Full-Time">Full-Time</Option>
              <Option value="Part-Time">Part-Time</Option>
              <Option value="Internship">Internship</Option>
              <Option value="Remote">Remote</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Experience Level (Years)" name="experience">
            <Select placeholder="Select experience" allowClear>
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#553CDF" }}
            >
              Apply Filters
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AllOpportunities;
