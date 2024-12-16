import React, { useState, useRef } from "react";
import { Button, Input, message, Typography, Form, Card, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Text, Title } = Typography;

const DocumentIcon = ({ type }) => {
  const iconVariants = {
    pdf: {
      color: "#FF4D4F",
      label: "PDF",
    },
    docx: {
      color: "#1890FF",
      label: "DOCX",
    },
  };

  const variant = iconVariants[type] || iconVariants.pdf;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 64,
        height: 64,
        backgroundColor: variant.color,
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "uppercase",
      }}
    >
      {variant.label}
    </div>
  );
};

const ResumeSubmission = () => {
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState("");
  const [specificQuestions, setSpecificQuestions] = useState("");
  const fileInputRef = useRef(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  // File extension helper
  const getFileExtension = (filename) => {
    return filename ? filename.split(".").pop().toLowerCase() : null;
  };

  // Handle submit action
  const handleSubmit = async () => {
    if (!file) {
      message.error("Please upload a resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("comments", comments);
    formData.append("specificQuestions", specificQuestions);

    try {
      const response = await fetch("/api/resume-submissions", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        message.success("Resume submitted successfully!");
        setFile(null);
        setComments("");
        setSpecificQuestions("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        message.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      message.error("An error occurred during submission.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "12px",
      }}
    >
      <Card
        style={{
          maxWidth: "700px",
          width: "100%",
          padding: "2px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          backgroundColor: "white",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <Title level={3}>Resume Review Form</Title>
          <Text type="secondary">Upload Resume</Text>
        </div>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div
                style={{
                  textAlign: "center",
                  padding: "12px",
                  border: "2px dashed #553cdf",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept=".pdf,.docx"
                  onChange={handleFileUpload}
                />
                {file ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DocumentIcon
                      type={
                        getFileExtension(file.name) === "pdf" ? "pdf" : "docx"
                      }
                    />
                    <div>
                      <Text>{file.name}</Text>
                      <Text type="secondary" style={{ display: "block" }}>
                        {(file.size / 1024).toFixed(2)} KB
                      </Text>
                    </div>
                  </div>
                ) : (
                  <div>
                    <UploadOutlined
                      style={{
                        fontSize: "24px",
                        color: "#1890FF",
                        paddingTop: "18px",
                      }}
                    />
                    <p
                      style={{
                        paddingTop: "12px",
                        marginBottom: "2px",
                        fontSize: "16px",
                      }}
                    >
                      Drag & Drop or Click to Upload Resume
                    </p>
                    <Text type="secondary" style={{ paddingBottom: "12px" }}>
                      Supported: PDF, DOCX (Max 5MB)
                    </Text>
                  </div>
                )}
              </div>
            </Col>

            <Col span={24}>
              <Form.Item label="Comments (Optional)">
                <TextArea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Add comments about your resume"
                  autoSize={{ minRows: 2, maxRows: 4 }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Specific Questions (Optional)">
                <TextArea
                  value={specificQuestions}
                  onChange={(e) => setSpecificQuestions(e.target.value)}
                  placeholder="Specific questions for the reviewer"
                  autoSize={{ minRows: 2, maxRows: 4 }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#553CDF",
                  color: "#FFFFFF",
                  borderColor: "#553CDF",
                  fontSize: "16px",
                  padding: "12px 0",
                }}
              >
                Submit Your Resume
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ResumeSubmission;
