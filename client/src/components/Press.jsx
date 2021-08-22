import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BrandsData from "../sub-components/BrandsData";

const Press = (props) => {
    return (
        <div id="press" className="section">
            <Container>
                <Row>
                    {
                        BrandsData.map(brandItem => {
                            return (
                                <Col md="4">
                                    <img
                                        className="w-100 mb-4"
                                        src={brandItem.imgURL}
                                        alt={brandItem.title}
                                    />
                                </Col>
                            );
                        })

                    }

                </Row>
            </Container>
        </div>
    );
};


export default Press;