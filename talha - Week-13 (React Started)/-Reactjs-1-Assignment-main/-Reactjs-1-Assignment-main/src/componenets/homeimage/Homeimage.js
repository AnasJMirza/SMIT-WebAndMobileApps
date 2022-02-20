import React from 'react';
import home from '../../assets/images/home.png'
import'./Homeimage.css'

const Homeimage = () => {
    return (
        <div className='home_image1' >
             <img  src={home} alt="Logo" />
        </div>
    );
};

export default Homeimage;