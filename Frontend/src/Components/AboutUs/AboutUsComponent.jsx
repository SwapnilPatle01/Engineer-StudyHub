import React from "react";
import { Button, Empty, Typography, Row, Col, Carousel, Card, Rate, Avatar } from 'antd';
import "./AboutUsComponent.css";
import BookImage from '../../assets/images/books.png';
import HappyImage from "../../assets/images/Happy.png";
import VideoImage from "../../assets/images/videoo.png"
import GirlHeadPhone from "../../assets/images/GirlHeadPhone.png";
import Men from "../../assets/images/men.png";
import icon1 from "../../assets/images/icon1.png";
import { UserOutlined, FileTextOutlined, BookOutlined, ArrowRightOutlined, SolutionOutlined, TeamOutlined, LeftOutlined, RightOutlined, ShareAltOutlined } from '@ant-design/icons';

const feedbackData = [
    {
        id: 1,
        name: 'Emma Elizabeth',
        title: 'Assistant Teacher',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 4,
        feedback: "I can't recommend The Gourmet Haven enough. It's a place for special date in nights, or whenever you're in the mood for a culinary."
    },
    {
        id: 2,
        name: 'Emma Elizabeth',
        title: 'Assistant Teacher',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        rating: 4,
        feedback: "I can't recommend The Gourmet Haven enough. It's a place for special date in nights, or whenever you're in the mood for a culinary."
    },
    {
        id: 3,
        name: 'Emma Elizabeth',
        title: 'Assistant Teacher',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 4,
        feedback: "I can't recommend The Gourmet Haven enough. It's a place for special date in nights, or whenever you're in the mood for a culinary."
    }
];

const instructors = [
    {
        name: 'Emma Elizabeth',
        title: 'Assistant Teacher',
        image: 'https://html.themewant.com/studyhub/assets/images/instructor/01.jpg',
        bgColor: '#ff5e57',

    },
    {
        name: 'Thomas Fred',
        title: 'Assistant Teacher',
        image: 'https://html.themewant.com/studyhub/assets/images/instructor/02.jpg',
        bgColor: '#dfe6e9',
    },
    {
        name: 'Dana White',
        title: 'UI/UX Expert',
        image: 'https://html.themewant.com/studyhub/assets/images/instructor/03.jpg',
        bgColor: '#e0f7fa',
    },
    {
        name: 'Elizabeth Olsen',
        title: 'Assistant Teacher',
        image: 'https://html.themewant.com/studyhub/assets/images/instructor/04.jpg',
        bgColor: '#e8f5e9',
    },
];







