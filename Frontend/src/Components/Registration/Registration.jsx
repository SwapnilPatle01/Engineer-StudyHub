import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Typography,
  notification,
  Select,
  Progress,
} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

const { Title } = Typography;
const { Option } = Select;

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted
  const [role, setRole] = useState(""); // State for selected role
  const navigate = useNavigate(); // To redirect to login page

  const onFinish = async (values) => {
    setLoading(true);
    console.log(values);
    try {
      // Make the POST request to the backend
      await axios.post("http://localhost:5000/api/v1/user/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        role: values.role,
        ...(values.role === "company" && {
          companyDetails: {
            companyName: values.companyName,
            companyEmail: values.companyEmail,
            linkedinProfile: values.linkedinProfile,
            websiteUrl: values.websiteUrl,
            hiringType: values.hiringType,
          },
        }),
      });

      // Notify the user of success
      notification.success({
        message: "Account created successfully!",
        description: "Redirecting you to the login page...",
      });

      // Set submitted to true to hide Next/Previous buttons
      setSubmitted(true);

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      notification.error({
        message: "Registration failed",
        description: error.response?.data?.message || "An error occurred",
      });
    }
    setLoading(false);
  };

  // Step navigation for "Next" and "Previous"
  const next = () => {
    if (currentStep < (role === "company" ? 3 : 2)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previous = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle role change
  const handleRoleChange = (value) => {
    setRole(value);
    setCurrentStep(1); // Reset the form to step 1 on role change
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="login-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/222/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="login"
            className="rounded-image"
          />
        </div>
        <div className="register-form">
          <div className="logo-container">
            <Title level={2} className="logo-text">
              Engineer StudyHub
            </Title>
          </div>
          <Title level={5} className="form-title">
            Sign Up to Your Account👋
          </Title>

          {/* Progress Bar - Conditional based on Role */}
          {role === "company" && <Progress percent={(currentStep / 3) * 100} />}
          {role !== "company" && (
            <Progress percent={currentStep === 1 ? 50 : 100} />
          )}

          <Form
            name="register"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {currentStep === 1 && (
              <>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="role"
                  label="Select your role"
                  rules={[
                    { required: true, message: "Please select your role!" },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select role"
                    onChange={handleRoleChange}
                  >
                    <Option value="student">Student</Option>
                    <Option value="company">Company</Option>
                    <Option value="admin">Admin</Option>
                  </Select>
                </Form.Item>
              </>
            )}

            {currentStep === 2 && role === "company" && (
              <>
                {/* Company fields, only shown if "company" role is selected */}
                <Form.Item
                  name="companyName"
                  label="Company Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="companyEmail"
                  label="Company Work Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company work email!",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item name="linkedinProfile" label="LinkedIn Profile Link">
                  <Input size="large" />
                </Form.Item>
                <Form.Item name="websiteUrl" label="Website URL">
                  <Input size="large" />
                </Form.Item>
                <Form.Item name="hiringType" label="Hiring For">
                  <Select size="large" placeholder="Select Hiring Type">
                    <Option value="full-time">Full Time</Option>
                    <Option value="intern">Intern</Option>
                    <Option value="part-time">Part Time</Option>
                    <Option value="hackathon">Hackathon</Option>
                  </Select>
                </Form.Item>
              </>
            )}

            {currentStep === (role === "company" ? 3 : 2) && (
              <>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password size="large" />
                </Form.Item>
              </>
            )}

            {/* Navigation and Submit Buttons */}
            {!submitted && (
              <div className="form-navigation">
                {currentStep > 1 && (
                  <Button onClick={previous} disabled={loading} size="large">
                    Previous
                  </Button>
                )}
                {currentStep < (role === "company" ? 3 : 2) && (
                  <Button onClick={next} disabled={loading} size="large">
                    Next
                  </Button>
                )}
                {currentStep === (role === "company" ? 3 : 2) && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="register-button"
                    loading={loading}
                  >
                    Register
                  </Button>
                )}
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
