import React from 'react';
import './Button.css'

const Button = props => {
    return ( 
        <div className='col-6 col-md-6 d-flex justify-content-center mt-2 mb-2'>
            <button type="button" onClick={props.onClick} 
                    className={`btn btn-primary ${props.className}`}                
            >   
                <span>{props.sign}</span>
                <span>{props.name}</span>
            </button>
        </div>
     );
}
 
export default Button;