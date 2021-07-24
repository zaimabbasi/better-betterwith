import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";


const DropdownItemFlavor = (props) => {
    return (
        <NavDropdown.Item style={{textAlign: "center"}} href="/flavors">
            <img className={"flavor-image"} src={"../images/"+props.img} alt={props.alt}/>
            {props.name}    
        </NavDropdown.Item>
    );
};


export default DropdownItemFlavor;