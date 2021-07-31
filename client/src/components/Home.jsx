import React from "react";
import Container from "react-bootstrap/Container";
import CarouselBrands from "../sub-components/CarouselBrands";
import Button from "react-bootstrap/Button";


const Home = (props) => {
    return (
        <section id="home">
            <div>
                <img className="w-100" src="/images/hotline-betterwith.jpg" alt="" />
            </div>

            <Container>
                <div className="content mt-4 mb-2">
                    <div className="content-inner content-top">
                        <h1>As Seen On</h1>
                    </div>
                    
                    <CarouselBrands />
                </div>

                <div className="content mt-4 mb-2">
                    <div className="content-inner">
                        <h1>Full of Flavour, not sugar</h1>
                        <h3>Full-fat cream is the foundation of our Old-World recipe and why we have the lowest possible sugar.</h3>
                    </div>

                    <Button variant="primary" href="/story">Let's Compare Sugar</Button>
                </div>
                
                <div className="content mt-4 mb-2">
                    <img className="w-100" src="images/stock-betterwith.png" alt="Betterwith Stock" />
                </div>

                <div className="content mt-4 mb-2">
                    <div className="content-inner">
                        <h1>Uncompromising</h1>
                        <h3>Only simple ingredients. No gums. No preservatives. And no fillers.</h3>
                    </div>
                    
                    <Button variant="primary" href="/store">Where to Buy</Button>
                </div>

                <div className="content mt-4 mb-2">
                    <div className="content-inner">
                        <h1>Store Locator</h1>
                    </div>
                    
                    <img className="w-100" src="images/map-dummy.png" alt="Betterwith Stock" />    
                </div>
                
                <div className="content mt-4 mb-4">
                    <div className="content-inner">
                        <h3>Can’t find our ice cream in your usual grocery store, or any stores near you? Well, fellow Canadians, we want to change that, but we need your help. Click below to request our ice cream in your local store.</h3>
                    </div>

                    <Button variant="primary" href="/request">Request Us</Button>    
                </div>
            </Container>
        </section>
    );
};


export default Home;