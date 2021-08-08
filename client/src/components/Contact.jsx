import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContactCard from "../sub-components/ContactCard";
import RequestForm from "../sub-components/RequestForm";

const Contact = (props) => {
    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        const getContacts = async () => {
            const response = await fetch("/contacts");
            const data = await response.json();

            setContacts(data);
        }

        getContacts();
    }, []);

    return (
        <section id="contact">
            <div className="section">
                <Container>
                    <div className="section-inner">
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

                        <hr />
                    </div>
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner text-center">
                        <h1>Are You Betterwith Ice Cream</h1>
                    </div>

                    <div className="section-inner">
                        <RequestForm />
                    </div>
                </Container>

            </div>
        </section >
    );
};


export default Contact;