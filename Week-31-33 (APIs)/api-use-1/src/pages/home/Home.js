import React from 'react';
import './Home.css'
import UseHome from './UseHome';

const Home = () => {
    const { useEffect, homeData } = UseHome()
    
    return (
        <div>
            {homeData.map((item) => {
                return <div>
                    <div className='cards-wrapper'>
                        <div className='card'>
                            <div className='image'>
                                <img src={item.image} alt="..." width="100%" />
                            </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};

export default Home;