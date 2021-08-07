import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CarouselBrands from "../sub-components/CarouselBrands";

const Home = (props) => {
    const [brands, setBrands] = React.useState([]);

    React.useEffect(() => {

        const fetchBrands = async () => {
            const response = await fetch("/brands");
            const data = await response.json();
    
            setBrands(data);
        }

        fetchBrands();
    }, []);

    return (
        <section id="home">
            <img className="w-100" src="/images/hotline.jpg" alt="Hotline" />

            <div id="carousel" className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>As Seen On</h1>
                    </div>

                    <div className="section-inner">
                        <CarouselBrands data={brands} />
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Full of Flavour, not sugar</h1>
                        <h3>Full-fat cream is the foundation of our Old-World recipe and why we have the lowest possible sugar.</h3>
                    </div>

                    <div className="section-inner">
                        <Button variant="primary" href="/story">Let's Compare Sugar</Button>
                    </div>
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <img className="w-100" src="images/stock.png" alt="Stock" />
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Uncompromising</h1>
                        <h3>Only simple ingredients. No gums. No preservatives. And no fillers.</h3>
                    </div>

                    <div className="section-inner">
                        <Button variant="primary" href="/store">Where to Buy</Button>
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h1>Store Locator</h1>
                    </div>

                    <div className="section-inner">
                        <img className="w-100" src="images/map.png" alt="Map" />
                    </div>
                </Container>
            </div>

            <div className="section text-center">
                <Container>
                    <div className="section-inner">
                        <h3>Can’t find our ice cream in your usual grocery store, or any stores near you? Well, fellow Canadians, we want to change that, but we need your help. Click below to request our ice cream in your local store.</h3>
                    </div>
                    
                    <div className="section-inner">
                        <Button variant="primary" href="/request"> Request Us</Button>
                    </div>
                </Container>
            </div>

        </section>
    );
};


export default Home;