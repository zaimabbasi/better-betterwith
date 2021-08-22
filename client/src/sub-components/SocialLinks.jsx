import React from "react";

const SocialLinks = (props) => {
    return (
        <div className="social-links">
            <a href="http://facebook.com/betterwithfoods" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="http://instagram.com/betterwith" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="http://twitter.com/betterwithfoods" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="http://youtube.com/channel/UC9NxmNoD0f400ihRRrZWQdA" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
            </a>
        </div>
    );
}

export default SocialLinks;