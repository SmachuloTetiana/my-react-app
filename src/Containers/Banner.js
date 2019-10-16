import React from 'react';
import './Banner.css';

const banner = props => {
    return (
        <div className="col-4">
            <div className="Banner">
                <img 
                    src={props.src} 
                    title={props.title} 
                    className="img-fluid" />
                <div className="Banner__hover-container">
                    <input 
                        type="checkbox"
                        id={props.id}
                        onChange={props.changed}/>
                    <p>{props.children}</p>
                    <button 
                        type="button"
                        onClick={() => window.open('https://www.google.com/')}>
                            Use
                    </button>
                </div>
            </div>
        </div>
    )
}

export default banner;