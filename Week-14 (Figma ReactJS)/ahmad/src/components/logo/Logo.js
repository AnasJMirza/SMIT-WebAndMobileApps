import React from 'react';
import LogoImg from '../../assets/images/Logo.png'
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <img src={LogoImg}  className='logo'/>
        </div>
    );
};

export default Logo;