import React from 'react';
import './Button.css'

const Button = props => {
    return ( 
        <div className='col-6 col-md-3 d-flex justify-content-center mt-2 mb-2'>
            <button type="button" onClick={props.onClick} 
                    className={`btn btn-primary btn-custom `}                
            >   
                <div>{props.sign}</div>
                <div className='small'>{props.name}</div>
            </button>
        </div>
     );
}
 
export default Button;