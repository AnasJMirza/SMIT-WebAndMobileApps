import React from 'react';
import './Form.css'
import Button from '../../components/button/Button';
import UseForm from './UseForm';


const Form = () => {

    const { nameGetter, rollNumGetter, degreeGetter, submitHandler } = UseForm();
    
    return (
        <div  className='main-body'>
            <form action='#' className='form-body'>
                <div className='add-students'>
                    Add Students
                    <hr/>
                </div>
                <div className='input-feilds'>
                    <input type={"text"} placeholder="Name" onChange={(e)=>nameGetter(e)}  className="input"/>
                    <input type={"number"} placeholder="Roll Number" onChange={(e)=>rollNumGetter(e)}  className="input"/>
                    <input type={"text"} placeholder="Degree" onChange={(e)=>degreeGetter(e)}  className="input"/>
                </div>

                <div onClick={submitHandler}>
                <Button label="Submit" bg="crimson" color="White" route="/" />
                </div>
                
            </form>
        </div>
    );
};

export default Form;