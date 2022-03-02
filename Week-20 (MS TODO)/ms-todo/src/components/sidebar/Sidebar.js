import React from 'react';
import './Sidebar.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

const SideBar = () => {
    return (
        <div>
            <div className='sidebar'>
                <div className='sidebarHorizentalAlign'>

                    <LightModeIcon/>

                    <div className='myDayText'>
                        <p className='sidebarHorizentalPadding'>My Day</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <StarBorderIcon/>

                    <div className='importentText'>
                        <p className='sidebarHorizentalPadding'>Importent</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <CalendarTodayIcon/>

                    <div className='plannedText'>
                        <p className='sidebarHorizentalPadding'>Planned</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <AccountCircleIcon/>

                    <div className='assignedText'>
                        <p className='sidebarHorizentalPadding'>Assigned to me</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <HomeIcon/>

                    <div className='tasksText'>
                        <p className='sidebarHorizentalPadding'>Tasks</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SideBar;