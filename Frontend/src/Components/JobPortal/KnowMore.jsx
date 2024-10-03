import React from 'react';
import { Card, Row, Col, Typography, Divider, Tag } from 'antd';
import { EnvironmentOutlined, DollarOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import './KnowMore.css';
import { useParams } from 'react-router-dom';
const { Title, Text } = Typography;
const FreshersJobCards = [
  {
    id: 1,
    package: "15 - 30 LPA",
    location: "Bangalore Urban",
    title: "Software Development ",
    tags: ["#DSA", "#Problem solving"],
    company: "Grow",
    views: 1251,
    logo: require("../../assets/images/grow.png"),
    buttonColor: "#FFDD87",
     formUrl: "https://groww.in/"
  },
  {
    id: 2,
    package: "5 - 12 LPA",
    location: "Bangalore Urban",
    title: " Data Science  Engineer",
    tags: ["#API", "#React", "#.NET"],
    company: "Anthology",
    views: 2092,
    logo: require("../../assets/images/anthology.png"),
    buttonColor: "#87CEEB",
    formUrl: "https://www.anthology.com/en-in/our-offices"

  },
  {
    id: 3,
    package: "5 - 10 LPA",
    location: "Noida",
    title: "React JS Developer",
    tags: ["#jQuery", "#React", "#Angular"],
    company: "Technoarch Softwares",
    views: 2042,
    logo: require("../../assets/images/tecnoarch.png"),
    buttonColor: "#B2FF87",
    formUrl: "https://www.technoarchsoftwares.com/"

  },
  {
    id: 4,
    package: "8 - 12 LPA",
    location: "Pune",
    title: "Software Engineer |",
    tags: ["#SDK", "#JSON", "#XML"],
    company: "Technoarch Softwares",
    views: 2042,
    logo: require("../../assets/images/zebra.png"),
    buttonColor: "#B2FF87",
    formUrl: "https://www.zebra.com/ap/en.html"

  },
  {
    id: 5,
    package: "6 - 10 LPA",
    location: "Noida",
    title: "Python Developer",
    tags: ["#python", "#sql", "#DSA"],
    company: "Impetus Technologies",
    views: 2042,
    logo: require("../../assets/images/impetus.png"),
    buttonColor: "#B2FF87",
    formUrl: "https://www.impetus.com/"

  },
  {
    id: 6,
    package: "11 - 13 LPA",
    location: "Hyderabad",
    title: "React Js Developer",
    tags: ["#HTML", "#css", "javascript"],
    company: "Robolabs R&D Pvt Ltd",
    views: 2042,
    logo: require("../../assets/images/Robols.png"),
    buttonColor: "#B2FF87",
    formUrl: "https://excellencetechnologies.in/"

  },
];

const KnowMorePage = () => {
  const { jobId } = useParams(); 
  const job = FreshersJobCards.find(job => job.id === parseInt(jobId));

  if (!job) {
    return <div>No job found</div>; 
  }

  return (
    <div className="know-more-container">
      <Card
        className="job-details-card"
        hoverable
        style={{
          width: '80%',
          margin: '0 auto',
          borderRadius: '15px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(to bottom right, #ffffff, #f9f9f9)'
        }}
      >
        <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Software Development</Title>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div className="icon-details">
              <DollarOutlined className="icon" />
              <Text>Package: </Text><Tag color="gold">15 - 30 LPA</Tag>
            </div>
            <div className="icon-details">
              <EnvironmentOutlined className="icon" />
              <Text>Location: </Text><Tag color="blue">Bangalore Urban</Tag>
            </div>
          </Col>
          <Col span={12}>
            <div className="icon-details">
              <TrophyOutlined className="icon" />
              <Text>Experience: </Text><Tag color="purple">Fresher</Tag>
            </div>
            <div className="icon-details">
              <CalendarOutlined className="icon" />
              <Text>Start Date: </Text><Tag color="cyan">Immediate</Tag>
            </div>
          </Col>
        </Row>
        <Divider dashed />
        <Title level={4} style={{ color: '#ff5722' }}>Job Description</Title>
        <Text style={{ fontSize: '16px', lineHeight: '1.7' }}>
          We are seeking a dynamic and highly motivated Software Developer to join our team. The role involves working with the latest technologies in a fast-paced environment, contributing to cutting-edge projects, and collaborating with cross-functional teams.
          <br /><br />
          Responsibilities include developing, testing, and deploying scalable software solutions, debugging and troubleshooting issues, and staying updated with industry trends and technologies. You will have the opportunity to work on cloud-based solutions, AI-powered applications, and much more.
        </Text>
        <Divider dashed />
        <Title level={4} style={{ color: '#ff5722' }}>Key Requirements</Title>
        <ul style={{ fontSize: '16px', lineHeight: '1.7' }}>
          <li>Strong foundation in algorithms, data structures, and OOP concepts.</li>
          <li>Proficiency in one or more programming languages like Java, Python, or C++.</li>
          <li>Good understanding of web technologies such as React, Node.js, and RESTful APIs.</li>
          <li>Strong problem-solving skills and an eagerness to learn new technologies.</li>
        </ul>
        <Divider dashed />
        <Title level={4} style={{ color: '#ff5722' }}>Perks & Benefits</Title>
        <ul style={{ fontSize: '16px', lineHeight: '1.7' }}>
          <li>Competitive salary with performance-based incentives.</li>
          <li>Health insurance coverage for employees and dependents.</li>
          <li>Flexible working hours and work-from-home options.</li>
          <li>Opportunities for professional growth and career advancement.</li>
        </ul>
        <Divider dashed />
        <Title level={4} style={{ color: '#ff5722' }}>Views</Title>
        <Text style={{ fontSize: '16px' }}>1251 views</Text>
      </Card>
    </div>
  );
};

export default KnowMorePage;
