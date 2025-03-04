import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Bookmark, Star, Globe, ThumbsUp } from "lucide-react";
import {
  Input,
  Select,
  Button,
  Row,
  Col,
  Space,
  Typography,
  Pagination,
  Tag,
} from "antd";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import InterviewModal from "./InterviewModal";

const { Text } = Typography;

const COLOR_VARIANTS = [
  "bg-gradient-to-r from-pink-500 to-purple-500",
  "bg-gradient-to-r from-blue-500 to-teal-500",
  "bg-gradient-to-r from-green-500 to-emerald-500",
  "bg-gradient-to-r from-orange-500 to-amber-500",
  "bg-gradient-to-r from-indigo-500 to-blue-500",
];

const COMPANIES = [
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Apple",
  "Netflix",
  "Stripe",
  "Uber",
  "Airbnb",
  "Spotify",
];

const DOMAINS = [
  "Software Engineering",
  "Data Science",
  "Product Management",
  "Cloud Computing",
  "Machine Learning",
  "Cybersecurity",
  "Frontend Development",
  "Backend Development",
  "DevOps",
];

const { Title } = Typography;
const { Option } = Select;

const InterviewExperience = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    role: "",
    domain: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const pageSize = 2;

  // Advanced filtering logic
  useEffect(() => {
    let result = posts;

    if (filters.company) {
      result = result.filter((post) =>
        post.company.toLowerCase().includes(filters.company.toLowerCase())
      );
    }
    if (filters.role) {
      result = result.filter((post) =>
        post.role.toLowerCase().includes(filters.role.toLowerCase())
      );
    }
    if (filters.domain) {
      result = result.filter((post) =>
        post.domain.toLowerCase().includes(filters.domain.toLowerCase())
      );
    }

    if (searchTerm) {
      result = result.filter((post) =>
        Object.values(post).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    result.sort((a, b) => b.date - a.date);

    setFilteredPosts(result);
  }, [posts, filters, searchTerm]);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <Title
          level={2}
          style={{
            marginBottom: 0,
            fontSize: "26px",
          }}
        >
          Interview Experience Hub
        </Title>

        <Space
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            marginTop: "8px",
          }}
        >
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={() => setModalVisible(true)}
            size="large"
            style={{
              marginRight: "0",
              width: "100%",
              maxWidth: "300px",
              background: "#553cdf",
            }}
          >
            Add Experience
          </Button>

          <InterviewModal
            isVisible={isModalVisible}
            onClose={() => setModalVisible(false)}
            onSubmit={handleCreatePost}
          />
        </Space>
      </header>
      {/*  */}
      <Row gutter={[16, 16]} justify="start">
        <Col xs={24} sm={12} md={8} lg={8}>
          <Input
            placeholder="Search experiences..."
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "94%", marginLeft: "5px" }}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
          <Select
            placeholder="Select Company"
            value={filters.company}
            onChange={(value) => setFilters({ ...filters, company: value })}
            style={{ width: "94%" }} // Full width within the Col
          >
            <Option value="">All Companies</Option>
            {COMPANIES.map((company) => (
              <Option key={company} value={company}>
                {company}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8}>
          <Select
            placeholder="Select Domain"
            value={filters.domain}
            onChange={(value) => setFilters({ ...filters, domain: value })}
            style={{ width: "94%" }} // Full width within the Col
          >
            <Option value="">All Domains</Option>
            {DOMAINS.map((domain) => (
              <Option key={domain} value={domain}>
                {domain}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>

      <div style={{ padding: "24px" }}>
        <AnimatePresence>
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: "center", color: "#6b7280", padding: "48px" }}
            >
              No experiences found. Be the first to share!
            </motion.div>
          ) : (
            currentPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  marginBottom: "24px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    background: COLOR_VARIANTS[post.id % COLOR_VARIANTS.length],
                  }}
                />
                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#374151",
                        }}
                      >
                        {post.company} - {post.role}
                      </h2>
                      <p style={{ fontSize: "18px", color: "#6b7280" }}>
                        {post.domain}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#374151",
                          lineHeight: "1.5",
                        }}
                      >
                        {post.description}
                      </p>

                      {/* technologies and salary and accept offer */}
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#6b7280",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "16px",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>
                          <strong>Technologies:</strong>{" "}
                          {post.technologies.join(", ")}
                        </span>
                        <span style={{ marginRight: "8px" }}>
                          <strong>Salary:</strong> {post.salary}
                        </span>
                        <Tag
                          color={
                            post.offerStatus === "Accepted"
                              ? "green"
                              : post.offerStatus === "Rejected"
                              ? "red"
                              : "blue"
                          }
                        >
                          {post.offerStatus || "Pending"}
                        </Tag>
                      </div>

                      {/* hard and interview type */}
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#e0f2fe",
                          color: "#0284c7",
                          borderRadius: "9999px",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <Star
                          style={{
                            marginRight: "4px",
                            width: "16px",
                            height: "16px",
                          }}
                        />{" "}
                        {post.difficulty}
                      </span>
                      <span
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#C8E6C9",
                          color: "#2E7D32",
                          borderRadius: "9999px",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <Globe
                          style={{
                            marginRight: "4px",
                            width: "16px",
                            height: "16px",
                            color: "#2E7D32",
                          }}
                        />
                        {post.interviewType}
                      </span>
                    </div>
                  </div>

                  {/* footer link button and date */}
                  <footer className="flex w-full">
                    <Row
                      justify="space-between"
                      align="middle"
                      style={{ width: "100%" }}
                    >
                      {/* Left side: Icons and Actions */}
                      <Col>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "10px",
                          }}
                        >
                          <ThumbsUp
                            style={{
                              fontSize: "12px",
                              color: "#FF6347",
                              marginRight: "5px",
                            }}
                          />
                          <Text style={{ fontSize: "12px", color: "#555" }}>
                            {post.likes} Likes
                          </Text>

                          <div
                            style={{
                              marginLeft: "12px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <MessageCircle
                              style={{
                                fontSize: "12px",
                                color: "#1E90FF",
                                marginRight: "5px",
                              }}
                            />
                            <Text style={{ fontSize: "12px", color: "#555" }}>
                              {post.replies} Replies
                            </Text>
                          </div>

                          <div
                            style={{
                              marginLeft: "12px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Bookmark
                              style={{
                                fontSize: "12px",
                                color: "#32CD32",
                                marginRight: "5px",
                              }}
                            />
                            <Text style={{ fontSize: "12px", color: "#555" }}>
                              Save
                            </Text>
                          </div>
                        </div>
                      </Col>

                      {/* Right side: Posted Date */}
                      <Col>
                        <Text style={{ fontSize: "14px", color: "#888" }}>
                          Posted {new Date(post.date).toLocaleDateString()}
                        </Text>
                      </Col>
                    </Row>
                  </footer>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredPosts.length}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default InterviewExperience;
