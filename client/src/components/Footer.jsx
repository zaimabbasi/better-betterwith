import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import custom components


const Footer = () => {
    return (
        <section id="footer">
            <Container className="mt-2 mb-2">
            <Row className="justify-content-lg-center">
                <Col xs lg="2">
                1 of 3
                </Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                3 of 3
                </Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                3 of 3
                </Col>
            </Row>
            </Container>
            
        </section>
    );
};


export default Footer;