import React from 'react';
import "./Review.css";
import Container from 'react-bootstrap/Container';
import google from "../../assets/google.png";
import netflix from "../../assets/netflix.png";
import uber from "../../assets/uber.png";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";

const Review = () => {
    return (
        <>
        <Container>
            <h4 className='mt-5 pt-5  text-center'>Trusted by world's largest business</h4>
            <div className="companies text-center">
             <img src={google} alt="img"/> 
             <img src={netflix} alt="img"/>
             <img src={uber} alt="img"/>  
            </div>
            
            <div className="testimonials pb-5 mb-5">
                <article>
                <div className="client_avatar">
                    <img src={AVATAR1} alt="avatar 2" className='rounded rounded-20' />
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
                </article>

                <article>
                <div className="client_avatar">
                    <img src={AVATAR2} alt="avatar 2" className='rounded rounded-20'/>
                </div>
                <h5 className='client_name'>Ernest Archiever</h5>
                    <small className='client_review'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, inventore provident. Quo atque minus eos cumque voluptatibus? Facilis, velit ipsam!
                    </small>
                </article>
            </div>
        </Container>
        </>
    );
};

export default Review;