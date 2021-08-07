import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import DropdownItemFlavor from "../sub-components/DropdownItemFlavor";


const Header = (props) => {

    const [flavors, setFlavors] = React.useState([]);
    const [openMenu, setOpenMenu] = React.useState(false);

    React.useEffect(() => {
        const fetchFlavors = async () => {
            const response = await fetch("/flavors");
            const data = await response.json();

            setFlavors(data);
        }

        fetchFlavors();
    }, []);

    return (
        <section id="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="w-100" src="data:image/png;base64,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cmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDplNzI4NmQ3YS0zMzc0LTRhYjktOThiZi01NmY0ZjA4ZTlhZTAiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM4ZGZlMDgtYzY1My00YjlmLWJkMDMtOTMxODViYzg1ZmVlIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2Y1MWExZDgtMWYxNS00M2FiLTg1NzAtNjA2Nzk3MWRiY2Y3IgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MjgzMTAzMDE5MDU0NTEiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTUwMjY3MDYtNDEzNS00MjMyLThmM2UtZGRiMDRmMWNkN2NlIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iKzA1OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PuDnj24AAAELUExURQEEAP///6WDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKaWDKa2OPLGSRKeGLcevdtXBlbugW6mJM6aFLKqJNMSrb8iyermdVqeFLb+lZLKUR8q0fb2jYOzhy7ebU9fFnK6PPrOWStG9jauKNtK+kMWtcqeGLq+QQMCmZ93NqMy2gfLp2cauc9G9ju7jz/bt4vbu4uPVt97Oq/Pq2/Dl09jGne/k0bqeWNO/ktnIoOrdxfbt4d3NqMevduDQr7SXTOvfyLCSQubYvPfu48evdaWDKa+RQePVt/jw5ujbwrqeWPPp2t7Oq+7izqqKNbWYTcmzfL+lZNTAk////7iqEnQAAAABdFJOUwBA5thmAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UIBwQZAcz0YrsAAAeZSURBVHja3Zx9b6JMEMDJfAOMrdTWNr5cz2pRoi1CWi0JNZJcMJfm8ft/lQerwMwyC+vdtSDz5+6y7OwPZmdnFjQNJKKxAsWi3jJue0JTlcZFgy1WS1aXc4164SnzpuXeUXEakquNIjlepNAybgvwjzmrTJk4KYwKYh0I5UVaQ1IIqlOR6UE6yn3nYExsTvyLUZ8hb64LxB6DYstImgd2LX4IRK7jiWirttTgjtds0BY1A5hukbRp3eRYvDJI+TW6wr86ju4dFS7iqTBW20JZxvpdosImZdfy0R2NPbuXUCLeevlDoAfNsEDm8YCvw2L5eWA3dIubDmLdZqotNbiRNXHeHoZEMxgFqNomVb+c+CodF4PNXAGvqPCjFbN7K9bPT55NVDijk3+FUL3ks4vk917H+rGLxJq18Mo4tnDdFYaUKoJfAxjiK3bxLSvELgy3DfIQ1oZdpNk7doAW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" />
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
                                        flavors.map(item => {
                                            return (
                                                <Col lg="2" md="4" sm="6">
                                                    <DropdownItemFlavor
                                                        key={item._id}
                                                        name={item.name}
                                                        img={item.img}
                                                        alt={item.name}
                                                    />
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

        </section>
    );
};


export default Header;