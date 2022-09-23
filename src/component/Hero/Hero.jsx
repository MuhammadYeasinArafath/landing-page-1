import React from 'react';
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../../assets/1.png";


const Hero = () => {
    return (
        <>
        <section className='hero'>
         <Container> 
            <Row>
                <Col>
                   <h2 className=' mt-5 pt-5 text-white align-middle'>Level Up Your Skills With Us</h2>  
                   <p className=' pt-1 text-white'>Explore new skills, deepen exiting passions, and get lost in creativity.</p>
                   <h3 className='btn btn-outline-light'>Join Us </h3>
                </Col>
                <Col>
                <img src={img} alt="img" id='img'/>
                </Col>
            </Row>
            
      </Container>
      </section>
       
       

        </>
    );
};

export default Hero;