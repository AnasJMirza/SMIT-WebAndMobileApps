import React from 'react';
import './Card_1.css'
import icon_01 from '../../assets/images/icon_01.png'

const Card_1 = () => {
    return (
        <div className='card001'>
            <img src={ icon_01} alt="icon1"/>
            <p className='card001p'>Buy a home </p>
            <p className='card001p2'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
        </div>
    );
};

export default Card_1;