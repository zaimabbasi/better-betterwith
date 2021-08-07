import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NoIngredients = (props) => {

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
        <div className="no-ingredients">
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
    );
}

export default NoIngredients;