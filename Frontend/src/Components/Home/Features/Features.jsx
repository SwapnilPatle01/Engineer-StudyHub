import React from "react";
import { Row, Col, Card } from "antd";
import {
  BookOutlined,
  CodeOutlined,
  TeamOutlined,
  SolutionOutlined,
  CloudOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <BookOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "Comprehensive Study Materials",
      description:
        "Access top-quality notes, syllabus, and past year question papers to prepare effectively for your exams.",
      className: "feature_box_col_one",
    },
    {
      icon: <CodeOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "Developer Link Hub",
      description:
        "Collaborate and access valuable software development resources tailored for aspiring engineers.",
      className: "feature_box_col_two",
    },
    {
      icon: <TeamOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "24 x 7 Student Support",
      description:
        "We are always here to help you with any queries or assistance needed during your learning journey.",
      className: "feature_box_col_three",
    },
    {
      icon: <SolutionOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "Interview Preparation",
      description:
        "Prepare for technical interviews with tailored content and practice materials designed to boost your career prospects.",
      className: "feature_box_col_four",
    },
    {
      icon: <CloudOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "Admin Panel",
      description:
        "Manage and update content efficiently with our easy-to-use Admin Panel, ensuring seamless user experience.",
      className: "feature_box_col_five",
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: 40, color: "#f91942" }} />,
      title: "Job Opportunities",
      description:
        "Fast-track your career with access to job postings and opportunities through our dedicated job portal.",
      className: "feature_box_col_six",
    },
  ];

  return (
    <div
      className="why-choose-us"
      style={{
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <div className="section-head">
        <h4
          style={{
            color: "rgb(85, 60, 223)",
          }}
        >
          <span>Why Choose</span> Engineer StudyHub?
        </h4>
        <p>
          Engineer StudyHub is your go-to platform for academic and career
          success, offering a wide range of resources to help you excel in your
          exams and develop skills needed in today’s tech-driven world.
        </p>
      </div>
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card className={`feature-box ${feature.className}`} hoverable>
              <div className="icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                {feature.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
