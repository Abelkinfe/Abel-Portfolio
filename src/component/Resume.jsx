import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, easeInOut } from "framer-motion";
import './Resume.css';

const cardvaraint = {
  ani: {
    scale: [1, 1.1, 1, 1.1],
    transition: { repeat: Infinity, ease: easeInOut, delay: 1 }
  }
};

const Resume = () => {
  return (
    <Container className="resume mgt">
      <h1>Resume</h1>
      <Row>
        {/* Education */}
        <Col sm={4}>
          <motion.div variants={cardvaraint} whileHover="ani" className='mgq'>
            <div className="card blu">
              <div className="card-content">
                <h2 className="card-title">EDUCATION</h2>
                <h6>Bachelor of Science in Computer Engineering</h6>
                <p>HARAMAYA UNIVERSITY - Ethiopia/Harar | 10/2015 - 5/2021</p>
              </div>
            </div>
          </motion.div>
        </Col>

        {/* Videos */}
        <Col sm={4}>
          <video className='video' height="200" autoPlay loop muted playsInline>
            <source src="/abs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className='video' height="200" autoPlay loop muted playsInline>
            <source src="/abs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>

        {/* Skills */}
        <Col sm={4}>
          <motion.div variants={cardvaraint} whileHover="ani" className="mg blu card">
            <div className="card-content">
              <h3>Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript (ES6+)</li>
                <li>Python, Django</li>
                <li>PHP, Laravel</li>
                <li>React Native</li>
                <li>Database Management (SQL, PostgreSQL)</li>
                <li>Version Control (Git)</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
