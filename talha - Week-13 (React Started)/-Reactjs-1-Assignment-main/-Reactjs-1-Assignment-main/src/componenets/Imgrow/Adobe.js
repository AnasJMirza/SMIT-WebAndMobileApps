import React from 'react';
import './Adobe.css'

import adobe from '../../assets/images/adobe.png'
import aabuilder from '../../assets/images/aabuilder.png'
import captial from '../../assets/images/captial.png'
import rosewood from '../../assets/images/rosewood.png'
import ironwood from '../../assets/images/ironwood.png'


const Adobe = () => {
    return (
        <div className='img_row'>
            <img className='img_1' src={adobe} alt="Logo" />
            <img className='img_2' src={aabuilder } alt ="aabuilder"/>
            <img className='img_3' src={ captial} alt=" captial" />
            <img className='img_4' src={rosewood} alt="rosewood" />
            <img className='img_5' src ={ ironwood} alt="ironwood" />
        </div>
    );
};

export default Adobe;