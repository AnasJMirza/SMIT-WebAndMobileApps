import React from 'react';
import './Card4.css'
// import img1 from '../../../assets/images/img1.png'
// import bed from '../../../assets/images/bed.png'
// import bath from '../../../assets/images/bath.png'
// import filled from '../../../assets/images/filled.png'
// import Buttonblue from '../../Buttonblue/Buttonblue';
import img1 from '../../assets/images/img1.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import filled from '../../assets/images/filled.png'

const Card4 = () => {
    return (
        <div className=' container cardf4'>

            <div className='row card_row_f4'>


            <div className='col-6'>
                <img  className='img_cardf4' src={img1} alt="img1"/>
            </div>


            <div className='col-5 card_stn2_f4'>
                
                <div className='f4_dollar'>
                    $259,000
                </div>

                <p className='f4_alda'>
                    Case Alda
                </p>

                <p className='f4_tribune'>
                    Co Rd Tribune Tribune
                </p>
                

                <img className='' src={bed} /> 
                <span className='f4_bedbath'> 2 Beds</span> 

                <img className='bathT4' src={bath}/>
                <span className='f4_bedbath'> 2 Bath</span>

                {/* <Buttonblue  width= "84px" height="30px"  title="view details "/> */}
                
                <div>
                <button className='btn_f4'>
                <span className='f4_btn_text'>view  details </span> </button>
                </div>
            </div>

            <div className='col-1'>
                <img className='filled_f4' src={filled} alt="filled"/>
            </div>

            </div>
        </div>
    );
};

export default Card4;