import React, { Component } from 'react';
import Header from '../Common/Header/Header';
import validations from '../Reusable/Validations';
import Buttons from '../Reusable/Button/Button';
import './Calculator.css'
const requiredError = 'This field is mandatory';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // INPUTS
            inputs : {                
                value1 : {
                    fieldName : 'Enter Value 1',
                    value : '',
                    validation: validations.numbers,
                    isError : false,
                    errorMsg : 'Input value 1 should contain only Numbers ',
                    isRequired : true,
                    isDisabled : false,
                },
                value2 : {
                    fieldName : 'Enter Value 2',
                    value : '',
                    validation : validations.numbers ,
                    isError : false,
                    errorMsg : 'Input value 2 should contain only Numbers',
                    isRequired : true,
                    isDisabled : false
                },
            },
            // BUTTONS
            buttons : [
                {
                    name : 'Add',
                    sign : '+'
                },
                {
                    name : 'Substract',
                    sign : '-'
                },
                {
                    name : 'Multiply',
                    sign : 'x'
                },
                {
                    name : 'Divide',
                    sign : '÷'
                },
            ],

            result : '',
         }
    }

    // CALCULATIONS
    calculations = (name) => {
        
        let stateObj = {...this.state}
        let isSubmit = true
        
        Object.values(stateObj.inputs).map(e  => {           
            if((e.value === '' && e.isRequired) || e.isError){
                e.isError = true
                isSubmit = false
        }
        return this.setState({...stateObj})
        })
        if(!isSubmit){
            this.setState({...stateObj})
            return false    
        }

        //MAIN CALCULATIONS
        let val1 = stateObj.inputs.value1.value
        let val2 = stateObj.inputs.value2.value
        
        switch (name) {
            case 'Add':
                stateObj.result = parseInt(val1) + parseInt(val2)        
                break;
            case 'Substract':
                stateObj.result = parseInt(val1) - parseInt(val2)        
                break;
            case 'Multiply':
                stateObj.result = parseInt(val1) * parseInt(val2)        
                break;
            case 'Divide':
                stateObj.result = parseInt(val1) / parseInt(val2)        
                break;
        
            default:
                break;
        }
        this.setState({...stateObj})

    }

  
// VALIDATION FUNCTION
    validation = (e) => {

        let {name,value} = e.target
        let stateObj = {...this.state.inputs}
        let validation = stateObj[name].validation
        let isRequired = stateObj[name].isRequired
        let isError = false
        let RegEx = new RegExp(validation)

        if(isRequired){
            if(value === ''){
                 isError = true
            }else{
                if(validation !== ''){
                    if(!value.match(RegEx)){
                        isError = true
                    }
                }
            }
        }else{
            if(value !== '' & validation !== ''){
                if(!value.match(RegEx)){
                     isError = true
                }
            }
        }

        return stateObj[name].isError = isError
    }

    changeHandler = (e) => {
    
        let {name,value} = e.target
        let stateObj = {...this.state.inputs}
    
        this.validation(e)
    
        stateObj[name].value = value
    
        this.setState({...stateObj})
    
        }


// RENDERING INPUTS
    renderInputs = () => {
        let stateObj = {...this.state.inputs}

        return Object.entries(stateObj).map(
            ([key,val])=>{
                
                return(
                    <div className='col-12 col-md-6 mt-2 mb-3' key={key}>                        
                        <div className='row'>
                            {/* <div className='col-12 col-md-4 d-flex align-items-end'>
                                <label class="form-control-placeholder"  >{val.fieldName}</label>                                
                            </div> */}
                            <div className='col-12 col-md-8'>
                                <div className="form-group mb-2 mt-1">   
                                    <input 
                                        type='text' className={`form-control ${val.isRequired?'hasRequired':''} ${val.isError?'hasError':''}`}
                                        name={key}   onChange={this.changeHandler} value={val.value} disabled={val.isDisabled}
                                        id={key} required
                                        />

                                    <label className="form-control-placeholder text-secondary" for={key}  >{val.fieldName}</label> 

                                    { val.isError &&
                                     <> 
                                       { 
                                        val.value==='' ? 
                                            <div className='text-danger small position-absolute'>{requiredError}</div> 
                                            :
                                            <div className='text-danger small position-absolute'>{val.errorMsg}</div>
                                        }
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>        
                )
            }
        )
    }

    // RENDERING BUTTONS
    renderButtons = () => {
        return this.state.buttons.map(
            (e,i) => {
                return(
                    <Buttons name={e.name} sign={e.sign} onClick={()=>this.calculations(e.name)} key={i} />
                )
            }
        )
    }



    render() { 
        return ( 
            <>
                <Header />
                <div className='row p-0 m-3 '>
                    {this.renderInputs()}

                    {this.renderButtons()} 

                    <div className='col-12 mt-3'>
                        <span className='text-secondary'>Result:</span> <span className='font-weight-bold'>{this.state.result}</span>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Calculator;