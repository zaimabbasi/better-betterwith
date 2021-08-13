import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap//Button";
import FromTheFounder from "../sub-components/FromTheFounder";
import Made from "../sub-components/Made";
import Gallery from "../sub-components/Gallery";
import Tradition from "../sub-components/Tradition";
import YoutubeVideo from "../sub-components/YoutubeVideo";

const Story = (props) => {
    return (
        <div id="story">
            <YoutubeVideo src={"https://www.youtube.com/embed/gBu8-dlkEaY"} />
            
            <div className="section">
                <Container>
                    <div className="section-inner">
                        <Tradition />
                    </div>

                    <div className="section-inner text-center mt-5">
                        <Button variant="primary" href="/store">Where to Buy</Button>
                    </div>

                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <Gallery />
                    </div>
                </Container>
            </div>

            <div className="section" >
                <Container>
                    <div className="section-inner">
                        <Made />
                    </div>
                </Container>
            </div>

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <FromTheFounder />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Story;