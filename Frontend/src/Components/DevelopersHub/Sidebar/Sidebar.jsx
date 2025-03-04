import React from "react";
import { Layout, Menu, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import menuData from "../../../assets/data/menuData";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sider
        width={285}
        style={{
          height: "100vh",
        }}
      >
        {/* Menu Container */}
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            height: "100%",
            borderRight: 0,
            backgroundColor: "#fff",
            padding: "16px 0px",
            fontSize: "16px",
          }}
        >
          {/* Search Bar */}
          <div style={{ marginBottom: "16px", marginLeft: "6px" }}>
            <Input
              placeholder="Quick search..."
              prefix={
                <SearchOutlined
                  style={{
                    fontSize: "18px",
                    color: "grey",
                  }}
                />
              }
              allowClear
              style={{
                width: "98%",
                height: "40px",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "6px",
                borderRadius: "8px",
                background: "#F8F9FF",
              }}
            />
          </div>

          {/* Menu Items */}
          <Menu
            mode="inline"
            style={{
              fontFamily: "Poppins, sans-serif",
              maxHeight: "calc(100vh - 80px)",
              overflowY: "auto",
            }}
          >
            {menuData.map((menu) => (
              <SubMenu
                key={menu.key}
                title={menu.title}
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {menu.items.map((item, index) => (
                  <Menu.Item
                    key={`${menu.key}-${index}`}
                    style={{
                      fontSize: "14px",
                      padding: "8px 16px",
                      background: "#f9f8ff",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <Link
                      // to={`/resources/${item.key}`}
                      style={{ textDecoration: "none" }}
                    >
                      {item}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
