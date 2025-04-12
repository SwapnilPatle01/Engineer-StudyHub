import React from "react";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Typography,
  Card,
} from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./ContactUs.css";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

function ContactUs() {
  return (
    <>
      <Layout style={{ minHeight: "100vh", background: "#ffffff" }}>
        {/* Header Section */}
        <Header
          style={{
            backgroundColor: "#6f57f7",
            color: "#fff",
            textAlign: "center",
            padding: "1rem 0",
            height: "160px",
          }}
        >
          <Title
            className="contact-title"
            level={2}
            style={{ color: "#fff", margin: "10px" }}
          >
            We're here to help!
          </Title>
          <Paragraph
            className="contact-paragraph"
            style={{ color: "#fff", fontSize: "1.4rem", margin: "10px" }}
          >
            Please contact us in case of any query. We are happy to help.
          </Paragraph>
        </Header>

        {/* Main Content Section */}
        <Content style={{ padding: "1rem" }}>
          <Title style={{ textAlign: "center", color: "#1b1c1d" }}>
            Contact Us
          </Title>
          <Row gutter={32} justify="center">
            {/* Left Side - Contact Information */}
            <Col xs={24} md={10}>
              <div style={{ marginTop: "10px" }}>
                <Title level={2}>Get in Touch</Title>
                <Paragraph
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  Leave your query and we’ll reach out to you. For admissions
                  related query, our expert learning consultant will help you
                  carve a career path for you.
                </Paragraph>
                <div style={{ marginTop: "2rem" }}>
                  <div
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <MailOutlined
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "0.5rem",
                        color: "#000",
                      }}
                    />
                    <Paragraph
                      style={{ margin: 0, fontSize: "18px", fontWeight: "500" }}
                    >
                      Email:{" "}
                      <span style={{ color: "#553cdf", fontSize: "16px" }}>
                        support@engineerstudyhub.in
                      </span>
                    </Paragraph>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PhoneOutlined
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "0.4rem",
                        color: "#000",
                      }}
                    />
                    <Paragraph
                      style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      Phone No:{" "}
                      <span style={{ color: "#553cdf", fontSize: "16px" }}>
                        +91 9876543210
                      </span>
                    </Paragraph>
                  </div>
                </div>
              </div>

              {/* card section */}
              <Card
                title="Our Office Location"
                style={{
                  marginTop: "1rem",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                bordered={false}
              >
                <Row gutter={16}>
                  <Col span={24}>
                    {/* Embed iframe for Google Maps */}
                    <iframe
                      title="Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.5445682960717!2d79.12093257525832!3d21.090844680574005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b93e3a7d07bb%3A0x129e3ef542beaf4e!2sXenosis%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1730954814800!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Right Side - Contact Form */}
            <Col xs={24} md={14}>
              <div style={{ marginTop: "2rem" }}>
                <Form layout="vertical">
                  <Row
                    gutter={[16, 6]}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      marginTop: "0px",
                    }}
                  >
                    <Col xs={24} md={11}>
                      <Form.Item
                        label={<span style={{ fontSize: "1rem" }}>Name</span>}
                        name="name"
                        rules={[
                          { required: true, message: "Please enter your name" },
                        ]}
                      >
                        <Input
                          placeholder="e.g. John Doe"
                          style={{ fontSize: "18px", border: "1px solid grey" }}
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={11}>
                      <Form.Item
                        label={<span style={{ fontSize: "1rem" }}>Email</span>}
                        name="email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <Input
                          placeholder="e.g example@gmail.com"
                          style={{ fontSize: "18px", border: "1px solid grey" }}
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={11}>
                      <Form.Item
                        label={
                          <span style={{ fontSize: "1rem" }}>
                            Mobile Number
                          </span>
                        }
                        name="phone"
                      >
                        <Input
                          addonBefore="+91"
                          placeholder="Mobile No"
                          style={{
                            fontSize: "18px",
                            border: "1px solid grey",
                            borderRadius: "10px",
                          }}
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24} md={11}>
                      <Form.Item
                        label={
                          <span style={{ fontSize: "1rem" }}>Enquiry Type</span>
                        }
                        name="enquiry"
                      >
                        <Select
                          placeholder="Select an Enquiry Type"
                          className="custom-select"
                          style={{
                            fontSize: "18px",
                            border: "1px solid grey",
                            borderRadius: "10px",
                            height: "40px",
                          }}
                        >
                          <Option value="general">General Inquiry</Option>
                          <Option value="support">Support</Option>
                          <Option value="feedback">Feedback</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      style={{
                        paddingLeft: window.innerWidth > 1200 ? "24px" : "0px",
                      }}
                    >
                      <Form.Item
                        label={
                          <span style={{ fontSize: "1rem" }}>Your Message</span>
                        }
                        name="message"
                        style={{ width: "100%" }}
                      >
                        <TextArea
                          rows={6}
                          placeholder="Type your message here..."
                          style={{
                            padding: "4px",
                            fontSize: "18px",
                            border: "1px solid grey",
                          }}
                        />
                      </Form.Item>
                    </Col>

                    <Col xs={24}>
                      <Paragraph
                        style={{
                          fontSize: "13px",
                          lineHeight: "1.6",
                          margin: 0,
                          paddingLeft: "16px",
                          marginTop: "0",
                        }}
                      >
                        By submitting this form, you consent to our{" "}
                        <a
                          href="/terms-of-use"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "underline",
                            color: "#1890ff",
                          }}
                        >
                          Terms of Use
                        </a>{" "}
                        &{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "underline",
                            color: "#1890ff",
                          }}
                        >
                          Privacy Policy
                        </a>{" "}
                        and agree to be contacted by us via Email, Call,
                        WhatsApp, or SMS.
                      </Paragraph>
                    </Col>

                    <Col xs={24}>
                      <Form.Item
                        style={{ paddingLeft: "16px", marginTop: "6px" }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            width: "22%",
                            fontWeight: "600",
                            fontSize: "20px",
                            backgroundColor: "#553CDF",
                          }}
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default ContactUs;