function AboutUsComponent() {
    const carouselRef = React.useRef(null);
    const statsData = [
        { icon: <UserOutlined />, value: '65,972', label: 'Students Enrolled' },
        { icon: <FileTextOutlined />, value: '5,321', label: 'Completed Course' },
        { icon: <BookOutlined />, value: '44,239', label: 'Students Learner' },
        { icon: <TeamOutlined />, value: '75,992', label: 'Students Enrolled' },
    ];
    return (
        <div>
            <header className="about-header">
                <div className="container">
                    <h1>About Us</h1>
                </div>
                <div className="header-image">
                    <img src={BookImage} alt="Books and Pencil" />
                </div>
            </header>



            <div className="about-us-container">
                <div className="about-us-content">
                    <div className="left-section">
                        <div className="review-box">
                            <h2>2.4k</h2>
                            <p>Positive Review</p>
                        </div>
                        <div className="images">
                            <img src={HappyImage} alt="Student" className="image-left" />
                            <img src={VideoImage} alt="Student" className="image-right play-button" />
                        </div>
                    </div>
                    <div className="right-section">
                        <p className="tagline">Gateway to Lifelong Learning</p>
                        <h1>Know Studyhub Empowering Learners Worldwide</h1>
                        <p>We are passionate about education and dedicated to providing high-quality learning resources for learners of all backgrounds.</p>
                        <div className="features">
                            <div className="feature-box">
                                <p>Learn with Expert</p>
                                <p>We are passionate about education.</p>
                            </div>
                            <div className="feature-box">
                                <p>Expert Instructors</p>
                                <p>We are passionate about education.</p>
                            </div>
                        </div>
                        <div className="ceo-section">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/William_James_b1842c.jpg" alt="CEO" className="ceo-image" />
                            <div className="ceo-info">
                                <p>William James</p>
                                <p>CEO, Studyhub Online Education</p>
                            </div>
                            <Button type="primary">About Us</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-section">
                <Row gutter={[32, 32]} justify="center">
                    {statsData.map((stat, index) => (
                        <Col key={index} xs={24} sm={12} md={6}>
                            <div className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="testimonials-container">
                <h2>My Students Feedback</h2>
                <p className="description-text">You'll find something to spark your curiosity and enhance</p>

                <Row gutter={[16, 16]} justify="center">
                    {feedbackData.map((item) => (
                        <Col xs={24} sm={12} md={8} key={item.id}>
                            <Card className="testimonial-card">
                                <Rate disabled defaultValue={item.rating} className="rating" />
                                <p>{item.feedback}</p>
                                <div className="user-info">
                                    <Avatar src={item.avatar} size={64} />
                                    <div className="user-details">
                                        <h4>{item.name}</h4>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="studyhub-container">
                <Row justify="center" align="middle" className="studyhub-content">
                    <Col xs={24} md={12} className="studyhub-image-section">
                        <div className="studyhub-image-container">
                            <img
                                src={GirlHeadPhone}
                                alt="Student"
                                className="studyhub-image"
                            />
                            <img
                                src={Men}
                                alt="Student"
                                className="studyhub-image secondary"
                            />
                            <div className="circle-button">
                                <span>ABOUT UNIVERSITY • ABOUT COLLEGE</span>
                                <Button shape="circle" icon="arrow-right" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12} className="studyhub-text-section">
                        <h3>Why Choose Us</h3>
                        <h1>Studyhub Your Path to Excellence & Success</h1>
                        <p>
                            We are passionate about education and dedicated to providing
                            high-quality learning resources for learners of all backgrounds.
                        </p>
                        <Row gutter={[16, 16]} className="features">
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src={icon1}
                                        alt="Expert Instructors"
                                        className="feature-icon"
                                    />
                                    <p>Expert Instructors</p>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src="icon2.png"
                                        alt="Interactive Learning"
                                    />
                                    <p>Interactive Learning</p>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src="icon3.png"
                                        alt="Affordable Learning"
                                    />
                                    <p>Affordable Learning</p>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src="icon4.png"
                                        alt="Career Advance"
                                    />
                                    <p>Career Advance</p>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src="icon5.png"
                                        alt="Course Selection"
                                    />
                                    <p>Course Selection</p>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="feature-box">
                                    <img
                                        src="icon6.png"
                                        alt="Support Community"
                                    />
                                    <p>Support Community</p>
                                </div>
                            </Col>
                        </Row>
                        <Button >
                            View All Course
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="instructor-section">
                <Row justify="space-between" align="middle" className="instructor-header">
                    <Col>
                        <div className="instructor-title">
                            <UserOutlined className="instructor-icon" />
                            <span>Instructor</span>
                        </div>
                    </Col>

                    <Button>
                        View All Course
                    </Button>
                </Row>
                <h1>Our Professional Instructor</h1>
                <p>You'll find something to spark your curiosity and enhance your skills.</p>
                <Row gutter={[16, 16]} justify="center">
                    {instructors.map((instructor, index) => (
                        <Col xs={24} sm={12} md={6} key={index}>
                            <Card
                                hoverable
                                className="instructor-card"
                                style={{ backgroundColor: instructor.bgColor }}
                                cover={<img alt={instructor.name} src={instructor.image} className="instructor-image" />}
                            >
                                <Card.Meta title={instructor.name} description={instructor.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className="skills-banner">
                <img src="https://html.themewant.com/studyhub/assets/images/cta/03.svg"></img>
                <Row align="middle">

                    <Col xs={24} md={12}>
                        <div className="text-content">
                            <h1>Skills Certificate From the Studyhub</h1>
                        </div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className="image-container">
                            <img
                                src="https://html.themewant.com/studyhub/assets/images/about/icon/01.png"
                                alt="Skills Certificate"
                                className="banner-image"
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={6}>
                        <Button >
                            View All Course
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutUsComponent;
