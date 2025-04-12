import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout, Card, Button, Row, Col, Pagination, message } from "antd";
import { CopyOutlined, LinkOutlined, HomeOutlined } from "@ant-design/icons";
import Sidebar from "../Sidebar/Sidebar";
import categories from "../../../assets/data/categoryData";

const { Content } = Layout;

const DeveloperDetailPage = () => {
  const { categoryKey, itemKey } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Added this effect to reset page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [categoryKey]);

  const category = React.useMemo(() => categories[categoryKey], [categoryKey]);
  const selectedItem = React.useMemo(
    () => (itemKey ? category?.items.find(item => item.key === itemKey) : null),
    [category, itemKey]
  );

  const handleCopy = React.useCallback((item) => {
    navigator.clipboard.writeText(item.link);
    message.success("Copied successfully");
  }, []);

  const handleView = React.useCallback((link) => {
    window.open(link, "_blank");
  }, []);

  const handlePageChange = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const paginatedItems = React.useMemo(() => {
    if (!category) return [];
    if (selectedItem) return [selectedItem];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, category.items.length);
    return category.items.slice(startIndex, endIndex);
  }, [selectedItem, currentPage, category, itemsPerPage]);


  if (!category) {
    return (
      <div style={{ padding: "24px", fontSize: "14px" }}>
        <h1>Category Not Found</h1>
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Content style={{ padding: "20px", margin: 0, minHeight: 280, background: "#fff" }}>
          {/* Navigation breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", fontSize: "16px", color: "#666" }}>
            <Link to="/DevelopersHub" style={{ display: "flex", alignItems: "center", color: "#553cdf", textDecoration: "none" }}>
              <HomeOutlined style={{ marginRight: "8px" }} /> Home
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link to={`/resources/${categoryKey}`} style={{ color: "#553cdf", textDecoration: "none" }}>
              {category.title}
            </Link>
            {selectedItem && (
              <>
                <span style={{ margin: "0 8px" }}>/</span>
                <span>{selectedItem.name}</span>
              </>
            )}
          </div>

          <h1 style={{ fontSize: "24px", display: "flex", alignItems: "center", color: "#553cdf" }}>
            {selectedItem ? selectedItem.name : category.title}
          </h1>
          <Row gutter={[16, 22]}>
            {paginatedItems.map((item) => (  
              <Col xs={24} sm={12} md={8} key={item.key}>
                <Card
                  title={item.name}
                  bordered={false}
                  className="card-hover-effect"
                  headStyle={{
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "500",
                    paddingTop: "22px",
                  }}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "16px",
                    border: "1px solid #F8F9FF",
                    borderRadius: "14px",
                    background: "#F8F9FF",
                    flex: 1,
                    minHeight: "300px"
                  }}
                  bodyStyle={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    
                  }}
                >
                  <p style={{ 
                    lineHeight: "1.5", 
                    fontSize: "16px", 
                    marginTop: "0", 
                    marginBottom: "auto", 
                    color: "#737477" 
                  }}>
                    {item.description}
                  </p>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    marginTop: "auto"
                  }}>
                    <Button
                      icon={<CopyOutlined />}
                      onClick={handleCopy.bind(null, item)}
                      style={{
                        borderColor: "#553cdf",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-around",
                        width: "120px",
                      }}
                    >
                      Copy Link
                    </Button>
                    <Button
                      onClick={handleView.bind(null, item.link)}
                      icon={<LinkOutlined />}
                      style={{
                        backgroundColor: "#553cdf",
                        color: "white",
                        borderColor: "#553cdf",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-around",
                        width: "120px",
                      }}
                    >
                      Visit site
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          {!selectedItem && (
            <div style={{ marginTop: "26px", display: "flex", justifyContent: "center" }}>
              <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={category.items.length}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeveloperDetailPage;
