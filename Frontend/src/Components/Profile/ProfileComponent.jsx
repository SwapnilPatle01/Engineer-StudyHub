import React from "react";
import { Avatar, Card, Typography, Button, Row, Col, Divider } from "antd";
import { EditOutlined, UserOutlined, MailOutlined, PhoneOutlined, IdcardOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ProfileComponent() {
  return (
    <div style={{ margin: '50px 100px', backgroundColor: '#f0f2f5', borderRadius: '8px', padding: '20px' }}> 
      <Row justify="center" style={{ margin: '30px 0', width: "100%" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Card
            style={{ padding: '20px 30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <Row justify="space-between" align="middle">
              {/* Left side - Profile Info */}
              <Col>
                <Row align="middle">
                  <Avatar
                    size={200}
                    icon={<UserOutlined />}
                    style={{ marginRight: '30px', backgroundColor: '#87d068' }} // Avatar background color
                  />
                  <div>
                    <Title level={3} style={{ margin: 0, color: '#4a4a4a' }}>John Doe</Title>
                    <Text type="secondary">
                      
                      johndoe@example.com
                    </Text>
                    <br />
                    <Text type="secondary">
                      <IdcardOutlined style={{ marginRight: '8px' }} />
                      Role: Company / Admin / User
                    </Text>
                  </div>
                </Row>
              </Col>

              {/* Right side - Edit Button */}
              <Col>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  size="large"
                  onClick={() => alert("Edit Profile Clicked")}
                  style={{ marginLeft: '20px' }} 
                />
              </Col>
            </Row>
            <Divider style={{ margin: '20px 0', backgroundColor: '#d9d9d9' }} />

            {/* Personal Details */}
            <Card style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Title level={5} style={{ marginTop: '20px', marginBottom: "40px", color: '#4a4a4a' }}>Personal Details</Title>
              <Row gutter={16} style={{ marginTop: '10px' }}>
                <Col span={12}>
                  <div style={{ marginTop: '20px', marginBottom: "40px", marginLeft: "40px" ,fontSize: '16px' }}>
                    <label>
                      First Name 
                    </label><br />
                    <Text style={{ fontWeight: 'bold' }}>John</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginTop: '20px', marginBottom: "40px", marginLeft: "20px" ,fontSize: '16px' }}>
                    <label>
                       Last Name
                    </label><br />
                    <Text style={{ fontWeight: 'bold' }}>Doe</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginTop: '20px', marginBottom: "40px", marginLeft: "40px"  ,fontSize: '16px' }}>
                    <label>
                      <MailOutlined style={{ marginRight: '8px' }} /> Email ID
                    </label><br />
                    <Text style={{ fontWeight: 'bold' }}>johndoe@example.com</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ marginTop: '20px', marginBottom: "40px", marginLeft: "20px"  ,fontSize: '16px'}}>
                    <label >
                      <PhoneOutlined style={{ marginRight: '8px' }} /> Phone No
                    </label><br />
                    <Text style={{ fontWeight: 'bold' }}>000-000-0000</Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
