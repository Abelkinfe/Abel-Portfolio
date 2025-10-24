import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './custom.css'
import Card from 'react-bootstrap/Card';
import abb from './abb.png'

import ReactTyped from "react-typed-component";
import { motion } from "framer-motion"
import Bounce from './bounce'
import abule from './abel.mp4'

const Content = () => {
  return (
    <>
     <Container>

      <Row>
        {/* introduction part */}
        <Col sm={6} className=' ' >
             {/* <Bounce></Bounce> */}
             {/* <svg width="400" height="200">
      <path
        d="M40,100 Q150,150 250,50"
        fill="transparent"
        stroke="red"
        strokeWidth="3"
      />
    </svg> */}
          <motion.h1
        initial={{ opacity:1 }}
        animate={{ opacity:1 ,scale:[1.1,1,1.1,1,1.1,1] }}
        transition={{ delay:0.5,duration:1.5 ,repeat:Infinity}}
         className='center'>Hello there! Abel kinfe,</motion.h1>

          <div className="myalign">   
      <motion.p 
       initial={{ opacity:0  }}
      animate={{ opacity:1,}} 
      transition={{ delay:1.5,duration:1.5 }}
      > a passionate and dedicated fullstack developer,with a keen eye for design and a love for creating seamless,
     user-friendly digital experiences. With a strong background in web development technologies and a creative approach to problem-solving, 
     I specialize in crafting dynamic, responsive, and visually appealing websites and web applications
     </motion.p>  
       
     </div>
        {/* <p className='blocktext paragraph '>.</p> */}


        </Col>
        {/* photo part */}
        
        

        <Col sm={6}>
        <div className=" hg">
          {/* <img src={abb} className='h' alt="" /> */}
       <video width="640" height="600" autoPlay loop muted playsInline>
  <source src={`${import.meta.env.BASE_URL}abel.mp4`} type="video/mp4" />
</video>
           
        </div>

        </Col>
      </Row>
      </Container>
    
    </>
  )
}

export default Content