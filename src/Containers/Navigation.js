import React from 'react';

const menu = props => {
    return(
        <div className="d-flex flex-column">
            <div hidden={!props.counter}>
                <input
                    type="checkbox"
                    />
                <label className="checkbox-label">Selected <span>({props.counter})</span></label>
                <button 
                    type="button"
                    className="btn btn-delete"
                    onClick={props.click}>
                        Delete
                        <span>({props.counter})</span>
                </button>
            </div>

            <div hidden={props.counter}>
                <h2>Signature List</h2>
                <button
                    className="ml-auto"
                    type="button"
                    onClick={() => window.open('https://www.google.com/')}>
                        Create a signature
                </button>                
            </div>
        </div>
    )
}

export default menu;