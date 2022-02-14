import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Button.css'   

const Button = (props) => {
    // console.log(props.data.backgroundColor);
    return (
        <span>
            <button style={{backgroundColor:props.backgroundColor, color:props.color, width:props.width, border:props.border, fontSize:props.fontSize}}  className='btn btn-primary'> {props.title} </button>
        </span>
    );
};

export default Button;