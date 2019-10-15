import React from 'react';

const banner = (props) => {
    return (
        <div className="col-4">
            <h2>{props.title}</h2>
            <p>Content</p>
        </div>
    )
}

export default banner;