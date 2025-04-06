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
import logo from "../../assets/images/Engineer_StudyHub_-removebg-preview.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const { Title } = Typography;
const { Option } = Select;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Make the POST request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email: values.email,
          password: values.password,
          role: values.role,
        }
      );

      console.log(response);
      // Store the JWT token and role
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", values.role);

      // Notify the user of success
      notification.success({ message: "Login successful" });

      // Navigate based on role
      if (values.role === "company") {
        navigate("/Company/Dashboard");
      } else {
        navigate("/homePage");
      }
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
        
        <div className="login-form" style={{ backgroundColor: "#fff" }}>
          <div
            className="logo-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "220px", padding: "0px", margin: "0px" }}
            />
            <Title level={4} className="form-title" style={{ margin: "0px" }}>
              Welcome Back to Engineer Study Hub!
            </Title>
            <Title level={5} className="form-title" style={{ margin: "0px" }}>
              Log in to access your personalized resources and continue your
              journey to success.
            </Title>
          </div>

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
                <Option value="company">Recruiter</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
              rules={[
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
                { required: true, message: "Please input your email!" },
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
                New to Engineer Study Hub?{" "}
                <Link to="/register" className="link">
                  Sign up now and unlock a world of learning!?
                </Link>
              </p>
            </Space>
          </Form>
        </div>
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg?t=st=1733744529~exp=1733748129~hmac=cb13357cc6771278c307e96d0fd941af1017db43aac8df2d3d75b4a7b2c938a9&w=900"
            alt="login"
            className="rounded-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
