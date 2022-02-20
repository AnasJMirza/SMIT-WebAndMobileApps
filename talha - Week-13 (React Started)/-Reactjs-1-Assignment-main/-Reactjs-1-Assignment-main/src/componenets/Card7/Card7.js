import React from 'react';
import './Card7.css'

import img3 from '../../assets/images/img3.png'
import bed from '../../assets/images/bed.png'
import bath from '../../assets/images/bath.png'
import unfilled from '../../assets/images/unfilled.png'

const Card7 = () => {
    return (
        <div className='container cardf7'>
            
            <div className='row card_row_f7'>


<div className='col-6'>
<img className='img_cardf7' src={img3} alt="img3"/>
</div>


<div className='col-5 card_stn2_f7 '>

<div className='f7_dollar'>
$329,000
</div>

<p className='f7_villa'>
Clinton Villa
</p>

<p className='f7_st'>
675 Albert St NW, Atlanta
</p>


<img className='' src={bed} /> 
<span className='f7_bedbath '> 2 Beds</span> 

<img className='bathT7' src={bath}/>
<span className='f7_bedbath'> 2 Bath</span>



<div>
<button className='btn_f7'>
<span className='f7_btn_text'>view  details </span> </button>
</div>

</div>

<div className='col-1 unfilled_f7'>
<img className='' src={unfilled} alt="unfilled"/>
</div>

</div>


        </div>
    );
};

export default Card7;