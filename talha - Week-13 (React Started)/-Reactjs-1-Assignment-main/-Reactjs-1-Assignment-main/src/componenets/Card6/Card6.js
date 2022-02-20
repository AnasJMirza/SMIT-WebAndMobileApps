import React from 'react';
import './Crad6.css'

import img3 from '../../assets/images/img3.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import unfilled from '../../assets/images/unfilled.png'

const Card6 = () => {
    return (
        <div className='container cardf6'>
            
    <div className='row card_row_f6'>


    <div className='col-6'>
    <img className='img_cardf6' src={img3} alt="img3"/>
    </div>


    <div className='col-5 card_stn2_f6 '>
    
    <div className='f6_dollar'>
    $289,000
    </div>

    <p className='f6_Delx'>
    Supper Delax Home
    </p>

    <p className='f6_dr'>
    1398 Lynford Dr SW, Atlanta
    </p>
    
    
    <img className='' src={bed} /> 
    <span className='f6_bedbath '> 2 Beds</span> 
            
    <img className='bathT6' src={bath}/>
    <span className='f6_bedbath'> 2 Bath</span>
    

    
    <div>
    <button className='btn_f6'>
    <span className='f6_btn_text'>view  details </span> </button>
    </div>

    </div>

    <div className='col-1 unfilled_f6'>
    <img className='' src={unfilled} alt="unfilled"/>
    </div>

    </div>

        </div>
    );
};

export default Card6;