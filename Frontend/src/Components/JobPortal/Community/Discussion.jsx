import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Select,
  Tag,
  Typography,
  Space,
  Row,
  Col,
  Pagination,
} from "antd";
import {
  BellOutlined,
  PlusCircleOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import DiscussionModal from "./DiscussionModal";

const { Text, Title } = Typography;
const { Option } = Select;

const Discussion = ({ onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  const [categories] = useState([
    { name: "General Discussion", color: "blue" },
    { name: "Tech Support", color: "green" },
    { name: "Programming", color: "purple" },
    { name: "Random", color: "red" },
  ]);

  const [filters, setFilters] = useState({
    category: "All",
    searchTerm: "",
    sortBy: "latest",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;

  const handleFiltersChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredPosts = posts
    .filter(
      (post) =>
        (filters.category === "All" || post.category === filters.category) &&
        (post.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(filters.searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "most_liked":
          return (b.likes || 0) - (a.likes || 0);
        case "most_replied":
          return (b.replies || 0) - (a.replies || 0);
        default:
          return b.createdAt - a.createdAt;
      }
    });

  // Slice the posts for pagination
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <header style={{ marginBottom: 16 }}>
        <Row
          justify="space-between"
          align="middle"
          gutter={16}
          style={{ padding: "0 16px" }}
        >
          <Col xs={24} sm={12} md={12} lg={8}>
            <Title level={2} style={{ marginBottom: 0 }}>
              Community Forum
            </Title>
          </Col>

          <Col xs={24} sm={12} md={12} lg={16} style={{ textAlign: "right" }}>
            <Space
              direction="horizontal"
              size="middle"
              style={{ justifyContent: "flex-end", width: "100%" }}
            >
              <Button icon={<BellOutlined />} style={{ fontSize: "14px" }}>
                Notifications
              </Button>

              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                style={{ fontSize: "14px", background: "#553cdf" }}
                onClick={showModal}
              >
                Create Post
              </Button>
            </Space>
          </Col>
        </Row>

        {/* Discussion Modal */}
        <DiscussionModal
          isOpen={isModalVisible}
          onClose={handleCloseModal}
          onSubmit={handleCreatePost}
          categories={categories}
        />
      </header>

      {/* content */}

      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        {categories.map((cat) => (
          <Col xs={24} sm={12} md={8} lg={6} key={cat.name}>
            <Card hoverable style={{ width: "100%" }}>
              <Space>
                <Title level={4}>{cat.name}</Title>
              </Space>
              <Badge
                count={
                  filteredPosts.filter((p) => p.category === cat.name).length
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          padding: "24px",
          border: "1px solid #e2e8f0",
        }}
      >
        <Space
          style={{
            marginBottom: 16,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          size="large"
          direction="horizontal"
        >
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#2d3748",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <MessageOutlined style={{ marginRight: "0", color: "#553cdf" }} />
              Community Discussions
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Input
              prefix={<SearchOutlined style={{ fontSize: "16px" }} />}
              placeholder="Search posts..."
              value={filters.searchTerm}
              onChange={(e) =>
                handleFiltersChange("searchTerm", e.target.value)
              }
              style={{
                width: 220,
                borderRadius: "4px",
                border: "2px solid grey",
              }}
            />
            <Select
              value={filters.category}
              onChange={(value) => handleFiltersChange("category", value)}
              style={{
                width: 200,
                borderRadius: "4px",
                border: "2px solid grey",
              }}
            >
              <Option value="All">All Categories</Option>
              {categories.map((cat) => (
                <Option key={cat.name} value={cat.name}>
                  {cat.name}
                </Option>
              ))}
            </Select>
            <Select
              value={filters.sortBy}
              onChange={(value) => handleFiltersChange("sortBy", value)}
              style={{
                width: 200, // Increased width
                borderRadius: "4px",
                border: "2px solid grey",
              }}
            >
              <Option value="latest">Latest</Option>
              <Option value="most_liked">Most Liked</Option>
              <Option value="most_replied">Most Replied</Option>
            </Select>
          </div>
        </Space>

        {/* main card layout */}
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {currentPosts.map((post) => (
            <Card key={post.id}>
              <Space direction="vertical" style={{ width: "100%" }}>
                {/* Author and Category */}
                <Space
                  style={{ width: "100%", justifyContent: "space-between" }}
                >
                  <Space>
                    <Avatar>{post.author}</Avatar>
                    <Text>{post.author}</Text>
                    <Tag
                      color={
                        categories.find((c) => c.name === post.category)?.color
                      }
                    >
                      {post.category}
                    </Tag>
                  </Space>

                  {/* Date on the right */}
                  <div className="text-sm text-gray-500">
                    {post.createdAt.toLocaleDateString()}
                  </div>
                </Space>

                {/* Title and Content */}
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Text strong>{post.title}</Text>
                  <Text>{post.content}</Text>
                </Space>

                {/* Tags and Action Buttons */}
                <Row justify="space-between" align="middle" gutter={[16, 0]}>
                  {/* Tags Section - Left side */}
                  <Col>
                    <Space>
                      {post.tags.map((tag) => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </Col>

                  {/* Action Buttons */}
                  <Col>
                    <Space size="large" align="center">
                      {/* Likes Action */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <HeartOutlined
                          style={{
                            fontSize: "20px",
                            color: "#FF6347",
                            marginRight: "6px",
                          }}
                        />
                        <Text style={{ fontSize: "15px", color: "#555" }}>
                          {post.likes} Likes
                        </Text>
                      </div>

                      {/* Replies Action */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MessageOutlined
                          style={{
                            fontSize: "20px",
                            color: "#1E90FF",
                            marginRight: "5px",
                          }}
                        />
                        <Text style={{ fontSize: "15px", color: "#555" }}>
                          {post.replies} Replies
                        </Text>
                      </div>

                      {/* Share Action */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ShareAltOutlined
                          style={{
                            fontSize: "20px",
                            color: "#32CD32",
                            marginRight: "6px",
                          }}
                        />
                        <Text style={{ fontSize: "15px", color: "#555" }}>
                          Share
                        </Text>
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Space>
            </Card>
          ))}
        </Space>
      </div>
      {/* Pagination */}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredPosts.length}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", marginTop: 16 }}
      />
    </>
  );
};

export default Discussion;
