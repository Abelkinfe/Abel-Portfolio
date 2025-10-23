import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import './navbar.css'

const NavigationBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };
 
  return (
   <>
  
  <div className="navbar">
      <ul>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <motion.h6 animate={{ x: -2 }} whileHover={{ scale: 1.1, color: '#FF033E' }}>HOME</motion.h6>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <motion.h6 animate={{ x: -2 }} whileHover={{ scale: 1.1, color: '#FF033E' }}>ABOUT</motion.h6>
          </ScrollLink>
        </li>
        <li>
          {/* <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <motion.h6 animate={{ x: -2 }} whileHover={{ scale: 1.1, color: '#FF033E' }}>PORTFOLIO</motion.h6>
          </ScrollLink> */}
        </li>
        <li>
          <ScrollLink
            to="resume"
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <motion.h6 animate={{ x: -2 }} whileHover={{ scale: 1.1, color: '#FF033E' }}>RESUME</motion.h6>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={scrollToTop}
          >
            <motion.h6 animate={{ x: -2 }} whileHover={{ scale: 1.1, color: '#FF033E' }}>CONTACT</motion.h6>
          </ScrollLink>
        </li>
      </ul>
    </div>
  
  
  
  
  
  </>
    // <Navbar bg="light" expand="lg"
    // //  intial={{ opacity:0 }}
    // //  animate={{ opacity:1 }}
    // //  transition={{ delay:0.2,type:"spring" ,stiffness:120 }}
    
    // >
    //   <Navbar.Brand href="#home"><motion.h6 animate={{ x:-2 }}  whileHover={{ scale:1.1,color:'#FF033E' }}>HOME</motion.h6></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <Nav.Link href=""><motion.h6 animate={{ x:-2 }} whileHover={{ scale:1.1,color:'#FF033E' }}>ABOUT</motion.h6></Nav.Link>
    //       <Nav.Link href="#"><motion.h6 animate={{ x:-2 }} whileHover={{ scale:1.1,color:'#FF033E' }}>PORTFOLIO</motion.h6></Nav.Link>
    //       <Nav.Link href="#resume"><motion.h6 animate={{ x:2 }} whileHover={{ scale:1.1 ,color:'#FF033E'}}>RESUME</motion.h6></Nav.Link>
    //       <Nav.Link href="#contact"><motion.h6 animate={{ x:2 }} whileHover={{ scale:1.1,color:'#FF033E' }}>CONTACT</motion.h6></Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default NavigationBar;




