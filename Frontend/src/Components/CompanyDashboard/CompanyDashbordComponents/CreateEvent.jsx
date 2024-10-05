import React from "react";
import { Card, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

function CreateEvent() {
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
              Create an Event
            </Title>
            <Button
              type="primary"
              style={{ width: "auto", padding: "0px 50px" }}
            >
              Create Event
            </Button>
          </div>
        }
      >
        <Title level={4}>Event Details</Title>
        <Paragraph>
          You can create a new event by clicking the button above. Make sure
          to provide accurate event details, including the event name, date,
          location, and description.
        </Paragraph>
        <Paragraph>
          <b>Steps to follow:</b>
          <ul>
            <li>Enter event name</li>
            <li>Select event date and time</li>
            <li>Provide event location</li>
            <li>Add event description</li>
          </ul>
        </Paragraph>
      </Card>

      {/* Created events will be displayed here */}
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
              All Created Events
            </Title>
          </div>
        }
      >
        <Paragraph>
          Created events will be displayed here. You can also manage them as
          needed.
        </Paragraph>
      </Card>
    </div>
  );
}

export default CreateEvent;
