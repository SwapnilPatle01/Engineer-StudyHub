import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice"; // Assuming you have an authSlice for handling loading state
import logo from "../../assets/images/Engineer_StudyHub_-removebg-preview.png";

const { Title } = Typography;
const { Option } = Select;

const RegisterPage = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // i only add this
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        console.log("Navigating to login after submission...");
        navigate("/login");
      }, 2000); // Delay to show success message

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount or on subsequent renders
    }
  }, [submitted, navigate]);

  const onFinish = async () => {
    const formData = new FormData();
    formData.append("firstName", input.firstName);
    formData.append("lastName", input.lastName);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);

    // if (input.role === "company") {
    //   formData.append("companyName", input.companyName);
    //   formData.append("companyEmail", input.companyEmail);
    //   formData.append("linkedinProfile", input.linkedinProfile);
    //   formData.append("websiteUrl", input.websiteUrl);
    //   formData.append("hiringType", input.hiringType);
    // }

    // add this for store company data in database
    // if (input.role === "company") {
    //   formData.append("companyDetails[companyName]", input.companyName);
    //   formData.append("companyDetails[companyEmail]", input.companyEmail);
    //   formData.append("companyDetails[linkedinProfile]", input.linkedinProfile);
    //   formData.append("companyDetails[websiteUrl]", input.websiteUrl);
    //   formData.append("companyDetails[hiringType]", input.hiringType);
    // }

    try {
      dispatch(setLoading(true)); // Show loader
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/register",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // if (res.data.success) {          //i comment this

      notification.success({
        message: "Account created successfully!",
        description: "Redirecting you to the login page...",
      });
      setSubmitted(true); // Mark form as submitted

      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay for 2 seconds to show success message
      // }
    } catch (error) {
      notification.error({
        message: "Registration failed",
        description: error.response?.data?.message || "An error occurred",
      });
    } finally {
      dispatch(setLoading(false)); // Hide loader
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/"); // If user is already logged in, redirect to home
    }
  }, [user, navigate]);

  const next = () => {
    if (currentStep < (input.role === "company" ? 3 : 2)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previous = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRoleChange = (value) => {
    setInput({ ...input, role: value });
    setCurrentStep(1); // Reset the form to step 1 on role change
  };

  return (
    <div
      className="register-container"
      style={{ width: "100%", height: "auto", margin: "50px 0px" }}
    >
      <div
        className="register-card"
        style={{ backgroundColor: "#fff", maxWidth: "80%" }}
      >
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?semt=ais_hybrid"
            alt="login"
            className="rounded-image"
          />
        </div>
        <div className="register-form">
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
              Join Engineer Study Hub!
            </Title>
            <Title level={5} className="form-title" style={{ margin: "0px" }}>
              Create an account to explore study materials, video lectures, and
              more.
            </Title>
          </div>

          <Progress percent={currentStep === 1 ? 50 : 100} />

          <Form name="register" layout="vertical" onFinish={onFinish}>
            {currentStep === 1 && (
              <>
                <Form.Item
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    name="firstName"
                    value={input.firstName}
                    onChange={changeEventHandler}
                  />
                </Form.Item>
                <Form.Item
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input
                    name="lastName"
                    value={input.lastName}
                    onChange={changeEventHandler}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    name="email"
                    value={input.email}
                    onChange={changeEventHandler}
                  />
                </Form.Item>
                <Form.Item
                  label="Select your role"
                  rules={[
                    { required: true, message: "Please select your role!" },
                  ]}
                >
                  <Select
                    value={input.role}
                    onChange={handleRoleChange}
                    placeholder="Select role"
                  >
                    <Option value="student">Student</Option>
                    <Option value="company">Company</Option>
                    <Option value="admin">Admin</Option>
                  </Select>
                </Form.Item>
              </>
            )}

            {currentStep === 2 && (
              <>
                <Form.Item
                  label="Password"
                  rules={[{ required: true, min: 6 }]}
                >
                  <Input.Password
                    name="password"
                    value={input.password}
                    onChange={changeEventHandler}
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                      validator: (_, value) =>
                        value === input.password
                          ? Promise.resolve()
                          : Promise.reject("The two passwords do not match!"),
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </>
            )}

            {!submitted && (
              <div className="form-navigation">
                {currentStep > 1 && (
                  <Button onClick={previous} disabled={loading} size="large">
                    Previous
                  </Button>
                )}
                {currentStep < 2 && (
                  <Button onClick={next} disabled={loading} size="large">
                    Next
                  </Button>
                )}
                {currentStep === 2 && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    size="large"
                  >
                    Register
                  </Button>
                )}
              </div>
            )}

            <div className="login-redirect" style={{ textAlign: "center" }}>
              <Title level={5}>
                By signing up, you agree to our Terms of Service and Privacy
                Policy.
              </Title>
              Already have an account?{" "}
              <Link to="/login" className="register-link">
                Log In here
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
