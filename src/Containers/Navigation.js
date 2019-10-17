import React from 'react';

const menu = props => {
    return(
        <div className='d-flex flex-column Navigation'>
            <div className={`${!props.counter ? 'd-none' : 'd-flex'} flex-row align-items-center`}>
                <label className="checkbox">
                    Selected ({props.counter})
                    <input 
                        type="checkbox"
                        name="checkAll"
                        onClick={props.checked}/>
                    <span className="checkmark"></span>
                </label>
                <button 
                    type="button"
                    className="btn btn-delete"
                    onClick={props.click}>
                        Delete
                        <span>({props.counter})</span>
                </button>
            </div>

            <div className={`${props.counter ? 'd-none' : 'd-flex'} flex-row align-items-center`}>
                <h2 className="subtitle">Signature List</h2>
                <a
                    className="ml-auto btn btn-primary"
                    href="https://www.google.com/">
                        Create a signature
                </a>                
            </div>
        </div>
    )
}

export default menu;