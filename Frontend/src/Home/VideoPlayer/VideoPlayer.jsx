import React, { useState } from "react";
import { Button, Modal, Image } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="video-container">
      {/* Left Side Image */}
      <div className="video-left">
        <Image
          src="https://html.themewant.com/studyhub/assets/images/fun-facts/03.jpg"
          preview={false}
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<PlayCircleOutlined/>}
          size="large"
          onClick={showModal}
          className="zoom-play-button"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Right Side Content */}
      <div className="video-right">
        <h2
          style={{
            color: "rgb(85, 60, 223)",
          }}
        >
          🚀 Discover Engineer StudyHub! 🚀
        </h2>
        <p>
          Get ready to embark on an exciting journey through the world of
          engineering with Engineer StudyHub! Our platform is not just about
          studying; it's about transforming your learning experience!
        </p>
        <p>In this video, you'll uncover:</p>
        <div className="features-list">
          <div
            className="feature-item"
            style={{
              background: "rgba(255, 77, 28, 0.15",
            }}
          >
            📚 Study materials & past questions
          </div>
          <div
            className="feature-item "
            style={{
              background: "rgba(146, 39, 255, 0.15)",
            }}
          >
            🎥 Engaging video lectures
          </div>
          <div
            className="feature-item"
            style={{
              background: "rgba(23, 39, 246, 0.15)",
            }}
          >
            💻 Hands-on projects
          </div>
          <div
            className="feature-item"
            style={{
              background: "rgba(0, 108, 255, 0.15)",
            }}
          >
            🚀 Tailored career guidance
          </div>
        </div>
        <p>
          Don’t miss out! Click play and let Engineer StudyHub guide you to
          academic success and a bright future! 🌟
        </p>
      </div>

      {/* Modal for YouTube Video */}
      <Modal
        title="Video"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width={800}
        style={{ top: "50%", transform: "translateY(-50%)" , transition: "all 0.3s ease-in-out",}}
        bodyStyle={{ padding: 0 }}
      >
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/F7XGddoTxrA"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
