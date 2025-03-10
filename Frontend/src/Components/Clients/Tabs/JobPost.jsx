import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Select, Form, Typography, Space } from "antd";

const { Title } = Typography;
const { Option } = Select;

function JobPost() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setJobs([...jobs, { id: jobs.length + 1, ...values }]);
    setShowForm(false);
    form.resetFields();
  };

  return (
    <div style={{ padding: 24 }}>
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={4}>Job Posts</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setShowForm(true)}
        >
          Create Job Post
        </Button>
      </Space>

      <Modal
        title="New Job Post"
        open={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            name="company"
            label="Your Company Name"
            rules={[{ required: true, message: "Please enter company name" }]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="title"
            label="Job Title"
            rules={[{ required: true, message: "Please enter job title" }]}
          >
            <Input placeholder="Job Title" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Job Description"
            rules={[
              { required: true, message: "Please enter job description" },
            ]}
          >
            <Input.TextArea placeholder="Job Description" rows={3} />
          </Form.Item>

          <Form.Item
            name="requirements"
            label="Job Requirements"
            rules={[
              { required: true, message: "Please enter job requirements" },
            ]}
          >
            <Input placeholder="Job Requirements (comma-separated)" rows={3} />
          </Form.Item>

          <div className="flex gap-2">
            <Form.Item
              name="salary"
              label="Salary (in INR)"
              rules={[{ required: true, message: "Please enter salary" }]}
            >
              <Input type="number" placeholder="Salary" />
            </Form.Item>

            <Form.Item
              name="experienceLevel"
              label="Min. Experience (yrs)"
              rules={[
                { required: true, message: "Please enter experience level" },
              ]}
            >
              <Input type="number" placeholder="Experience Level" />
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Please enter location" }]}
            >
              <Input placeholder="Location" />
            </Form.Item>
          </div>

          <Form.Item
            name="jobType"
            label="Job Type"
            rules={[{ required: true, message: "Please select job type" }]}
          >
            <Select placeholder="Select Job Type">
              <Option value="Full-time">Full-time</Option>
              <Option value="Part-time">Part-time</Option>
              <Option value="Internship">Internship</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="position"
            label="Number of Positions"
            rules={[
              { required: true, message: "Please enter number of positions" },
            ]}
          >
            <Input type="number" placeholder="Number of Positions" />
          </Form.Item>

          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={() => setShowForm(false)}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Post Job
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default JobPost;
