import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import custom components


const Footer = () => {
    return (
        <section id="footer">
            <Container className="mt-2 mb-2">
                <Row>
                    <Col md="6">
                        <div className="subscribe">
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
                                    <Button variant="secondary" type="submit">
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                        </div>        
                    </Col>
                    
                    <Col md="3">
                        <div className="site-links">
                        <a href="/store">Store Locator</a>
                            <a className="link">Store Request</a>
                            <a href="/contact">Contact</a>
                            <a href="/press">Press</a>
                            <a className="link">Privacy Policy</a>
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="contact-info">
                            <div className="address">
                                <p>
                                    Betterwith Foods Inc.
                                    Victoria, BC
                                    Canada V9E 2A8
                                </p>
                            </div>
                            <div className="email">
                                <a href="mailto:info@betterwith.com">
                                    info@betterwith.com
                                </a>
                            </div>
                            <div className="social">
                                <a href="http://facebook.com/betterwithfoods" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="http://instagram.com/betterwith" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="http://twitter.com/betterwithfoods" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="http://youtube.com/channel/UC9NxmNoD0f400ihRRrZWQdA" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>                    
                            </div>
                        </div>
                    </Col>
                </Row>
                
                
                <div className="copyright">
                    <p>© 2021 Betterwith Foods Inc. All Rights Reserved.</p>
                </div>
            </Container>
            
        </section>
    );
};


export default Footer;