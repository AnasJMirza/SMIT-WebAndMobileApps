import React from 'react';
import './Card_2.css'
import icon_02 from '../../assets/images/icon_02.png'

const Card_2 = () => {
    return (
        <div className='card002'>
            <img src={ icon_02} alt="icon2"/>
            <p className='card002p'>Rent a home </p>
            <p className='card002p2'>With 35+ filters and custom keyword search, Trulia can help you
 find a home.</p>
        </div>
    );
};

export default Card_2;