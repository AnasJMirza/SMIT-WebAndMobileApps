import React from 'react';
import homeHead from '../../assets/images/homeHead.png'
import './HeaderPrimaryPic.css'

const HeaderPrimaryPic = () => {
    return (
        <div>
            <img src={homeHead} className='pic' />
        </div>
    );
};

export default HeaderPrimaryPic;