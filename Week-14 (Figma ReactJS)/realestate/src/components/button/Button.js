import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Button.css'   

const Button = (props) => {
    return (
        <span>
            <button  style={{backgroundColor:props.backgroundColor, color:props.color}} className='btn btn-primary'>{props.title}</button>
        </span>
    );
};

export default Button;