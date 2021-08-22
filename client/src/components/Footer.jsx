import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SubscribeForm from "../sub-components/SubscribeForm";
import SiteLinks from "../sub-components/SiteLinks";
import ContactInfo from "../sub-components/ContactInfo";
import SocialLinks from "../sub-components/SocialLinks";
import CopyrightInfo from "../sub-components/CopyrightInfo";

const Footer = (props) => {
    return (
        <div id="footer" className="section">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="section-inner">
                            <p>Be the first to receive updates, store promotions and giveaways.</p>

                            <SubscribeForm />
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="section-inner">
                            <SiteLinks />
                        </div>
                    </Col>

                    <Col md="3">
                        <div className="section-inner">
                            <ContactInfo />
                        </div>
                    </Col>
                </Row>
            
                <Row>
                    <Col>
                        <div className="section-inner text-center">
                            <SocialLinks />
                        </div>

                        <div className="section-inner text-center">
                            <CopyrightInfo />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;