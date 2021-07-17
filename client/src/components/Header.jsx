import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
// import custom components
import DropdownItemFlavor from "./DropdownItemFlavor";


const Header = () => {

  const [flavors, setFlavors] = React.useState([]);
   
    React.useEffect( () => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const response = await fetch("http://localhost:5000");
        const items = await response.json();
        
        setFlavors(items);
        console.log(flavors);
    };



    return (
      <section id="header">
        <Navbar expand="lg">
          <Container className="mt-2 mb-2">

            <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav basic-navbar-nav-2" />
          
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                  <NavDropdown drop="end" title="Flavors">
                    <Row>
                        {
                          flavors.map(item => {
                            return <DropdownItemFlavor 
                            name={item.name}
                            img={item.img}
                            />
                          })
                        }
                    </Row>
                  </NavDropdown>
                  
                <Nav.Link href="/inside">Inside</Nav.Link>

              </Nav>
            </Navbar.Collapse>


            <Navbar.Brand href="/">
              <img className="brand-image" src="data:image/png;base64,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" alt="Betterwith Logo"/>
            </Navbar.Brand>


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