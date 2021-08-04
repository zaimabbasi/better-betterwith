import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Inside = (props) => {

    const [excludedIngredients, setExcludedIngredients] = React.useState([]);


    React.useEffect(() => {
        const fetchExcludedIngredients = async () => {
            const response = await fetch("/excluded-ingredients");
            const data = await response.json();

            setExcludedIngredients(data);
        }

        fetchExcludedIngredients();
    }, []);


    return (
        <section id="inside">
            <div className="yt-video">
                <iframe allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/wQklne1hgS8?autoplay=1&amp;mute=0&amp;controls=0&amp;origin=http%3A%2F%2Fbetterwith.info&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2" width="100%" height="100%"></iframe>
            </div>

            <div id="ingredient" className="section">
                <Container>
                    <div className="section-inner">
                        <Row className="justify-content-center">
                            <Col sm="4">
                                <ul>
                                    {
                                        excludedIngredients.slice(0, 8).map(item => {
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
                                        excludedIngredients.slice(8).map(item => {
                                            return (
                                                <li>{item}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div>
                <img className="w-100" src="images/icecream.png" alt="Ice Cream" />
            </div>

            <div id="comparison" className="section">
                <Container>
                    <div className="section-inner">
                        <h1>And NOT (a lot) of sugar</h1>
                        <h3>Full-fat cream is the foundation of our recipe and why our label is lighter than other premium ice cream brands.</h3>
                    </div>


                    <div className="section-inner">
                        <h3>See for yourself:</h3>

                        <Row>
                            <Col md="6">
                                <img className="mt-4 mb-4" src="images/nutri1.png" alt="" />
                            </Col>

                            <Col md="6">
                                <img className="mt-4 mb-4" src="images/nutri2.png" alt="" />
                            </Col>
                        </Row>
                    </div>

                    <div className="section-inner">
                        <Button variant="primary" href="/story">Let's Compare Sugar</Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};


export default Inside;