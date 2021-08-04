import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap//Button";


const Story = (props) => {
    return (
        <section id="story">
            <div className="yt-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gBu8-dlkEaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


            <div className="section">
                <Container>
                    <div className="section-inner">
                        <h1>Tradition is BETTERWITH ice cream</h1>

                        <h3>Innovation may be trending in the food industry today, but sometimes it’s best not to mess with perfection.</h3>

                        <h3>Betterwith ice cream is made the Old-World way; full-fat cream, simple ingredients, and an expert process. Real ice cream — like Grandma used to make — should not change. That is our product, and our promise.</h3>

                        <h3>Dig in and indulge!</h3>
                    </div>

                    <Button variant="primary" href="/store">Where to Buy</Button>
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <Row>
                            <Col md="4">
                                <img className="w-100 h-100" src="images/story1.jpg" alt="Story 1" />
                            </Col>

                            <Col md="4">
                                <img className="w-100 h-100" src="images/story2.jpg" alt="Story 1" />
                            </Col>

                            <Col md="4">
                                <img className="w-100 h-100" src="images/story3.jpg" alt="Story 1" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            
            <div className="section">
                <img className="w-50" src="images/made.png" alt="Made" />
            </div>

            <div id="from-the-founder" className="section">
                <Container>
                    <div className="section-inner">
                        <Row>
                            <Col md="6">
                                <img className="mb-4 w-100" src="images/woman.jpg" alt="Woman" />
                            </Col>

                            <Col md="6">
                                <h3>From The Founder</h3>
                                <p>Before ice cream, my entrepreneurial journey was all about a different dessert.</p>
                                <p>In 2002, I opened Cupcakes, the first ever cupcakes-only bakery, which I co-founded with my best friend Heather White. In less than 10 years, we franchised Cupcakes across Canada and even co-starred in our very own hit reality TV Show called 'The Cupcake Girls'. What an adventure that was! After 3 full Seasons, 45 Episodes, 1 wedding, 2 babies, 1 Gemini-Award for 'Best New Reality Show', and distribution of our Show into 95 countries worldwide, I needed a break... and then this happened.</p>
                                <p>During a typical grocery run, I realized that the ice cream in my cart wasn’t even labeled as ice cream — it was ‘frozen dessert.’ Like you I thought, “What is frozen dessert, and more importantly why is it not ice cream?”</p>
                                <p>This should be the moment where I introduce my unique childhood on Vancouver Island, but we’ll skip that. For now, all you need to know is that my upbringing on a self-sustaining farm instilled a passion and priority for fresh, whole food that I carry to this day. So, on that day in the freezer aisle, I saw an opportunity to make a better ice cream. An ice cream without tons of sugar, or any gums or preservatives. The rest is history.</p>
                                <p>Life really is, BETTERWITH ice cream!</p>
                                <img className="mt-4 mb-4 w-25" src="images/sign.jpg" alt="Sign" />
                                <p>Lori Joyce</p>
                                <p>Founder and CEO</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </section>
    );
};


export default Story;