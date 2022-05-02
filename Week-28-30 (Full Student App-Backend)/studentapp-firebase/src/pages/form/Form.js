import React from 'react';
import './Form.css'
import Button from '../../components/button/Button';
import UseForm from './UseForm';


const Form = () => {

    const { nameGetter, rollNumGetter, degreeGetter, submitHandler } = UseForm();
    
    return (
        <div  className='form-body'>
            <form action='#' className='form-bg'>
                <input type={"text"} placeholder="Name" onChange={(e)=>nameGetter(e)} />
                <input type={"number"} placeholder="Roll Number" onChange={(e)=>rollNumGetter(e)} />
                <input type={"text"} placeholder="Degree" onChange={(e)=>degreeGetter(e)} />

                <div onClick={submitHandler}>
                <Button label="Submit" bg="crimson" color="White" route="/" />
                </div>
                
            </form>
        </div>
    );
};

export default Form;