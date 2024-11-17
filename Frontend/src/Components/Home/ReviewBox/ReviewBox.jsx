import React from "react";
import { Carousel, Card, Row, Col } from "antd";
import "./ReviewSlider.css";

const reviews = [
  {
    name: "John Doe",
    review: "This platform is a game changer for engineering students!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "I found the study materials incredibly helpful.",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    review: "Great resource for exam preparation. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    review: "The video lectures are excellent and very engaging.",
    rating: 4,
  },
  {
    name: "Chris Evans",
    review: "The notes provided are very clear and concise.",
    rating: 5,
  },
  {
    name: "Scarlett Johansson",
    review: "Highly recommend this site to every engineering student.",
    rating: 4,
  },
  {
    name: "Tom Holland",
    review: "I improved my grades significantly thanks to this platform.",
    rating: 5,
  },
];

const ReviewSlider = () => {
  const renderReviews = (startIndex) => {
    return (
      <Row gutter={[16, 16]}>
        {reviews.slice(startIndex, startIndex + 3).map((review, index) => (
          <Col key={index} span={8}>
            <Card
              className="review-card"
              hoverable
              style={{
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#f0f2f5",
                transition: "transform 0.2s",
              }}
            >
              <p className="review-name">{review.name}</p>
              <p className="review-text">{review.review}</p>
              <p className="review-rating">Rating: {review.rating} ⭐</p>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const totalReviews = reviews.length;
  const slidesToShow = 3;

  return (
    <div className="review-slider">
      <h2 className="slider-title">What Our Users Say</h2>
      <Carousel autoplay effect="fade">
        {Array.from(
          { length: Math.ceil(totalReviews / slidesToShow) },
          (_, i) => (
            <div key={i}>{renderReviews(i * slidesToShow)}</div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
