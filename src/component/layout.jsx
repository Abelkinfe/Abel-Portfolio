import React from 'react'
import aba from './abico.png'
import NavigationBar from './navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './custom.css'
import Content from './content';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import './badge.css';

import { motion } from "framer-motion";
const Layout = () => {
    return (
        <>
       
            
                    {/* <Col sm={4}><img src={aba} className='ico' alt="" /><motion.div drag className=" bgblack badge">
                        ABEL KINFE</motion.div></Col> */}
                    <Col sm={8} ><NavigationBar /></Col>
                
            <Container id='home'>
                <Row>
                    <Col sm={12} className=''>
                        <Content></Content>
                    </Col>

                </Row>
            </Container>
            <Container id='about' className=''>
                <Row>
                    <Col sm={12}>
                        <About></About>
                </Col>

                </Row>
            </Container>
            <Container id='resume'>
                <Row>
                    <Col sm={12} className=''>
                        <Resume></Resume>
                        
                </Col>

                </Row>
            </Container>
            <Container id='contact'>
                <Row>
                    <Col sm={12}>
                        <Contact></Contact>
                        
                </Col>

                </Row>
            </Container>

            


        </>
    )
}

export default Layout