import React, { useState } from "react";
import { Carousel, Card, Pagination } from "antd";
import "./CoursesSection.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CoursesSection = () => {
  const categories = [
    { title: "Engineering Notes", courses: "500+ Topics", icon: "📚" },
    { title: "Past Year Papers (PYQs)", courses: "200+ Papers", icon: "📜" },
    { title: "Syllabus", courses: "50+ Subjects", icon: "📝" },
    { title: "Video Lectures", courses: "300+ Videos", icon: "🎥" },
    { title: "Job Opportunities", courses: "50+ Listings", icon: "📈" },
    { title: "Technical Interviews", courses: "100+ Resources", icon: "💼" },
    { title: "Programming Practice", courses: "200+ Problems", icon: "💻" },
    { title: "Resume Building", courses: "50+ Templates", icon: "📝" },
    { title: "Industry Trends", courses: "40+ Reports", icon: "📈" },
    { title: "Group Discussion Tips", courses: "30+ Tips", icon: "🗣️" },
    { title: "Personality Development", courses: "20+ Workshops", icon: "🌟" },
    { title: "Algorithm Tutorials", courses: "100+ Tutorials", icon: "🧠" },
    { title: "Data Structures", courses: "75+ Concepts", icon: "🗂️" },
    { title: "Mock Tests", courses: "50+ Tests", icon: "📊" },
    { title: "Aptitude Preparation", courses: "90+ Exercises", icon: "🔢" },
    { title: "Coding Challenges", courses: "120+ Challenges", icon: "🖥️" },
    { title: "Scholarship Information", courses: "25+ Resources", icon: "🎓" },
    { title: "Project Reports", courses: "120+ Examples", icon: "📑" },
    { title: "Lab Manuals", courses: "80+ Manuals", icon: "🔬" },
    { title: "Software Development", courses: "150+ Courses", icon: "🖥️" },
    { title: "Competitive Exams", courses: "60+ Guides", icon: "📚" },
    { title: "Internship Guidance", courses: "40+ Guides", icon: "🎓" },
    { title: "Engineering News", courses: "Daily Updates", icon: "📰" },
    { title: "Entrepreneurship", courses: "20+ Guides", icon: "💡" },
    { title: "Exam Preparation Tips", courses: "50+ Tips", icon: "📝" },
    { title: "Time Management Skills", courses: "30+ Resources", icon: "⏳" },
    { title: "Peer-to-Peer Learning", courses: "25+ Forums", icon: "🤝" },
    { title: "Hackathons", courses: "15+ Events", icon: "🏆" },
    { title: "Open Source Contributions", courses: "20+ Projects", icon: "🌍" },
    { title: "Career Counseling", courses: "30+ Sessions", icon: "🎯" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = categories.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const CustomLeftArrow = (props) => (
    <div className="custom-arrow left" onClick={props.onClick}>
      <LeftOutlined />
    </div>
  );

  const CustomRightArrow = (props) => (
    <div className="custom-arrow right" onClick={props.onClick}>
      <RightOutlined />
    </div>
  );

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: itemsPerPage,
    slidesToScroll: itemsPerPage,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="courses-section"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="courses-header">
        <h2
          style={{
            color: "rgb(85, 60, 223)",
          }}
        >
          Explore 2000+ Engineering Resources
        </h2>
        <p>
          Find the study materials and tools you need for academic success and
          career growth
        </p>
      </div>

      <Carousel {...settings}>
        {categories
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((category) => (
            <div key={category.title}>
              <Card
                hoverable
                className="course-card"
                cover={<div className="course-icon">{category.icon}</div>}
              >
                <Meta title={category.title} description={category.courses} />
              </Card>
            </div>
          ))}
      </Carousel>

      {/* Ant Design Pagination component */}
      <Pagination
        className="pagination-container"
        current={currentPage}
        total={totalItems}
        pageSize={itemsPerPage}
        onChange={handlePageChange}
        style={{ marginTop: "40px", textAlign: "center" }}
      />
    </section>
  );
};

export default CoursesSection;
