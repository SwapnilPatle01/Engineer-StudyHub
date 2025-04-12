import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Typography,
  notification,
  Select,
} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice"; // Assuming you have an authSlice for handling loading state
import "./RegistrationPage.css";

const { Title } = Typography;
const { Option } = Select;

const RegisterPage = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    companyName: "",
    companyEmail: "",
    linkedinProfile: "",
    websiteUrl: "",
    hiringType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (value) => {
    setInput({ ...input, role: value });
  };

  const handleHiringTypeChange = (value) => {
    setInput({ ...input, hiringType: value });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);
  const onFinish = async () => {
    if (!input.firstName || !input.lastName || !input.email || !input.password || !input.role) {
      notification.error({
        message: "Registration failed",
        description: "Please fill in all required fields",
      });
      return;
    }
    const requestData = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      role: input.role
    };
    if (input.role === "company") {
      if (!input.companyName || !input.hiringType) {
        notification.error({
          message: "Registration failed",
          description: "Please fill in all company details",
        });
        return;
      }
      requestData.companyDetails = {
        companyName: input.companyName,
        companyEmail: input.companyEmail || "",
        linkedinProfile: input.linkedinProfile || "",
        websiteUrl: input.websiteUrl || "",
        hiringType: input.hiringType
      };
    }
    console.log("Request Data:", requestData); // Debugging: Log the request data
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      console.log("Response Data:", response.data);
  
      // Modified success check
      if (response.status === 201 || response.status === 200) {
        notification.success({
          message: "Registration successful",
          description: "Redirecting to login page...",
          duration: 3,
          placement: 'topRight'
        });
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Error:", error);
      notification.error({
        message: "Registration failed",
        description: error.response?.data?.message || "Please try again later",
        duration: 3,
        placement: 'topRight'
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-form" style={{ maxWidth: "400px", margin: "0 auto", width: "100%" }}>
          <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Title level={3} className="register-form-title" style={{ textAlign: 'center', marginBottom: '15px', fontSize: '32px', display: 'block', width: '100%' }}>
              Create an account
            </Title>
          </div>

          <Form
            name="register"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <div style={{ display: 'flex', gap: '15px' }}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Please input your first name!" }]}
              >
                <Input
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Please input your last name!" }]}
              >
                <Input
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </Form.Item>
            </div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" }
              ]}
            >
              <Input
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Select your role"
              name="role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Select
                value={input.role}
                onChange={handleRoleChange}
                placeholder="Select your role"
              >
                <Option value="student">Student</Option>
                <Option value="company">Company</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>

            {input.role !== "company" && (
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Password must be at least 6 characters!" }
                ]}
              >
                <Input.Password
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </Form.Item>
            )}

            {input.role === "company" && (
              <>
                <Form.Item
                  label="Company Name"
                  name="companyName"
                  rules={[{ required: true, message: "Please input company name!" }]}
                >
                  <Input
                    name="companyName"
                    value={input.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />
                </Form.Item>
                <Form.Item
                  label="Company Email"
                  name="companyEmail"
                  rules={[{ type: "email", message: "Please enter a valid email!" }]}
                >
                  <Input
                    name="companyEmail"
                    value={input.companyEmail}
                    onChange={handleChange}
                    placeholder="Enter company email"
                  />
                </Form.Item>
                <Form.Item
                  label="LinkedIn Profile"
                  name="linkedinProfile"
                  rules={[{ type: "url", message: "Please enter a valid URL!" }]}
                >
                  <Input
                    name="linkedinProfile"
                    value={input.linkedinProfile}
                    onChange={handleChange}
                    placeholder="Enter LinkedIn profile URL"
                  />
                </Form.Item>
                <Form.Item
                  label="Website URL"
                  name="websiteUrl"
                  rules={[{ type: "url", message: "Please enter a valid URL!" }]}
                >
                  <Input
                    name="websiteUrl"
                    value={input.websiteUrl}
                    onChange={handleChange}
                    placeholder="Enter company website URL"
                  />
                </Form.Item>
                <Form.Item
                  label="Hiring Type"
                  name="hiringType"
                  rules={[{ required: true, message: "Please select hiring type!" }]}
                >
                  <Select
                    name="hiringType"
                    value={input.hiringType}
                    onChange={handleHiringTypeChange}
                    placeholder="Select hiring type"
                  >
                    <Option value="fulltime">Full Time</Option>
                    <Option value="internship">Internship</Option>
                    <Option value="both">Both</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    { min: 6, message: "Password must be at least 6 characters!" }
                  ]}
                >
                  <Input.Password
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </Form.Item>
              </>
            )}
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              className="sign-up-btn"
            >
              Sign Up
            </Button>

            <div className="terms-text" style={{ textAlign: 'left', marginBottom: '15px', fontSize: '14px', color: '#666' }}>
              By signing up, you agree to our{' '}
              <Link to="/terms" className="link">Terms and Service</Link>{' '}
              and{' '}
              <Link to="/privacy" className="link">Privacy Policy</Link>
            </div>

            <div className="login-redirect">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="link">
                  Log In
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
