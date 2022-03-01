import React from 'react';
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div>
            <div className='nav'>

                <div
                 className='logoSection'>
                    <div className='app'>
                        <AppsIcon/>
                    </div>

                    <div className='logo'>
                        TODO
                    </div>

                </div>

                <div className='SearchBarSection'>
                    <input className='searchBar' type={"text"} />
                </div>

                <div className='profileSection'>
                    
                    <div className='setting'>
                        anas
                    </div>

                    <div className='feedback'>
anas
                    </div>

                    <div className='whatsNew'>
anas
                    </div>

                    <div className='accountPicture'>
anas
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;