import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Dropdown, Avatar, Drawer } from "antd";
import { LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { jwtDecode } from "jwt-decode"; // Correct import
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import logo from "../assets/images/Engineer_StudyHub_-removebg-preview.png";

const { Header, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathKeyMap = {
    "/homePage": "1",
    "/learning-material": "2",
    "/JobPortal": "3",
    "/Company/Dashbaord": "4",
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
  const [isMobile, setIsMobile] = useState(false);

  //To trigger CSS whenever screen size changes
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width is 768px or smaller
    };
    // Initial check
    updateSize();
    // Add resize event listener
    window.addEventListener("resize", updateSize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
          <Link
            to="/homePage"
            className="menu-link "
            onClick={() => setDrawerVisible(false)}
          >
            Home
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link
            to="/learning-material"
            className="menu-link"
            onClick={() => setDrawerVisible(false)}
          >
            Study Material
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link
            to="/AboutUs"
            className="menu-link"
            onClick={() => setDrawerVisible(false)}
          >
            About
          </Link>
        ),
      },
      {
        key: "8",
        label: (
          <Link
            to="/ContactUs"
            className="menu-link"
            onClick={() => setDrawerVisible(false)}
          >
            Contact
          </Link>
        ),
      },
    ];
  
    if (role !== "company") {
      baseItems.splice(2, 0,  // Insert these items after Study Material
        {
          key: "3",
          label: (
            <Link
              to="/JobPortal"
              className="menu-link"
              onClick={() => setDrawerVisible(false)}
            >
              Find Jobs
            </Link>
          ),
        },
        {
          key: "5",
          label: (
            <Link
              to="/DevelopersHub"
              className="menu-link"
              onClick={() => setDrawerVisible(false)}
            >
              Development
            </Link>
          ),
        }
      );
    }
  
    if (role === "admin") {
      baseItems.push({
        key: "6",
        label: (
          <Link
            to="/Dashboard"
            className="menu-link"
            onClick={() => setDrawerVisible(false)}
          >
            Admin Dashboard
          </Link>
        ),
      });
    } else if (role === "company") {
      baseItems.push({
        key: "4",
        label: (
          <Link
            to="/Company/Dashboard"
            className="menu-link"
            onClick={() => setDrawerVisible(false)}
          >
            Company Dashboard
          </Link>
        ),
      });
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

  return (
    <Layout style={{ margin: 0, padding: "0px" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
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
                background: "linear-gradient( #553CDF, #1a2980)",
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
    </Layout>
  );
};

export default MainLayout;
