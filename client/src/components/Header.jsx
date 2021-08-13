import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import ImageURLs from "../sub-components/ImageURLs";
import FlavorsData from "../sub-components/FlavorsData";

const Header = (props) => {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div id="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            className="w-100"
                            src={ImageURLs.brandImgURL}
                            alt="Brand Logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav basic-navbar-nav-2" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                drop="end"
                                title="Flavors"
                                onMouseEnter={() => { setOpenMenu(true) }}
                                onMouseLeave={() => { setOpenMenu(false) }}
                                onClick={() => { setOpenMenu(!openMenu) }}
                                show={openMenu}
                            >
                                <Row>
                                    {
                                        FlavorsData.map(flavorItem => {
                                            return (
                                                <Col lg="2" md="4" sm="6" key={flavorItem.id}>
                                                    <NavDropdown.Item className="text-center" href="/flavors">
                                                        <img
                                                            className="w-50 d-block"
                                                            src={flavorItem.bucketImgURL}
                                                            alt={flavorItem.title}
                                                        />
                                                        {flavorItem.title}
                                                    </NavDropdown.Item>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                            </NavDropdown>

                            <Nav.Link href="/inside">What's not Inside</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav-2">
                        <Nav className="ms-auto">
                            <Nav.Link href="/store">Store Locator</Nav.Link>

                            <NavDropdown title="About">
                                <NavDropdown.Item href="/story">Our Story</NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};


export default Header;