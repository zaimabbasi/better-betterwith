import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatsNotInsideData from "./WhatsNotInsideData";

const NoIngredients = (props) => {
    return (
        <div className="no-ingredients">
            <Row className="justify-content-center">
                <Col sm="4">
                    <ul>
                        {
                            WhatsNotInsideData.slice(0, 8).map(item => {
                                return (
                                    <li>{item}</li>
                                );
                            })
                        }
                    </ul>
                </Col>

                <Col sm="4">
                    <ul>
                        {
                            WhatsNotInsideData.slice(8).map(item => {
                                return (
                                    <li>{item}</li>
                                );
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default NoIngredients;