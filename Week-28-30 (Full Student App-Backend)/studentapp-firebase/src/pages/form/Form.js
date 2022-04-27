import React from 'react';
import './Form.css'
import Button from '../../components/button/Button';
import UseForm from './UseForm';

const Form = () => {

    const { nameGetter, submitHandler } = UseForm();
    
    return (
        <div  className='form-body'>
            <form action='#' className='form-bg'>
                <input type={"text"} placeholder="Name" onChange={(e)=>nameGetter(e)} />

                <div onClick={submitHandler}>
                <Button label="Submit" bg="crimson" color="White" route="/" />
                </div>
            </form>
        </div>
    );
};

export default Form;