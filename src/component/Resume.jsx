
import React from 'react';
import './Resume.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { easeInOut, motion } from "framer-motion"
import abs from './abs.mp4'
const cardvaraint={
  ani:{
    scale:[1,1.1,1,1.1],
    transition:{
      repeat:Infinity,ease:easeInOut,delay:1
    }

  }
}


const Resume = () => {
  return (

    <>

      <Container className="resume mgt">
      <h1>Resume</h1>
        <Row>
          <Col sm={4}>
          
            <motion.div variants={cardvaraint}  whileHover="ani"  className='mgq'>
             
              <div className="card blu">
              <div className="card-content">
                <h2 className="card-title">EDUCATION</h2>
                <p className="card-text">
                <h6>Bachelor of Science in Computer Engineering</h6>
                <p>HARAMAYA UNIVERSITY - ethiopia/harar | 10/2015 - 5/2021</p>
               
                </p>
              </div>
            </div>

              {/* <section className="">
                <h3>Education</h3>
                <div className="">
                  <h4>Bachelor of Science in Computer Engineering</h4>
                  <p>HARAMAYA UNIVERSITY - ethiopia/harar | 10/2015 - 5/2021</p>
                </div>
              </section> */}

              {/* <section className="">
               
                <ul>
                  <li>HTML, CSS, JavaScript (ES6+)</li>
                  <li>React.js, php, laravel</li>
                  <li>Database Management (SQL, MongoDB)</li>
                  <li>Version Control (Git)</li>
                  <li>Responsive Web Design</li>
                </ul>
              </section> */}
            </motion.div>
          </Col>


          
          <Col sm={4}> <video className='video' height="200" autoPlay loop muted playsInline>
        <source src={abs} type="video/mp4" />
       
      </video>
      <video className='video' height="200" autoPlay loop muted playsInline>
        <source src={abs} type="video/mp4" />
       
      </video>
          </Col>

            
          


          <Col sm={4}>
          
            <motion.div variants={cardvaraint}  whileHover="ani"  className=" mg blu card">
              <div className="card-content">
                <h2 className="card-title"><h3>Skills</h3></h2>
                <p className="card-text">
                <ul>
                    <li>HTML, CSS, JavaScript (ES6+)</li>
                    <li>python,django</li>
                    <li> php, laravel</li>
                    <li>React-native</li>
                  <li>Database Management (SQL,postgress )</li>
                  <li>Version Control (Git)</li>
                  <li>Responsive Web Design</li>
                </ul>
                </p>
              </div>
            </motion.div>

          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Resume;