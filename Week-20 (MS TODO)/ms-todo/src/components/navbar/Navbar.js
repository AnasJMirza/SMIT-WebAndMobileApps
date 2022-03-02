import React from 'react';
import './Navbar.css'
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div>
            <div className='nav'>

                <div
                 className='logoSection'>
                    
                    <div className='navLeftIcon'>
                        <AppsIcon/>
                    </div>
                    

                    <div className='navLeftIcon'>
                        <p>TODO</p>
                    </div>

                </div>

                <div className='searchBarSection'>
                    <div className='searchBarLogo'>
                        <SearchIcon/>
                    </div>
                    <div>
                        <input className='searchBar' type={"text"} />
                    </div>
                </div>

                <div className='profileSection'>
                    
                    <div className='navRightIcon'>
                        <SettingsIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <HelpIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <CampaignIcon/>
                    </div>

                    <div className='navRightIcon'>
                        <AccountCircleIcon/>               
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;