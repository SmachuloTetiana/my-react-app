import React from 'react';

const menu = props => {
    const hidden = props.checked ? 'd-flex flex-row align-items-center' : 'd-flex flex-row align-items-center d-none';

    return(
        <div className="d-flex flex-column">
            <div className={hidden}>
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

            <div className="d-flex flex-row align-items-center">
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