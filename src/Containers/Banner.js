import React from 'react';
import './Banner.css';

const banner = props => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className={`Banner ${props.className}`}>
                <img 
                    src={props.src} 
                    title={props.title} 
                    alt=""
                    className="img-fluid" />
                <div className="Banner__hover-container">
                    <label className="checkbox">
                        <input 
                            type="checkbox"
                            id={props.id}
                            checked={props.checked ? 'checked' : ''}
                            onChange={props.changed}/>
                        <span className="checkmark"></span>
                    </label>
                    <div className="Banner-info-block">
                        {props.children}
                    </div>
                    <button 
                        type="button"
                        className="btn btn-white"
                        onClick={() => window.open('https://www.google.com/')}>
                            Use
                    </button>
                </div>
            </div>
        </div>
    )
}

export default banner;