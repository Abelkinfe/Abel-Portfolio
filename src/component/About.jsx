import React from 'react';
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion"

const paravariant={
  ani:{
    x:[150,-100],
    y:[0,150],
    transition:{
      x:{
        repeat:Infinity,
        duration:3,delay:3,
      },
      y:{
        repeat:Infinity,
        duration:1.5
      }

    }
  }
}
const birdvariant={
  ani:{ color:'#FF033E',
    x:[-100,150],
    y:[0,100],
    transition:{
      x:{
        repeat:Infinity,
        duration:1.5
      },
      y:{
        repeat:Infinity,
        duration:1.5
      }

    }
  }


}


  

const About = () => {
  


  return (
    <>
    <Container >
    <Row>
        <Col sm={6}>
        <motion.div variants={birdvariant} animate="ani" className="bird"  >


        </motion.div>
        <motion.div variants={paravariant} animate="ani" className="bird"  >


        </motion.div>
        
       
        </Col>
        

    
        <Col sm={6}>

    <div className="about" >
      <h1>About Me</h1>
      <ul>
      
        <li><p>
         I'm  ABEL KINFE, a web developer with a strong
        foundation in front-end and back-end technologies. I enjoy creating
        responsive, user-friendly websites and web applications.
      </p></li>
        <li>
        <p>
        With a background in computer engineering, I have
        hands-on experience in technologies like HTML, CSS, JavaScript, React,php,
        laravel, and more. I am constantly learning and exploring new
        technologies to enhance my skills and stay up-to-date with the latest
        trends in the web development world. </p>
        </li>
        <li><p>
        Let's collaborate and build something amazing together! Feel free to
        check out my projects and get in touch if you have any inquiries or
        opportunities.
      </p></li>
      </ul>
      
      
     
      
    </div>
    </Col>
    </Row>
</Container>
    </>
  );
};

export default About;