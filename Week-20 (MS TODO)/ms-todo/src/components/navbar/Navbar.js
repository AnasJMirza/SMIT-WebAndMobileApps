import React from 'react';
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';

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
                    search
                </div>

                <div className='profileSection'>
                    profile
                </div>

            </div>
        </div>
    );
};

export default Navbar;