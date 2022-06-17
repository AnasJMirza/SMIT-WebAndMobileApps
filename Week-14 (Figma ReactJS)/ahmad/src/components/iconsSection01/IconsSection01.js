import React from 'react';
import icon01 from '../../assets/images/icon01.png'
import icon02 from '../../assets/images/icon02.png'
import icon03 from '../../assets/images/icon03.png'
import './IconsSection01.css'

const IconsSection01 = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='iconFlex'>
                        <img src={icon01} />
                    </div>

                    <p className='iconHeadSection01'>Buy a home</p>
                    <p className='iconParaSection01'>With over 1 million+ homes for sale <br/>available on the website, Trulia can <br/> match you with a house.</p>

                </div>
                <div className='col-md-4 iconSelected'>
                    <div className='iconFlex'>
                        <img src={icon02} />
                    </div>

                    <p className='iconHeadSection01'>Rent a home</p>
                    <p className='iconParaSection01'>With 35+ filters and custom keyword <br/> search, Trulia can help you  <br/> find a home.</p>

                </div>
                <div className='col-md-4'>
                    <div className='iconFlex'>
                        <img src={icon03} />
                    </div>

                    <p className='iconHeadSection01'>See neighborhoods</p>
                    <p className='iconParaSection01'>With more neighborhood insights <br/> than any other real estate <br/> website.</p>
                </div>
            </div>
        </div>
    );
};

export default IconsSection01;