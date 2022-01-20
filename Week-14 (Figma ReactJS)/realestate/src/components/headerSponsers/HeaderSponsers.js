import React from 'react';
import './HeaderSponsers.css'

import adobeHomes from '../../assets/images/adobeHomes.png'
import builders from '../../assets/images/builders.png'
import capital from '../../assets/images/capital.png'
import rosewood from '../../assets/images/rosewood.png'
import ironwood from '../../assets/images/ironwood.png'

const HeaderSponsers = () => {
    return (
        <div className='flex'>
            <img src={adobeHomes} />
            <img src={builders} />
            <img src={capital} />
            <img src={rosewood} />
            <img src={ironwood} />
        </div>
    );
};

export default HeaderSponsers;