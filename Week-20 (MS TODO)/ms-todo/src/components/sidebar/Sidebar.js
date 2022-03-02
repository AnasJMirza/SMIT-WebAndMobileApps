import React from 'react';
import './Sidebar.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const SideBar = () => {
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebarHorizentalAlign'>

                    <LightModeIcon/>

                    <div className='myDayText'>
                        <p>My Day</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <StarBorderIcon/>

                    <div className='importentText'>
                        <p>Importent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;