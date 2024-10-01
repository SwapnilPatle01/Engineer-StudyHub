import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Space,
  Select,
  notification,
} from "antd";
import axios from "axios";
import { Link } from "react-router-dom"; // Updated import
import "../../styles/LoginPage.css";

const { Title } = Typography;
const { Option } = Select;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Make the POST request to the backend
      const response = await axios.post("http://localhost:5000/api/v1/user/login", {
     
        
        email: values.email,
        password: values.password,
        role: values.role,
      });
      console.log(response);
      // Store the JWT token
      localStorage.setItem("token", response.data.token);
      // Notify the user of success
      notification.success({ message: "Login successful" });
      // Redirect or update UI as needed
      // For example, navigate to a dashboard:
      // window.location.href = '/dashboard';
    } catch (error) {
      notification.error({
        message: "Login failed",
        description: error.response?.data?.message || "An error occurred",
      });
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?uid=R115740517&ga=GA1.1.202867201.1719126649&semt=ais_hybrid"
            alt="login"
            className="rounded-image"
          />
        </div>
        <div className="login-form">
          <div className="logo-container">
            <Title level={2} className="logo-text interactive-text">
              Engineer StudyHub
            </Title>
          </div>
          <Title level={5} className="form-title">
            Sign into your account
          </Title>
          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="role"
              label="Select your role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Select size="large" placeholder="Select role">
                <Option value="student">Student</Option>
                <Option value="company">Company</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
               rules={[
    { type: "email", message: "Please enter a valid email address!" },
    { required: true, message: "Please input your email!" }
  ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 24 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="login-button"
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
            <Space direction="vertical" size="small">
              <Link to="#" className="link">
                Forgot password?
              </Link>
              <p className="signup-text">
                Don't have an account?{" "}
                <Link to="/register" className="link">
                  Register here
                </Link>
              </p>
            </Space>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
