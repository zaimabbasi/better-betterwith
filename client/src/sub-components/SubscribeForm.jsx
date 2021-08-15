import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SubscribeForm = (props) => {
    const [emailValue, setEmailValue] = React.useState("");

    const onEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleSubmit = (e) => {
        const reqBody = {
            email: emailValue
        };

        axios.post("/api/subscribe", reqBody)
            .then(res => {
                console.log(res);
            });

        e.preventDefault();
    }

    return (
        <div className="subscribe-form">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                value={emailValue}
                                onChange={onEmailChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Button variant="secondary" type="submit">Subscribe</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SubscribeForm;