import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import YoutubeVideo from "../sub-components/YoutubeVideo";
import NoIngredients from "../sub-components/NoIngredients";
import NutritionFacts from "../sub-components/NutritionFacts";

const Inside = (props) => {
    return (
        <div id="inside">
            <YoutubeVideo src={"https://www.youtube.com/embed/wQklne1hgS8"} />

            <div className="section">
                <Container>
                    <div className="section-inner">
                        <NoIngredients />
                    </div>
                </Container>
            </div>

            <img className="w-100" src="images/icecream.png" alt="Ice Cream" />

            <div className="section text-center ">
                <Container>
                    <div className="section-inner">
                        <h1>And NOT (a lot) of sugar</h1>

                        <h3>Full-fat cream is the foundation of our recipe and why our label is lighter than other premium ice cream brands.</h3>

                        <h3>See for yourself:</h3>

                        <NutritionFacts />

                        <Button className="mt-5" variant="primary" href="/story">Let's Compare Sugar</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};


export default Inside;