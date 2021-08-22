import React from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContactCard from "../sub-components/ContactCard";
import RequestForm from "../sub-components/RequestForm";

const Contact = (props) => {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        const getContacts = async () => {
            axios.get("/api/contacts")
                .then(res => {
                    setContacts(res.data);
                })
        }

        getContacts();
    }, []);

    return (
        <div id="contact">
            <div className="section">
                <Container>
                    <div className="section-inner">
                        <div className="text-center">
                            <h1>Contact Us</h1>
                        </div>

                        <Row className="justify-content-center">
                            {
                                contacts.map(contact => {
                                    return (
                                        <Col lg="3" className="mt-3 mb-3" key={contact._id}>
                                            <ContactCard
                                                dept={contact.dept}
                                                name={contact.name}
                                                email={contact.email}
                                            />
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>

                    <hr />
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <div className="text-center">
                            <h1>Are You Betterwith Ice Cream?</h1>
                        </div>

                        <div className="mt-5">
                            <RequestForm />
                        </div>
                    </div>
                </Container>
            </div>
        </div >
    );
};


export default Contact;