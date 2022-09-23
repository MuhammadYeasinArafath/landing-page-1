import React from 'react';
import "./Last.css";
import Container from 'react-bootstrap/Container';
import img from "../../assets/1.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Last = () => {
    return (
        <>
           <Container className='bg-primary ro'>
            <Row>
                <Col>
                <img src={img} alt="img" id='img'/>
                </Col>
                <Col>
                   <h2 className=' mt-5 pt-5 text-white align-middle'>Still confused where to start,<br />Get our recommendation!</h2>  
                   <p className=' pt-1 text-white'>Don't worry, we have questions for you and the result will direct you to get started developing your skills.</p>
                   <h3 className='btn btn-outline-light'>Get started</h3>
                </Col>
            </Row>
            </Container> 
        </>
    );
};

export default Last;