import React, { useState } from "react";
import { Modal, Input, Button, Form, DatePicker, Select, Tag } from "antd";

const { Option } = Select;

const InterviewModal = ({ isVisible, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [newExperience, setNewExperience] = useState({
    company: "",
    role: "",
    domain: "",
    description: "",
    difficulty: "",
    interviewType: "",
    technologies: [],
    salary: "",
    offerStatus: "",
    interviewDate: "",
  });

  const handleSubmit = () => {
    onSubmit(newExperience);
    onClose();
    form.resetFields();
  };

  const handleTechChange = (value) => {
    setNewExperience({ ...newExperience, technologies: value });
  };

  return (
    <Modal
      title="Add Interview Experience"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      width={700}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Company */}
        <Form.Item
          label="Company"
          name="company"
          required
          style={{ marginBottom: "8px" }}
        >
          <Input
            value={newExperience.company}
            onChange={(e) =>
              setNewExperience({ ...newExperience, company: e.target.value })
            }
            placeholder="Enter the company name"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        {/* Role */}
        <Form.Item
          label="Role"
          name="role"
          required
          style={{ marginBottom: "8px" }}
        >
          <Input
            value={newExperience.role}
            onChange={(e) =>
              setNewExperience({ ...newExperience, role: e.target.value })
            }
            placeholder="Enter the job role"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        {/* Domain */}
        <Form.Item
          label="Domain"
          name="domain"
          required
          style={{ marginBottom: "8px" }}
        >
          <Input
            value={newExperience.domain}
            onChange={(e) =>
              setNewExperience({ ...newExperience, domain: e.target.value })
            }
            placeholder="Enter the domain of work"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        {/* Difficulty Level */}
        <Form.Item
          label="Difficulty Level"
          name="difficulty"
          required
          style={{ marginBottom: "8px" }}
        >
          <Select
            value={newExperience.difficulty}
            onChange={(value) =>
              setNewExperience({ ...newExperience, difficulty: value })
            }
            placeholder="Select difficulty level"
            style={{ fontSize: "14px" }}
          >
            <Option value="easy">Easy</Option>
            <Option value="medium">Medium</Option>
            <Option value="hard">Hard</Option>
          </Select>
        </Form.Item>

        {/* Technologies */}
        <Form.Item
          label="Technologies"
          name="technologies"
          style={{ marginBottom: "8px" }}
        >
          <Select
            mode="multiple"
            value={newExperience.technologies}
            onChange={handleTechChange}
            placeholder="Select technologies"
            style={{ fontSize: "14px" }}
          >
            <Option value="react">React</Option>
            <Option value="nodejs">Node.js</Option>
            <Option value="javascript">JavaScript</Option>
            <Option value="java">Java</Option>
            <Option value="python">Python</Option>
            <Option value="sql">SQL</Option>
            <Option value="aws">AWS</Option>
            <Option value="docker">Docker</Option>
            <Option value="kubernetes">Kubernetes</Option>
            <Option value="mongodb">MongoDB</Option>
          </Select>
        </Form.Item>

        {/* Offer Status */}
        <Form.Item
          label="Offer Status"
          name="offerStatus"
          required
          style={{ marginBottom: "8px" }}
        >
          <Select
            value={newExperience.offerStatus}
            onChange={(value) =>
              setNewExperience({ ...newExperience, offerStatus: value })
            }
            placeholder="Select offer status"
            style={{ fontSize: "14px" }}
          >
            <Option value="Accepted">
              <Tag color="green">Accepted</Tag>
            </Option>
            <Option value="Rejected">
              <Tag color="red">Rejected</Tag>
            </Option>
            <Option value="Pending">
              <Tag color="blue">Pending</Tag>
            </Option>
          </Select>
        </Form.Item>

        {/* Interview Date */}
        <Form.Item
          label="Interview Date"
          name="interviewDate"
          style={{ marginBottom: "8px" }}
        >
          <DatePicker
            value={newExperience.interviewDate}
            onChange={(date, dateString) =>
              setNewExperience({ ...newExperience, interviewDate: dateString })
            }
            style={{ width: "100%" }}
            placeholder="Select interview date"
          />
        </Form.Item>

        {/* Interview Type */}
        <Form.Item
          label="Interview Type"
          name="interviewType"
          required
          style={{ marginBottom: "8px" }}
        >
          <Select
            value={newExperience.interviewType}
            onChange={(value) =>
              setNewExperience({ ...newExperience, interviewType: value })
            }
            placeholder="Select interview type"
            style={{ fontSize: "14px" }}
          >
            <Option value="on-site">On-site</Option>
            <Option value="virtual">Virtual</Option>
            <Option value="hybrid">Hybrid</Option>
          </Select>
        </Form.Item>

        {/* salary type */}
        <Form.Item
          label="Salary"
          name="salary"
          required
          style={{ marginBottom: "8px" }}
        >
          <Input
            value={newExperience.salary}
            onChange={(e) =>
              setNewExperience({ ...newExperience, salary: e.target.value })
            }
            placeholder="Enter the expected salary"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item
          label="Description"
          name="description"
          style={{ marginBottom: "8px" }}
        >
          <Input.TextArea
            rows={4}
            value={newExperience.description}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                description: e.target.value,
              })
            }
            placeholder="Enter interview description"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" style={{ fontSize: "16px" }}>
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default InterviewModal;
