import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel"
import Row from "react-bootstrap/Row";

const RequestForm = (props) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onAddress1Change = (e) => {
        setAddress1(e.target.value);
    }

    const onAddress2Change = (e) => {
        setAddress2(e.target.value);
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
    }

    const onStateChange = (e) => {
        setState(e.target.value);
    }

    const onPostalCodeChange = (e) => {
        setPostalCode(e.target.value);
    }

    const onCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const onSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        const reqBody = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            postalCode: postalCode,
            country: country,
            subject: subject,
            message: message
        };

        axios.post("/request", reqBody)
        .then(res => {
            console.log(res);
        });
    }

    return (
        <div className="request-form">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="firstName">
                            <FormLabel>First name *</FormLabel>

                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={onFirstNameChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="lastName">
                            <FormLabel>Last name *</FormLabel>

                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={onLastNameChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address *</Form.Label>

                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={onEmailChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="address1">
                            <FormLabel>Address line 1</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                value={address1}
                                onChange={onAddress1Change}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="address2">
                            <FormLabel>Address line 2</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                value={address2}
                                onChange={onAddress2Change}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="city">
                            <FormLabel>City</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter city"
                                value={city}
                                onChange={onCityChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="state">
                            <FormLabel>State / Province</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter state or province"
                                value={state}
                                onChange={onStateChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="postalCode">
                            <FormLabel>Postal code</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter postal code"
                                value={postalCode}
                                onChange={onPostalCodeChange}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="country">
                            <FormLabel>Country</FormLabel>

                            <Form.Control
                                type="text"
                                placeholder="Enter country"
                                value={country}
                                onChange={onCountryChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="subject">
                            <FormLabel>Subject *</FormLabel>

                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter subject"
                                value={subject}
                                onChange={onSubjectChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="message">
                            <FormLabel>Message *</FormLabel>

                            <Form.Control
                            required
                            as="textarea"
                            placeholder="Enter message"
                            value={message}
                            onChange={onMessageChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="secondary" type="submit">Submit</Button>
            </Form>


        </div>
    );
}

export default RequestForm;