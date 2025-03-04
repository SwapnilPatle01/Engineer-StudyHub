import React, { useState } from "react";
import { Modal, Button, Input, Select, Form } from "antd";

const DiscussionModal = ({
  isOpen,
  onClose,
  onSubmit,
  categories = [],
  availableTags = [],
  initialData = {},
}) => {
  const [post, setPost] = useState({
    title: initialData.title || "",
    content: initialData.content || "",
    category: initialData.category || "",
    tags: initialData.tags || [],
  });

  const handleSubmit = () => {
    if (
      !post.title ||
      !post.content ||
      !post.category ||
      post.tags.length === 0
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Create a new post object with the required details
    const newPost = {
      ...post,
      id: Date.now(),
      likes: 0,
      replies: 0,
      createdAt: new Date(),
    };

    onSubmit(newPost);
    onClose();
  };

  const handleEditorChange = (event) => {
    setPost({ ...post, content: event.target.value });
  };

  const handleTagsChange = (value) => {
    setPost({ ...post, tags: value });
  };

  return (
    <Modal
      title={<span style={{ fontSize: "18px" }}>Create New Post</span>}
      visible={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Create Post
        </Button>,
      ]}
      width={600}
    >
      <Form layout="vertical" style={{ margin: 0 }}>
        {/* Post Title */}
        <Form.Item label="Post Title" style={{ marginBottom: 16 }}>
          <Input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Enter post title"
          />
        </Form.Item>

        {/* Post Category */}
        <Form.Item label="Category" style={{ marginBottom: 16 }}>
          <Select
            value={post.category}
            onChange={(value) => setPost({ ...post, category: value })}
            placeholder="Select category"
          >
            {categories.map((category) => (
              <Select.Option
                key={category.name}
                value={category.name}
              ></Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Post Tags */}
        <Form.Item label="Tags" style={{ marginBottom: 16 }}>
          <Select
            mode="tags"
            value={post.tags}
            onChange={handleTagsChange}
            placeholder="Select tags"
          >
            {availableTags.map((tag) => (
              <Select.Option key={tag} value={tag}>
                {tag}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Post Content */}
        <Form.Item label="Post Content" style={{ marginBottom: 12 }}>
          <textarea
            value={post.content}
            onChange={handleEditorChange}
            rows={4}
            style={{ width: "100%", padding: "4px", fontSize: "14px" }}
            placeholder="Write your post content here..."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DiscussionModal;
