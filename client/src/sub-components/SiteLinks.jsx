import React from "react";

const SiteLinks = (props) => {
    return (
        <div className="site-links">
            <a className="d-block mb-2" href="/store">Store Locator</a>
            <a className="d-block mb-2" href="/request">Store Request</a>
            <a className="d-block mb-2" href="/contact">Contact</a>
            <a className="d-block mb-2" href="/press">Press</a>
            <a className="d-block mb-2 link">Privacy Policy</a>
        </div>
    );
}

export default SiteLinks;