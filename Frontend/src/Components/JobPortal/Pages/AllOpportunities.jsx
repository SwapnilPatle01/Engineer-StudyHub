import React from "react";
import { Table, Button } from "antd";

const mockJob = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Xenosis IT Solutions",
    location: "Nagpur",
    description: "Develop software applications",
    minQualification: "Bachelor's degree in Computer Science",
    minSalary: "$100,000 - $150,000",
    maxSalary: "$200,000 - $250,000",
    minExperience: "Freshers",
    phone: 7264832848,
    email: "saurabh@xenosis.com",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Xenosis IT Solutions",
    location: "Nagpur",
    description: "Develop software applications",
    minQualification: "Bachelor's degree in Computer Science",
    minSalary: "$100,000 - $150,000",
    maxSalary: "$200,000 - $250,000",
    minExperience: "Freshers",
    phone: 7264832848,
    email: "saurabh@xenosis.com",
  },
];

function AllOpportunities() {
  const violetColor = "#7D3C98";

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Qualification",
      dataIndex: "minQualification",
      key: "minQualification",
    },
    {
      title: "Experience",
      dataIndex: "minExperience",
      key: "minExperience",
    },
    {
      title: "Salary",
      key: "salary",
      render: (_, record) => `${record.minSalary} - ${record.maxSalary}`,
    },
    {
      title: "Contact",
      key: "contact",
      render: (_, record) => (
        <>
          <div>Email: {record.email}</div>
          <div>Phone: {record.phone}</div>
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="default"
            style={{
              borderColor: violetColor,
              color: violetColor,
            }}
          >
            Read More
          </Button>
          <Button
            type="primary"
            style={{
              backgroundColor: violetColor,
              borderColor: violetColor,
            }}
          >
            Apply Now
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ }}>
      <Table
        columns={columns}
        dataSource={mockJob}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default AllOpportunities;
