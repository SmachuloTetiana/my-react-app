import React from 'react';

const menu = () => {
    return(
        <div className="d-flex flex-row">
            <h2>Signature List</h2>
            <button
                className="ml-auto"
                type="button">
                    Create a signature
            </button>
        </div>
    )
}

export default menu;