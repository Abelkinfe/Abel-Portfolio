import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './custom.css';
import { motion } from "framer-motion";

const Content = () => {
  return (
    <Container>
      <Row>
        {/* Introduction */}
        <Col sm={6}>
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: [1.1, 1, 1.1, 1, 1.1, 1] }}
            transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
            className='center'
          >
            Hello there! Abel Kinfe,
          </motion.h1>

          <div className="myalign">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              A passionate and dedicated fullstack developer, with a keen eye for design and a love for creating seamless, user-friendly digital experiences. With a strong background in web development technologies and a creative approach to problem-solving, I specialize in crafting dynamic, responsive, and visually appealing websites and web applications.
            </motion.p>
          </div>
        </Col>

        {/* Video */}
        <Col sm={6}>
          <div className="hg">
            <video width="640" height="600" autoPlay loop muted playsInline>
              <source src="/abule.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
