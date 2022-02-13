import React from 'react';
import './SelectedSec02.css'
import sec02img from '../../assets/images/sec02img.png'
import bed2 from '../../assets/images/bed2.png'
import bath2 from '../../assets/images/bath2.png'
import Button from '../button/Button';

const SelectedSec02 = () => {
    return (
        <div className='bgSec02'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={sec02img}  className='imgSec02'/>           
                    </div>

                    <div className='col-md-8'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-10 paddingSec02'>
                                    <p className='priceSec02'>$259,000</p>
                                    <p className='locationSec02'>Case Alda</p>
                                    <p className='addressSec02'>Co Rd Tribune Tribune</p>

                                    <img src={bed2}  className=''/>
                                    <span className='marginSec02 countParaSec02'>2 Beds</span>

                                    <span className='mainMarginSec02'>
                                        <img src={bath2}  className=''/>
                                        <span className='marginSec02 countParaSec02'>2 Baths</span>
                                    </span>
                                    
                                    <div className='btnMarginSec02'>
                                        <Button title="View Details" />
                                    </div>
                                </div>

                                <div className='col-md-2'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedSec02;