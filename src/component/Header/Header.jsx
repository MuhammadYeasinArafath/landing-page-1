import React from 'react';
import "./Header.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
<Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Skill Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">All Classes</Nav.Link>
            <NavDropdown title="Join Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log In
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Student Projects
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Courses Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
        </>
    );
};

export default Header;