
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'
import { motion } from "framer-motion"
const pvar={
  ani:{
    x:[30,0],
    color:'#FF0000',
    transition:{
      x:{repeat:Infinity}
    }

  }
}

const Contact = () => {
  return (
    <>
     <Container  className='mgt'>
    <Row>
        <Col sm={12}>
        <div className="align">
      <motion.h2  variants={pvar}  animate="ani" >Contact Me</motion.h2>
      <motion.p  animate={{fontSize:50,  color:'#006400'}}>If you have any questions or would like to connect, feel free to reach out through the following channels:</motion.p>
      <ul className="contact-list">
        <li>location:ADAMA/ETHIOPIA</li>
        {/* <li>Email: <a href="mailto:your.email@example.com">abelkinfe00@gmail.com</a></li> */}
        {/* <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></li> */}
        <li>GitHub: <a href="https://github.com/yourusername">github.com/Abelkinfe</a></li>
        {/* <li>Call:+251943338781</li>
        <li>Telegram:@bela6</li> */}
        {/* Add more contact methods as needed */}
      </ul>
    </div>
    </Col>
    </Row>
</Container>

    </>
  );
};

export default Contact;