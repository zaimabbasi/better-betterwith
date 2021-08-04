import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <section id="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="subscribe mt-4 mb-2">
                            <Row>
                                <Col>
                                    <p>Be the first to receive updates, store promotions and giveaways.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">    
                                            <Form.Control id="email" type="email" placeholder="Email" />            
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md="6">
                                    <Button variant="secondary" type="submit">Subscribe</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    
                    <Col md="3">
                        <div className="site-links mt-4 mb-2">
                            <a className="d-block mt-2" href="/store">Store Locator</a>
                            <a className="d-block mt-2" href="/request">Store Request</a>
                            <a className="d-block mt-2" href="/contact">Contact</a>
                            <a className="d-block mt-2" href="/press">Press</a>
                            <a className="d-block mt-2 link">Privacy Policy</a>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="contact mt-4 mb-2">
                            <p>Betterwith Foods Inc. Victoria, BC Canada V9E 2A8</p>
                            <p>info@betterwith.com</p>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col className="text-center">
                        <div className="social mt-4 mb-2">
                            <a href="http://facebook.com/betterwithfoods" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="http://instagram.com/betterwith" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="http://twitter.com/betterwithfoods" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="http://youtube.com/channel/UC9NxmNoD0f400ihRRrZWQdA" target="_blank" rel="noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>                    
                        </div>
                        <div className="copyright mt-2 mb-2">
                            <p>© {year} Betterwith Foods Inc. All Rights Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


export default Footer;