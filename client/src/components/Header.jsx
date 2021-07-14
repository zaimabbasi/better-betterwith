import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


const Header = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Betterwith</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Flavors" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Vanilla</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Strawberry</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Chocolate</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Pista</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Badam</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Khoya</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/inside">Nutrition Facts</Nav.Link>
              <Nav.Link href="/store">Find Store</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;


