import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Typography,
  Select,
  notification,
} from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import "../../styles/LoginPage.css";

const { Title } = Typography;
const { Option } = Select;

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          notification.success({
            message: "Login successful",
            description: "Welcome back!",
            duration: 3,
            placement: 'topRight'
          });
          navigate("/homepage");
        } else {
          throw new Error("No token received");
        }
      }
    } catch (error) {
      notification.error({
        message: "Login failed",
        description: error.response?.data?.message || "Invalid credentials. Please try again.",
        duration: 3,
        placement: 'topRight'
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-form" style={{ maxWidth: "400px", margin: "0 auto", width: "100%" }}>
            <div className="logo-container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <Title level={3} className="login-form-title" 
                style={{ textAlign: 'center', marginBottom: '18px', fontSize: '32px', display: 'block', width: '100%' }}>
                Log in
              </Title>
            </div>
            <Form
              name="login"
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" }
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 6, message: "Password must be at least 6 characters!" }
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                className="login-btn"
              >
                Login
              </Button>
              <div className="login-redirect">
                <Link to="/forgot-password" className="link">
                  Forgot password?
                </Link>
                <p className="login-text">
                  Don't have an account? {" "}
                  <Link to="/register" className="link">
                    Sign up
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
