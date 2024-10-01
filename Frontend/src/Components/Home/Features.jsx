import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { BookOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
import './Home.css';

const { Title, Paragraph } = Typography;

const Features = () => {
  return (
    <div className="features-section">
      {/* Heading */}
      <Title level={2} className="features-heading">
        Why Choose Engineers StudyHub?
      </Title>
      
      {/* Subtitle */}
      <Paragraph className="features-subtitle">
        Empowering future engineers with the right tools and resources to excel in academics, stay industry-relevant, and launch their careers.
      </Paragraph>
      
      {/* Cards for Features */}
      <Row gutter={[16, 16]} className="features-cards">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Achieve Academic Excellence"
            bordered={false}
            hoverable
            className="feature-card"
            cover={<BookOutlined className="feature-icon" />}
          >
            <p>Score big in engineering exams with our top-notch study materials designed to help you succeed and achieve academic excellence.</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Develop In-Demand Skills"
            bordered={false}
            hoverable
            className="feature-card"
            cover={<CodeOutlined className="feature-icon" />}
          >
            <p>Stay industry-relevant with our resources in software development, helping you master the skills that are in high demand in the job market.</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Fast-Track Your Career"
            bordered={false}
            hoverable
            className="feature-card"
            cover={<RocketOutlined className="feature-icon" />}
          >
            <p>Get noticed by top employers through our job portal, designed to connect you with exciting career opportunities in engineering fields.</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
