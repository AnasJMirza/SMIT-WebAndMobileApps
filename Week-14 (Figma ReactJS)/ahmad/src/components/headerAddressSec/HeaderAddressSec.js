import React from 'react';
import Button from '../button/Button';
import './HeaderAddressSec.css'

const HeaderAddressSec = (props) => {
    return (
        <div className='backgroundColor'>
            <div className='container-fluid padding'>
                <div className='row'>
                    <div className='col-md-4'>
                    <p className='head'>Address <p className='para'>587 Bridgeton Road</p> </p>
                    
                    </div>
                    <div className='col-md-4'>
                    <p className='head'>City <p className='para'>El Paso, Texas</p> </p>
                    
                    </div>
                    <div className='col-md-4'>
                        <Button title={props.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAddressSec;