import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'

const Button = (props) => {
    return (
        <Link to={props.route} className='button-body' style={{color:props.color, backgroundColor:props.bg}}>
            {props.label}
        </Link>
    );
};

export default Button;