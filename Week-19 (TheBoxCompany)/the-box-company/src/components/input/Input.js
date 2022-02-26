import React from 'react';
import style from './InputStyle'

const Input = (props) => {
    return (
        <span>
            <span style={style.flex}>
                <input style={style.input} type={props.type} placeholder={props.placeholder} required={true} />     
            </span>
        </span>
    );
};

export default Input;