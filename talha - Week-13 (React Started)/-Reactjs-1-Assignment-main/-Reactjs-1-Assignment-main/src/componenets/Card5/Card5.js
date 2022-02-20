import React from 'react';
import './Card5.css'

import img2 from '../../assets/images/img2.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import unfilled from '../../assets/images/unfilled.png'

const Card5 = () => {
    return (
        <div className=' container cardf5'>

            <div className='row card_row_f5'>


            <div className='col-6'>
                <img className='img_cardf5' src={img2} alt="img2"/>
            </div>


            <div className='col-5 card_stn2_f5 '>
                
                <div className='f5_dollar'>
                $229,000
                </div>

                <p className='f5_beach'>
                Langes Beach House
                </p>

                <p className='f5_highlight'>
                375 Highland Ave NE UNIT 1002
                </p>
                
                
                <img className='' src={bed} /> 
                <span className='f5_bedbath '> 2 Beds</span> 
                


                        
                <img className='bathT' src={bath}/>
                <span className='f5_bedbath'> 2 Bath</span>
                

                
                <div>
                <button className='btn_f5'>
                <span className='f5_btn_text'>view  details </span> </button>
                </div>

            </div>

            <div className='col-1 unfilled_f5'>
                <img className='' src={unfilled} alt="unfilled"/>
            </div>

            </div>
        </div>
    );
};

export default Card5;