import React from 'react';
import './Blueediv.css'

import Search from '../../assets/images/Search.png'

const Blueediv = () => {
    return (
        <div className='container-fluid blue_div'>
            <div className='row'>

                <div className='col-1'>
                    
                </div>

                <div className='col-5 same_clas'>
                    <h1 className='blue_heading'>Talk to a Redfin Agent</h1>
                    <p className='blue_para1'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
                </div>

                <div className='col-2 '></div>

                <div className='col-4 search_bar same_clas'>
                    <p className='blue_para2'>Where are you searching for homes?</p>
                    <input placeholder='City,Adress,ZIP'/>
                    <img className='search_img' src={Search} alt="search" />
                    
                </div>

            </div>
            
        </div>
    );
};

export default Blueediv;