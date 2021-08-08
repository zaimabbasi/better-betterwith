import React from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FromTheFounder = (props) => {
    return (
        <div className="from-the-founder">
            <Row>
                <Col md="6">
                    <img className="w-100 mb-4" src="images/woman.jpg" alt="Woman" />
                </Col>

                <Col md="6">
                    <h3>From The Founder:</h3>

                    <p>Before ice cream, my entrepreneurial journey was all about a different dessert.</p>

                    <p>In 2002, I opened Cupcakes, the first ever cupcakes-only bakery, which I co-founded with my best friend Heather White. In less than 10 years, we franchised Cupcakes across Canada and even co-starred in our very own hit reality TV Show called 'The Cupcake Girls'. What an adventure that was! After 3 full Seasons, 45 Episodes, 1 wedding, 2 babies, 1 Gemini-Award for 'Best New Reality Show', and distribution of our Show into 95 countries worldwide, I needed a break... and then this happened.</p>

                    <p>During a typical grocery run, I realized that the ice cream in my cart wasn’t even labeled as ice cream — it was ‘frozen dessert.’ Like you I thought, “What is frozen dessert, and more importantly why is it not ice cream?”</p>

                    <p>This should be the moment where I introduce my unique childhood on Vancouver Island, but we’ll skip that. For now, all you need to know is that my upbringing on a self-sustaining farm instilled a passion and priority for fresh, whole food that I carry to this day. So, on that day in the freezer aisle, I saw an opportunity to make a better ice cream. An ice cream without tons of sugar, or any gums or preservatives. The rest is history.</p>

                    <p>Life really is, BETTERWITH ice cream!</p>

                    <img className="w-25 mt-4 mb-4" src="images/sign.jpg" alt="Sign" />

                    <p>Lori Joyce</p>
                    
                    <p>Founder and CEO</p>
                </Col>
            </Row>
        </div>
    );
}

export default FromTheFounder;