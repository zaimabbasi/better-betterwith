import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NutritionFacts = (props) => {
    return (
        <div className="nutrition-facts text-center">
            <div className="section-inner">
                <h1>And NOT (a lot) of sugar</h1>
                <h3>Full-fat cream is the foundation of our recipe and why our label is lighter than other premium ice cream brands.</h3>
            </div>

            <div className="section-inner">
                <h3>See for yourself:</h3>

                <Row>
                    <Col md="6">
                        <img className="float-md-end mt-4" src="images/nutri1.png" alt="" />
                    </Col>

                    <Col md="6" >
                        <img className="float-md-start mt-4" src="images/nutri2.png" alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default NutritionFacts;