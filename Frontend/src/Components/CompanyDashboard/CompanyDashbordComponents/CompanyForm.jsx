import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { Form, Input, InputNumber, Button, Select } from "antd";
import axios from "axios";

const { TextArea } = Input;
const { Option } = Select;

const JobForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [companies, setCompanies] = useState([]); // State to hold company data
  const [loading, setLoading] = useState(false); // State for loading

  // Fetch company data when the component loads
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true); // Start loading
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            token: token,
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get("http://localhost:5000/api/v1/company/get", config);
        setCompanies(response.data.companies); // Assuming companies are returned in `response.data.companies`
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching companies:", error);
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchCompanies(); // Call the function to fetch companies
  }, []);

  const onFinish = async (values) => {
    console.log("Form values before submission:", values);
    values.requirements = values.requirements.split(',').map(req => req.trim());

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          token: token,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/job/post",
        values,
        config
      );

      console.log("API Response:", response.data);
      onSubmit(response.data);
      form.resetFields();
    } catch (error) {
      console.error("Error creating job:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        title: "",
        description: "",
        salary: null,
        experience: null,
        location: "",
        jobType: "Full-Time",
        position: null,
        companyId: null, // Add company field to initial values
      }}
    >
      {/* Title */}
      <Form.Item
        name="title"
        label="Job Title"
        rules={[{ required: true, message: "Please enter the job title" }]}
      >
        <Input placeholder="Enter job title" />
      </Form.Item>

      {/* Description */}
      <Form.Item
        name="description"
        label="Job Description"
        rules={[{ required: true, message: "Please enter the job description" }]}
      >
        <TextArea placeholder="Enter job description" />
      </Form.Item>

      {/* Requirements */}
      <Form.Item
        name="requirements"
        label="Job Requirements (comma-separated)"
        rules={[{ required: true, message: "Please enter job requirements" }]}
      >
        <TextArea placeholder="Enter requirements (e.g. JavaScript, Node.js)" />
      </Form.Item>

      {/* Salary */}
      <Form.Item
        name="salary"
        label="Salary"
        rules={[{ required: true, message: "Please enter the salary" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter salary" />
      </Form.Item>

      {/* Experience Level */}
      <Form.Item
        name="experience"
        label="Experience Level (in years)"
        rules={[{ required: true, message: "Please enter the experience level" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter experience level" />
      </Form.Item>

      {/* Location */}
      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Please enter the location" }]}
      >
        <Input placeholder="Enter job location" />
      </Form.Item>

      {/* Job Type */}
      <Form.Item
        name="jobType"
        label="Job Type"
        rules={[{ required: true, message: "Please select the job type" }]}
      >
        <Select placeholder="Select job type">
          <Option value="Full-Time">Full-Time</Option>
          <Option value="Part-Time">Part-Time</Option>
          <Option value="Contract">Contract</Option>
        </Select>
      </Form.Item>

      {/* Position */}
      <Form.Item
        name="position"
        label="Position Level"
        rules={[{ required: true, message: "Please enter the position level" }]}
      >
        <InputNumber min={1} style={{ width: "100%" }} placeholder="Enter position level" />
      </Form.Item>

      {/* Company */}
      <Form.Item
        name="companyId"
        label="Company"
        rules={[{ required: true, message: "Please select a company" }]}
      >
        <Select placeholder="Select company" loading={loading}>
          {companies.map((company) => (
            <Option key={company._id} value={company._id}>
              {company.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Job
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JobForm;
