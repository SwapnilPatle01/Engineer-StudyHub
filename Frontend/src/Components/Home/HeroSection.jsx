import React from 'react';
import { Row, Col, Typography, Button,  } from 'antd';
import './HeroSection.css'; // custom styling for the hero section
import { Link, } from "react-router-dom";


const { Title, Text } = Typography;

const universities = ['RTMNU', 'Raisoni', 'KDK', 'Palloti', 'And more...'];

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background Image with overlay */}
      <div className="hero-background">
        <Row justify="center" align="middle" className="hero-content" style={{flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
          {/* Main Content */}
          <Col span={20} md={12} style={{width:"100%", height:"auto", margin:"auto"}}>
            <h1 className="hero-title">Quality Notes from the University Toppers</h1>
            <Text className="hero-subtitle">
              Get access to high-quality study materials and notes directly from toppers of prestigious universities like 
              <strong> RTMNU, Raisoni, KDK, Palloti</strong> and more!
            </Text>
            <div className="hero-buttons">
              <Link to="/engineerLib">
              <Button style={{backgroundColor:"#fff",color:"#000", width:"auto"}}>Find your notes</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
