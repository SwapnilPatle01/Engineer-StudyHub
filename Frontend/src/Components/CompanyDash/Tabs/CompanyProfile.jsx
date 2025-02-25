import React from "react";
import { Card, Col, Row, Typography, Divider } from "antd";

const { Title, Text } = Typography;

const CompanyProfile = () => {
  return (
    <div style={{ padding: "20px",  }}>
      <Title level={2}>Company Profile</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Company Overview"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text strong>Name:</Text> <Text>XYZ Pvt. Ltd.</Text>
            <br />
            <Text strong>Founded:</Text> <Text>2020</Text>
            <br />
            <Text strong>Location:</Text> <Text>Mumbai, India</Text>
            <br />
            <Text strong>Type:</Text> <Text>Private Limited Company</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Mission & Vision"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text strong>Mission:</Text>{" "}
            <Text>
              To provide innovative solutions that empower businesses.
            </Text>
            <br />
            <Text strong>Vision:</Text>{" "}
            <Text>To be a global leader in technology and consulting.</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Core Values"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text strong>Integrity</Text>
            <br />
            <Text strong>Innovation</Text>
            <br />
            <Text strong>Customer Satisfaction</Text>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Products & Services"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text>
              Web Development, Mobile Applications, Consulting Services
            </Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Target Market"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text>B2B, SMEs, Technology Startups</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Achievements"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text>ISO Certified, Winner of Best Startup Award 2023</Text>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Contact Information"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text strong>Email:</Text> <Text>info@xyz.com</Text>
            <br />
            <Text strong>Phone:</Text> <Text>+91 12345 67890</Text>
            <br />
            <Text strong>Website:</Text> <Text>www.xyz.com</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Team & Leadership"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text>John Doe (CEO)</Text>
            <br />
            <Text>Jane Smith (CTO)</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Future Plans"
            bordered={false}
            style={{
              width: 350,
              height: 200,
            }}
          >
            <Text>Expand into new markets, Launch new products</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyProfile;
