import React from "react-bootstrap";

const YoutubeVideo = (props) => {
    return (
        <div className="yt-video">
            <iframe width="100%" height="100%" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default YoutubeVideo;