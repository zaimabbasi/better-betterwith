import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import YoutubeVideo from "../sub-components/YoutubeVideo";
import NoIngredients from "../sub-components/NoIngredients";
import NutritionFacts from "../sub-components/NutritionFacts";

const Inside = (props) => {
    return (
        <section id="inside">
            <YoutubeVideo src={"https://www.youtube.com/embed/wQklne1hgS8"} />

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <NoIngredients />
                    </div>
                </Container>
            </div>

            <img className="w-100" src="images/icecream.png" alt="Ice Cream" />

            <div className="section">
                <Container>
                    <NutritionFacts />

                    <div className="section-inner text-center">
                        <Button variant="primary" href="/story">Let's Compare Sugar</Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};


export default Inside;