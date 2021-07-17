import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";


const DropdownItemFlavor = (props) => {
    return (
        <Col lg="2" md="4" sm="6">
            
            <NavDropdown.Item style={{textAlign: "center"}} href={"/"+props.name}>
                <img className="flavor-image" src={"../images/"+props.img}/>
                {props.name}    
            </NavDropdown.Item>

        </Col>
    );
};


export default DropdownItemFlavor;