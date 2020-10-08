import React from 'react';

const Input = props => {
    return ( 
        <div className='col-12 col-md-6 mt-2 mb-3' key={props.key}>                        
        <div className='row'>
           
            <div className='col-12 col-md-8'>
                <div className="form-group mb-2 mt-1">   
                    <input 
                        type='text' className={`form-control ${props.val.isRequired?'hasRequired':''} ${props.val.isError?'hasError':''}`}
                        name={props.key}   onChange={props.onChange} value={props.val.value} disabled={props.val.isDisabled}
                        id={props.key} required
                        />

                    <label className="form-control-placeholder text-secondary" for={props.key}  >{props.val.fieldName}</label> 

                    { props.val.isError &&
                     <> 
                       { 
                        props.val.value==='' ? 
                            <div className='text-danger small position-absolute'>{props.requiredError}</div> 
                            :
                            <div className='text-danger small position-absolute'>{props.val.errorMsg}</div>
                        }
                    </>
                    }
                </div>
            </div>
        </div>
    </div> 
     );
}
 
export default Input;