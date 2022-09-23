import React from 'react';
import "./Footer.css";
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <>
        <Container>
            <div className="foot mt-5 pt-5 mb-5 pb-5">
                <div className="1">
<h3>Skill Up</h3>
<p>Lorem ipsum dolor sit amet consectetur <br></br>
    adipisicing elit. Aliquam, architecto.</p>
                </div>
                <div className="t2">
<h4>About Us</h4>

<a href="http://" target="_blank" rel="noopener noreferrer">About Company</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Terms & Condition</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Referral Program</a>
                </div>
                <div className="t3">
<h4>Support</h4>

<a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Help Center</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Sitemap</a>
<a href="http://" target="_blank" rel="noopener noreferrer">Careers</a>
                </div>
            </div>
            </Container>
        </>
    );
};

export default Footer;
