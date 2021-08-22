import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import YoutubeVideo from "../sub-components/YoutubeVideo";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FlavorsData from "../sub-components/FlavorsData";

const Flavors = (props) => {
    return (
        <div id="flavors">
            <YoutubeVideo src={"https://www.youtube.com/embed/u0WV5bPSRf8"} />

            <div className="section">
                <Container>
                    {
                        FlavorsData.map((flavorItem, index) => {
                            return (
                                <div className="section-inner" key={flavorItem.id}>
                                    <Row>
                                        <Col md="6">
                                            <div className="section-inner text-center">
                                                <Carousel
                                                    autoPlay={false}
                                                    interval={5000}
                                                    showIndicators={false}
                                                    showArrows={false}
                                                    showStatus={false}
                                                    infiniteLoop={true}

                                                >
                                                    <img
                                                        className={"w-50"}
                                                        src={flavorItem.gifImgURL}
                                                        alt={flavorItem.title}
                                                    />

                                                    <img
                                                        className={"w-50"}
                                                        src={flavorItem.bucketImgURL}
                                                        alt={flavorItem.title}
                                                    />

                                                    <img
                                                        className={"w-50"}
                                                        src="images/nutri1.png"
                                                        alt={flavorItem.title}
                                                    />
                                                </Carousel>
                                            </div>
                                        </Col>

                                        <Col md="6">
                                            <div className="section-inner">
                                                <img src={flavorItem.headingImgURL} alt={flavorItem.title} />
                                            </div>

                                            <div className="section-inner">
                                                <h3>{flavorItem.description}</h3>
                                            </div>

                                            <div id="contains" className="section-inner">
                                                <ul>
                                                    {
                                                        flavorItem.keyPoints.map(keyPoint => {
                                                            return (
                                                                <li key={flavorItem.id}>{keyPoint}</li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>

                                            <div className="section-inner">
                                                <p>Ingredients: {flavorItem.ingredients}</p>
                                            </div>

                                            <div className="section-inner">
                                                <p>Contains: {flavorItem.contains}</p>
                                            </div>

                                            <div className="section-inner">
                                                <p>{flavorItem.note}</p>
                                            </div>

                                            <div className="section-inner">
                                                <img className="w-25 mt-3" src="images/dairy.jpg" alt="Dairy" />
                                            </div>

                                            <div className="section-inner mt-5">
                                                <Button variant="primary" href="/store">Where to Buy</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    {
                                        index < FlavorsData.length - 1 &&
                                        <hr />
                                    }
                                    
                                </div>
                            );
                        })
                    }


                </Container>
            </div>
        </div>
    );
};


export default Flavors;