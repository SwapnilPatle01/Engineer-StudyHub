import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './AddCompany.css';
import axios from "axios";

const { TextArea } = Input;

const AddCompany = ({ onCompanySubmit }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  // Function to handle form submission
  const onFinish = async (values) => {
    const formData = {
      ...values,
      logo: fileList.map(file => file.originFileObj), // Get logo file
    };

    onCompanySubmit(formData); // Callback to parent component if needed
    submitCompanyData(formData); // Submit the form data
  };

  // Function to submit the company data
  // const submitCompanyData = async (data) => {
  //   try {
  //     // Get the token from localStorage
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       message.error("Authentication failed! Please login again.");
  //       return;
  //     }

  //     // Prepare the payload as JSON
  //     const companyPayload = {
  //       name: data.CompanyName,
  //       description: data.description,
  //       website: data.Website,
  //       location: data.location,
  //       logo: data.logo, // logo URL as string
  //     };

  //     // Make a POST request using Axios
  //     const response = await axios.post(
  //       'http://localhost:5000/api/v1/company/register',
  //       companyPayload, // JSON payload
  //       {
  //         headers: {
  //           token: `${token}`, // Set 'token' header as per cURL
  //           Authorization: `Bearer ${token}`, // Set Authorization header
  //           'Content-Type': 'application/json', // Content type set to JSON
  //         },
  //       }
  //     );

  //     // Handle the response
  //     if (response.status === 200) {
  //       message.success("Company registered successfully!");
  //     } else {
  //       message.error("Failed to register company.");
  //     }
  //   } catch (error) {
  //     // Catch errors and show error message
  //     if (error.response) {
  //       console.error('Error response:', error.response.data);
  //       message.error("Failed to register company. Please try again.");
  //     } else {
  //       console.error("Error occurred:", error);
  //       message.error("An error occurred. Please check your connection and try again.");
  //     }
  //   }
  // };
  const submitCompanyData = async (data) => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      message.error("Authentication failed! Please login again.");
      return;
    }

    // Create a FormData object to handle file upload and other fields
    const formData = new FormData();
    console.log(formData ,"data")
    formData.append("name", data.name);
    formData.append("website", data.website);
    formData.append("description", data.description);
    formData.append("location", data.location);
    
    // Append the file (logo)
    if (data.logo) {
      formData.append("logo", data.logo); // 'logo' should be the File object from an <input type="file">
    }

    // Make a POST request using Axios with FormData
    const response = await axios.post(
      'http://localhost:5000/api/v1/company/register',
      formData, // FormData payload for multipart/form-data
      {
        headers: {
          token: token, // Set 'token' header as per cURL
          Authorization: `Bearer ${token}`, // Set Authorization header
          'Content-Type': 'multipart/form-data', // Let Axios set the boundary automatically
        },
      }
      
    );
    console.log(response ,"res")


    // Handle the response
    if (response.status === 201) {
      message.success("Company registered successfully!");
    } else {
      message.error("Failed to register company.");
    }
  } catch (error) {
    // Catch errors and show error message
    if (error.response) {
      console.error('Error response:', error.response.data);
      message.error("Failed to register company. Please try again.");
    } else {
      console.error("Error occurred:", error);
      message.error("An error occurred. Please check your connection and try again.");
    }
  }
};


  // Handle file upload changes
  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList); // Update the file list state
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        CompanyName: "",
        description: "",
        Website: "",
        location: "",
      }}
      className="company-form"
    >
       <Form.Item
  name="name" // Change this to "name"
  label="Company Name"
  rules={[{ required: true, message: "Please enter the company name" }]}
>
  <Input placeholder="Enter Company Name" />
</Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter the company description" }]}
      >
        <TextArea placeholder="Enter description" />
      </Form.Item>

      <Form.Item 
      name="website"
       label="Website">
        <Input placeholder="Enter Website" />
      </Form.Item>

      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Please enter the location" }]}
      >
        <Input placeholder="Enter location" />
      </Form.Item>

      <Form.Item
        name="logo"
        label="Upload Logo"
        rules={[{ required: true, message: "Please upload the company logo" }]}
        extra="Supported formats: JPG, PNG"
      >
        <Upload
          beforeUpload={() => false} // Prevent automatic upload
          accept="image/*"
          listType="picture"
          fileList={fileList}
          onChange={handleUploadChange}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register Company
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCompany;
