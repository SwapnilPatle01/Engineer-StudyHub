import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const FAQ = () => {
  return (
    <div className="faq-section">
      <Title level={2} className="faq-heading">
        Frequently Asked Questions (FAQs)
      </Title>
      <Paragraph className="faq-intro">
        Here are the answers to some of the most common questions about
        Engineers StudyHub, our resources, and services.
      </Paragraph>
      <Collapse accordion>
        <Panel
          header="What kind of study materials are available on Engineers StudyHub?"
          key="1"
        >
          <Paragraph>
            We offer comprehensive study materials, including notes, previous
            year question papers (PYQs), syllabus, and video lectures for all
            engineering streams and semesters.
          </Paragraph>
        </Panel>
        <Panel header="How do I access the study materials?" key="2">
          <Paragraph>
            Once you register on the platform, you can access all the materials
            for your respective branch and semester via the Learning Material
            section. You can also filter resources by subject.
          </Paragraph>
        </Panel>
        <Panel header="Are the study materials updated regularly?" key="3">
          <Paragraph>
            Yes, we ensure our materials are regularly updated to reflect the
            latest syllabus and exam patterns to help you prepare effectively.
          </Paragraph>
        </Panel>
        <Panel header="How can I improve my coding skills?" key="4">
          <Paragraph>
            Engineers StudyHub provides a wide range of coding resources,
            project tutorials, and challenges designed to help you improve your
            programming skills. Visit the DeveloperHUB section to explore our
            coding modules.
          </Paragraph>
        </Panel>
        <Panel header="Can Engineers StudyHub help me find a job?" key="5">
          <Paragraph>
            Yes! We have a dedicated job portal where you can apply to top
            engineering jobs and internships. We also provide resume-building
            tips and interview preparation resources in our Interview
            Preparation module.
          </Paragraph>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQ;
