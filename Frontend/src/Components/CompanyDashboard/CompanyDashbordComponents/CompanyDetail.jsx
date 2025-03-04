import React, { useState, useEffect } from "react";
import { Button, Typography, Modal, Table, message } from "antd";
import AddCompany from "./addCompany"; // Ensure this component is correctly implemented
import axios from "axios";

const { Title } = Typography;

function CompanyDetail() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  // Fetch the company list from the API
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
          const token = localStorage.getItem("token");
        if (!token) {
          message.error("Authentication failed! Please login again.");
          return;
        }

        const response = await axios.get('http://localhost:5000/api/v1/company/get', {
          headers: {
            token : `${token}`,
            Authorization: `Bearer ${token}`, // Set Authorization header
          },
        });

        console.log(response,);

        // Assuming the API returns an array of companies
        if (response.status === 200) {
            // Map the API data to match the table's data structure
            const companies = response.data.companies;
        const formattedData = companies.map((company) => ({
          _id: company._id,
          name: company.name,
          description: company.description || "No description available",
          website: company.website || "N/A",
          location: company.location || "N/A",
          logo: company.logo || null, // Fallback to null if logo is unavailable
        }));
          setCompanyList(formattedData);
        } else {
          message.error("Failed to fetch company data.");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
        message.error(error?.response?.data?.message || "An error occurred while fetching company data.");
      }
    };

    fetchCompanyData();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsEditing(false);
  };

  const handleCompanySubmit = (data) => {
    if (isEditing) {
      // If editing, update the company
      setCompanyList(
        companyList.map((company) =>
          company._id === editingCompany._id ? { ...company, ...data } : company
        )
      );
      setIsEditing(false);
    } else {
      setCompanyList([...companyList, data]); // Add new company data to the list
    }
    setIsModalVisible(false);
  };

  const handleEdit = (index) => {
    setEditingCompany(companyList[index]);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleDelete = async (index) => {
    try {
      const companyId = companyList[index]._id;
      const token = localStorage.getItem("token");
      if (!token) {
        message.error("Authentication failed! Please login again.");
        return;
      }

      const response = await axios.delete(`http://localhost:5000/api/v1/company/company/${companyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        message.success("Company deleted successfully.");
        setCompanyList(companyList.filter((_, i) => i !== index));
      } else {
        message.error("Failed to delete company.");
      }
    } catch (error) {
      console.error("Error deleting company:", error);
      message.error(error?.response?.data?.message || "An error occurred while deleting the company.");
    }
  };

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo) =>
        logo ? (
          <img
            src={logo}
            alt="Company Logo"
            style={{ width: "100px", height: "100px" }}
          />
        ) : null,
    },
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record, index) => (
        <>
          <Button type="link" onClick={() => handleEdit(index)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Title level={4} style={{ margin: 0 }}>
          Create a Company
        </Title>
        <Button type="primary" style={{ width: "auto", padding: "0px 50px" }} onClick={showModal}>
          Create Company
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={companyList}
        rowKey={(record) => record._id}
        style={{ marginTop: "20px" }}
        pagination={false}
      />
      <Modal
        title={isEditing ? "Edit Company" : "Create a Company"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddCompany
          onCompanySubmit={handleCompanySubmit}
          editingData={isEditing ? editingCompany : null}
        />
      </Modal>
    </div>
  );
}

export default CompanyDetail;
