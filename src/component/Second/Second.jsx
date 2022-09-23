import React from 'react';
import "./Second.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import android from "../../assets/and.jfif";
import content from "../../assets/con.jfif";
import digital from "../../assets/dig.jfif";
import english from "../../assets/english.jfif";
import web from "../../assets/web.jfif";
import uiux from "../../assets/ui.jfif";
import money from "../../assets/money.jfif";
import entrepreneurship from "../../assets/en.jfif";

const Second = () => {
    return (
        <>
       <section className="class">
<Container>
    <p className='mt-5 pt-5'>167271 AVAILABLE CLASSES</p>
    <h1>We care about your hobby and passion,<br />so we made various of course.</h1>
<div className="cards">
    <Card>
      <Card.Img variant="top" src={uiux} />
      <Card.Body>
        <Card.Title>UI/UX Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={web} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={android} />
      <Card.Body>
        <Card.Title>Android Application Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={digital} />
      <Card.Body>
        <Card.Title>Digital Marketing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={content} />
      <Card.Body>
        <Card.Title>Content Writing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={entrepreneurship} />
      <Card.Body>
        <Card.Title>Entrepreneurship</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={english} />
      <Card.Body>
        <Card.Title>English Language</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={money} />
      <Card.Body>
        <Card.Title>Money Management</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    
</div>
</Container>
       </section>
        </>
    );
};

export default Second;