import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BrandsData from "../sub-components/BrandsData";

const Home = (props) => {
    return (
        <div id="home">
            <img className="w-100" src="images/hotline.jpg" alt="Hotline" />

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>As Seen On</h1>

                        <Carousel
                            autoPlay={true}
                            interval={5000}
                            showIndicators={false}
                            showArrows={false}
                            showStatus={false}
                            infiniteLoop={true}

                        >
                            {
                                BrandsData.map(brandItem => {
                                    return (
                                        <img
                                            className={"w-50"}
                                            key={brandItem.id}
                                            src={brandItem.imgURL}
                                            alt={brandItem.title}
                                        />
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Full of Flavour, not sugar</h1>
                        
                        <h3>Full-fat cream is the foundation of our Old-World recipe and why we have the lowest possible sugar.</h3>
                        
                        <Button className="mt-4" variant="primary" href="/story">Let's Compare Sugar</Button>
                    </div>
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <img className="w-100" src="images/new_banner.png" alt="Banner" />
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Uncompromising</h1>
                        
                        <h3>Only simple ingredients. No gums. No preservatives. And no fillers.</h3>
                        
                        <Button className="mt-4" variant="primary" href="/store">Where to Buy</Button>
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Store Locator</h1>

                        <img className="w-100" src="images/map.png" alt="Map" />
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h3>Can’t find our ice cream in your usual grocery store, or any stores near you? Well, fellow Canadians, we want to change that, but we need your help. Click below to request our ice cream in your local store.</h3>
                        
                        <Button className="mt-4" variant="primary" href="/request"> Request Us</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;