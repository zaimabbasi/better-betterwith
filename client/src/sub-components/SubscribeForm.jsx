import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SubscribeForm = (props) => {
    return (
        <div className="subscribe-form">
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
    );
}

export default SubscribeForm;