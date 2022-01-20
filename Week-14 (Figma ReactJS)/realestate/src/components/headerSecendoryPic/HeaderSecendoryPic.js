import React from 'react';
import homeSmallPic from '../../assets/images/homeSmallHead.png'
import './HeaderSecendoryPic.css'
import homeSmallBed from '../../assets/images/homeSmallBed.png'
import homeSmallBath from '../../assets/images/homeSmallBath.png'
import line from '../../assets/images/line.png'

const HeaderSecendoryPic = () => {
    return (
        
            <div className='container-fluid secendoryPicComponent'>

                <div className='row'>
                    <div className='headerSecendoryPic'>
                        <img src={homeSmallPic} className='homeSmallPic' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <p className='secendoryPicPrice'>$599,000</p>
                    </div>   
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <p className='secendoryPicLocation'>Newport</p>        
                    </div>

                    <div className='col-md-6'>
                        
                            <img src={homeSmallBed}  className='secendoryFlex bedBath'/>
                            <span className='secendoryPicNumaric secendoryFlex'>3</span>
                            
                            <img src={line} className='secendoryFlex' />

                            <img src={homeSmallBath} className='secendoryFlex bedBath' />
                            <span className='secendoryPicNumaric secendoryFlex'>2</span>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <p className='secedoryPicAddress'>15 Lee Ave, Newport, Rl 02564</p>
                    </div>
                </div>

                
                
            </div>
        


    );
};

export default HeaderSecendoryPic;