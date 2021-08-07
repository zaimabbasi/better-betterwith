import React from "react";

const CopyrightInfo = (props) => {
    const year = new Date().getFullYear();

    return (
        <div className="copyright-info text-center">
            <p>© {year} Betterwith Foods Inc. All Rights Reserved.</p>
        </div>
    );
}

export default CopyrightInfo;