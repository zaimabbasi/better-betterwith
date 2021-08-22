import React from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gallery = (props) => {
    return (
        <div className="gallery">
            <Row>
                <Col md="4" className="mt-3">
                    <img className="img-thumbnail w-100 h-100" src="images/story1.jpg" alt="Story 1" />
                </Col>

                <Col md="4" className="mt-3">
                    <img className="img-thumbnail w-100 h-100" src="images/story2.jpg" alt="Story 1" />
                </Col>

                <Col md="4" className="mt-3">
                    <img className="img-thumbnail w-100 h-100" src="images/story3.jpg" alt="Story 1" />
                </Col>
            </Row>
        </div>
    );
}

export default Gallery;