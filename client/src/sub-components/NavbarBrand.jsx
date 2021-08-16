import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavbarBrand = (props) => {
    return (
        <Navbar.Brand className={props.className} href="/">
            <img
                src={props.src}
                alt={props.alt}
            />
        </Navbar.Brand>
    );
};

export default NavbarBrand;