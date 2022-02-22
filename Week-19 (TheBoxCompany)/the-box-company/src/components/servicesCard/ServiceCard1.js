import React from 'react';
import style from './ServicesCardStyle1';

const ServicesCard1 = (props) => {
    return (
        <div style={style.wrapper}>
            <div>
                <img src={props.url} ></img>
            </div>
            <div style={style.background}>
                
            </div>
            <div style={style.title}>
                {props.title}
            </div>
        </div>
    );
};

export default ServicesCard1;