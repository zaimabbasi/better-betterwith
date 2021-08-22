import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NutritionFacts = (props) => {
    return (
        <div className="nutrition-facts">
            <Row>
                <Col md="6">
                    <img className="float-md-end mt-4" src="images/nutri1.png" alt="" />
                </Col>

                <Col md="6" >
                    <img className="float-md-start mt-4" src="images/nutri2.png" alt="" />
                </Col>
            </Row>
        </div>
    );
}

export default NutritionFacts;