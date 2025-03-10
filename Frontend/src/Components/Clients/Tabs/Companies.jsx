import React, { useState, useEffect } from "react";
import { Button, Table, Space, Modal, Input } from "antd";
import axios from "axios";

const Companies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    logo: "",
    userId: "",
  });

  //get compnies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/v1/company/get", {
          headers: {
            Authorization: token,
          },
        });

        if (response.data.success) {
          setCompanies(response.data.companies);
        } else {
          setError("No companies found");
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        setError("Failed to load companies");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //post company details
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/v1/company/register",
        {
          name: formData.name,
          description: formData.description,
          website: formData.website,
          location: formData.location,
          logo: formData.logo, // Accepting logo as a URL
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data.success) {
        setCompanies([...companies, response.data.company]);
        setIsModalOpen(false);
        setFormData({
          name: "",
          description: "",
          website: "",
          location: "",
          logo: "",
        });
      } else {
        console.error("Company registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };
  
  

  // Table Columns
  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img src={logo} alt="Company Logo" style={{ width: 50, height: 50, borderRadius: "50%" }} />
      ),
    },
    {
      title: "Company Name & Description",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <span style={{ fontWeight: "bold", color: "#553CDF" }}>{text}</span>
          <div style={{ fontSize: "12px", color: "gray" }}>{record.description}</div>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link">Edit</Button>
          <Button type="link" danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const dataWithDate = companies.map((company, index) => ({
    ...company,
    key: index,
    createdAt: new Date(company.createdAt).toLocaleDateString(),
  }));


  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "18px 25px",
            borderRadius: "6px",
            color: "#fff",
            marginRight: "10px",
            border: "1px solid #553CDF",
            background: "linear-gradient( #553CDF, #1a2980)",
          }}
        >
          Create Company
        </Button>
      </div>

      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <Table columns={columns} dataSource={dataWithDate} pagination={{ pageSize: 5 }} />
      )}

      {/* Modal for Creating New Company */}
      <Modal
        title="Setup New Company"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label className="font-bold mb-2">Company Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="font-bold mb-2">Description</label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <div style={{ flex: 1 }}>
            <label className="font-bold mb-2">Website</label>
            <Input
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website URL"
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="font-bold mb-2">Location</label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label className="font-bold mb-2">Company Logo URL</label>
          <Input
            name="logo"
            value={formData.logo}
            onChange={handleChange}
            placeholder="Enter logo URL"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label className="font-bold mb-2">User ID</label>
          <Input
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="Enter user ID"
          />
        </div>

        <Button
          type="primary"
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "18px 25px",
            borderRadius: "6px",
            marginTop:"10px",
            color: "#fff",
            border: "1px solid #553CDF",
            background: "linear-gradient( #553CDF, #1a2980)",
          }}
        >
          Create Company
        </Button>
      </Modal>
    </div>
  );
};

export default Companies;