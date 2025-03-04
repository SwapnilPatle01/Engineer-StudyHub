import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Dropdown, Avatar, Drawer } from "antd";
import {
  DownOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { jwtDecode } from "jwt-decode"; // Correct import
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import FooterComponent from "../Components/Footer/FooterComponent";
import logo from "../assets/images/Engineer_StudyHub_-removebg-preview.png";

const { Header, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathKeyMap = {
    "/homePage": "1",
    "/learning-material": "2",
    "/JobPortal": "3",
    "/EngineersCarrerHub-DashBoard": "4",
    "/DevelopersHub": "5",
    "/Dashboard": "6",
    "/AboutUs": "7",
    "/ContactUs": "8",
    "/login": "9",
    "/register": "10",
  };

  const activeKey = pathKeyMap[location.pathname] || "1"; // Default to "1"

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false); // Drawer state for mobile menu

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    } else {
      setRole("");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setRole("");
    navigate("/login");
  };

  const getMenuItems = () => {
    const baseItems = [
      {
        key: "1",
        label: (
          <Link to="/homePage" className="menu-link">
            <HomeOutlined style={{ fontSize: "22px", marginTop: "10px" }} />
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link to="/learning-material" className="menu-link">
            Engineer’s Library
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link to="/JobPortal" className="menu-link">
            Engineer's CareerHub
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link to="/DevelopersHub" className="menu-link">
            Development Hub
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link to="/AboutUs" className="menu-link">
            About Us
          </Link>
        ),
      },
      {
        key: "8",
        label: (
          <Link to="/ContactUs" className="menu-link">
            Contact Us
          </Link>
        ),
      },
    ];

    if (role === "admin") {
      return [
        ...baseItems,
        {
          key: "4",
          label: (
            <Link to="/company-dashboard" className="menu-link">
              Company Dashboard
            </Link>
          ),
        },
        {
          key: "6",
          label: (
            <Link to="/Dashboard" className="menu-link">
              Admin Dashboard
            </Link>
          ),
        },
      ];
    } else if (role === "company") {
      return [
        ...baseItems,
        {
          key: "4",
          label: (
            <Link to="/company-dashboard" className="menu-link">
              Company Dashboard
            </Link>
          ),
        },
      ];
    }
    return baseItems;
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => navigate("/profile")}>
        <UserOutlined style={{ marginRight: "5px" }} /> Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined style={{ marginRight: "5px" }} /> Logout
      </Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  // Added this check for login/signup pages
  const hideFooter = location.pathname === '/login' || location.pathname === '/register';
  return (
    <Layout style={{ margin: 0, padding: "0px" }}>
      <div
        style={{ background:"linear-gradient(90deg, #553CDF, #1a2980)", width: "100%", height: "45px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0px",
            fontSize: "12px",
            color: "#fff",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              height: "100%",
            }}
          >
            <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <MailOutlined
                style={{
                  paddingRight: "5px",
                  fontSize: "18px",
                  color: "#fff",
                }}
              />
              info@engineerstudyhub.in
            </p>
            <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <PhoneOutlined
                style={{
                  paddingRight: "5px",
                  fontSize: "18px",
                  color: "#fff",
                }}
              />
              +91 9876543210
            </p>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <DownOutlined style={{ paddingRight: "5px", fontSize: "14px" }} />
              India
            </p>
          </div>
        </div>
      </div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "100%",
          color: "#6441A3",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="logo-container" style={{ height: "100%", margin: 0 }}>
          <img src={logo} alt="logo" style={{ width: "220px" }} />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[activeKey]}
          className="Menu-links desktop-menu"
          items={getMenuItems()}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "transparent",
            color: "#6441A3",
            border: "none",
          }}
        />
        <MenuOutlined
          className="mobile-menu-icon"
          onClick={showDrawer}
          style={{
            fontSize: "24px",
            cursor: "pointer",
          }}
        />{" "}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
          className="mobile-drawer"
        >
          <Menu
            mode="vertical"
            selectedKeys={[activeKey]}
            items={getMenuItems()}
            style={{ backgroundColor: "transparent" }}
          />
          {!isLoggedIn && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                marginTop: "4px",
              }}
            >
              <Button
                onClick={() => {
                  navigate("/login");
                  closeDrawer();
                }}
                style={{
                  padding: "18px 25px",
                  borderRadius: "6px",
                  color: "#6441A3",
                  marginRight: "10px",
                  border: "1px solid #6441A3",
                  background: "transparent",
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  navigate("/register");
                  closeDrawer();
                }}
                style={{
                  padding: "18px 30px",
                  borderRadius: "6px",
                  color: "#6441A3",
                  fontWeight: "bold",
                  border: "1px solid #6441A3",
                  background: "transparent",
                  marginRight: "25px",
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Drawer>
        {isLoggedIn ? (
          <Dropdown overlay={profileMenu} trigger={["click"]}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar
                className="avatar"
                size={45}
                icon={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                }
                style={{ backgroundColor: "#eee" }}
              />
              <span style={{ marginLeft: "8px", fontSize: "16px" }}></span>
            </div>
          </Dropdown> 
        ) : (
          <>
            <Button
              className="authbtn"
              onClick={() => navigate("/login")}
              style={{
                padding: "18px 25px",
                borderRadius: "6px",
                color: "#fff",
                marginRight: "10px",
                border: "1px solid #553CDF",
                background:"linear-gradient( #553CDF, #1a2980)",
              }}
            >
              Login
            </Button>
            <Button
              className="authbtn2"
              onClick={() => navigate("/register")}
              style={{
                padding: "18px 25px",
                borderRadius: "6px",
                color: "#553CDF",
                fontWeight: "bold",
                marginRight: "10px",
                border: "2px solid #553CDF",
                background: "transparentx",
              }}
              // type="primary"
            >
              Sign Up
            </Button>
          </>
        )}
      </Header>
      <Content style={{ padding: "0px" }}>
        <Outlet />
      </Content>
      {!hideFooter && <FooterComponent />}
    </Layout>
  );
};

export default MainLayout;
