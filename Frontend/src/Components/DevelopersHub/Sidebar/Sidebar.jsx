import React, { useState } from "react";
import { Layout, Menu, Input, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import categories from "../../../assets/data/categoryData";
import { Link, useNavigate } from "react-router-dom";
import { debounce } from 'lodash';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = React.useCallback((categoryKey, itemKey) => {
    if (!categoryKey) return;
    
    setLoading(true);
    const newPath = itemKey 
      ? `/resources/${categoryKey}/${itemKey}`
      : `/resources/${categoryKey}`;
    
    setSelectedItem(itemKey ? { categoryKey, itemKey } : null);
    navigate(newPath);
    // Remove loading after a minimal delay
    requestAnimationFrame(() => setLoading(false));
  }, [navigate]);

  const handleSearch = React.useCallback(
    debounce((e) => {
      const value = e.target.value;
      setSelectedItem(null);
      setSearchTerm(value);
    }, 300),
    [setSelectedItem, setSearchTerm]
  );

  const filteredCategories = React.useMemo(() => {
      return Object.entries(categories)
        .map(([key, category]) => ({
          ...category,
          items: category.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        }))
        .filter(category => 
          category.items.length > 0 || 
          category.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

  return (
    <div className="sidebar">
      <Sider width={285} style={{ height: "100vh", position: "relative" }}>
        {loading && (
          <div style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}>
            <Spin />
          </div>
        )}
        
        <div style={{ padding: "16px", backgroundColor: "#fff", height: "100%" }}>
          <Input
            placeholder="Quick search..."
            prefix={<SearchOutlined style={{ fontSize: "18px", color: "grey" }} />}
            allowClear
            onChange={handleSearch}
            value={searchTerm}
            style={{
              width: "100%",
              height: "40px",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "6px",
              borderRadius: "8px",
              background: "#F8F9FF",
              marginBottom: "16px"
            }}
          />

          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
            selectedKeys={selectedItem ? [`${selectedItem.categoryKey}-${selectedItem.itemKey}`] : []}
            style={{
              fontFamily: "Poppins, sans-serif",
              maxHeight: "calc(100vh - 80px)",
              overflowY: "auto",
              border: "none",
              backgroundColor: "#fff"
            }}
            virtual
          >
            {filteredCategories.map((category) => (
              <SubMenu
                key={category.key}
                title={
                  <Link
                    to={`/resources/${category.key}`}
                    onClick={() => handleNavigation(category.key)}
                  >
                    {category.title}
                  </Link>
                }
              >
                {category.items.map((item) => (
                  <Menu.Item
                    key={`${category.key}-${item.key}`}
                    onClick={() => handleNavigation(category.key, item.key)}
                  >
                    <Link to={`/resources/${category.key}/${item.key}`}>
                      {item.name}
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
