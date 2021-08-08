import React from "react";

const ContactCard = (props) => {
    return (
        <div className="contact-card">
            <h3>{props.dept} Inquiries:</h3>
            {props.name &&<h4>{props.name}</h4>}
            <h4>{props.email}</h4>
        </div>
    );
}

export default ContactCard;