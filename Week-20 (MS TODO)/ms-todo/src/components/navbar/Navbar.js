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
                    <div className='app'>
                        <AppsIcon/>
                    </div>

                    <div className='logo'>
                        TODO
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
                    
                    <div className='setting'>
                        <SettingsIcon/>
                    </div>

                    <div className='feedback'>
                        <HelpIcon/>
                    </div>

                    <div className='whatsNew'>
                        <CampaignIcon/>
                    </div>

                    <div className='accountPicture'>
                        <AccountCircleIcon/>               
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;