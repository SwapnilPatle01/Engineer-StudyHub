import React from "react";
import { Card, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

function CreateJobPost() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <Card
        style={{ width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              Create a Job Post
            </Title>
            <Button
              type="primary"
              style={{ width: "auto", padding: "0px 50px" }}
            >
              Create Job Post
            </Button>
          </div>
        }
      >
        <Title level={4}>Job Details</Title>
        <Paragraph>
          You can create a new job post by clicking the button above. Make sure
          to provide accurate job details, including the job title, description,
          and qualifications.
        </Paragraph>
        <Paragraph>
          <b>Steps to follow:</b>
          <ul>
            <li>Enter job title</li>
            <li>Provide job description</li>
            <li>Mention required skills and qualifications</li>
          </ul>
        </Paragraph>
      </Card>

      {/* created job post will be displayed here */}
      <Card
        style={{
          width: "100%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          marginTop: "20px",
        }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={4} style={{ margin: 0 }}>
              All Created Jobs
            </Title>
          </div>
        }
      >
        <Paragraph>
          Created job post will be displayed here also you can manage it
        </Paragraph>
      </Card>
    </div>
  );
}

export default CreateJobPost;
