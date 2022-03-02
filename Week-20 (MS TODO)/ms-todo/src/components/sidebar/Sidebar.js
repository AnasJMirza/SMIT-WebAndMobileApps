import React, { useState } from 'react';
import './Sidebar.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleIcon from '@mui/icons-material/People';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


const SideBar = () => {

    const [sidebarState, setSidebarState] = useState(false);

    return (
        <div>

            <span className='openMenu' onClick={()=>{setSidebarState(true)}}>
                <MenuIcon fontSize='small'/>
            </span>
            <div className={`sidebar ${sidebarState ? '' : 'sidebarMove'}`} >

                <span className='closeMenu' onClick={()=>{setSidebarState(false)}}>
                    <MenuIcon fontSize='small'/>
                </span>
                <div className='sidebarHorizentalAlign'>
                    
                    <LightModeIcon fontSize='small'/>

                    <div className='myDayText'>
                        <p className='sidebarHorizentalPadding'>My Day</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <StarBorderIcon fontSize='small'/>

                    <div className='importentText'>
                        <p className='sidebarHorizentalPadding'>Importent</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <CalendarTodayIcon fontSize='small'/>

                    <div className='plannedText'>
                        <p className='sidebarHorizentalPadding'>Planned</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <AccountCircleIcon fontSize='small'/>

                    <div className='assignedText'>
                        <p className='sidebarHorizentalPadding'>Assigned to me</p>
                    </div>
                </div>

                <div className='sidebarHorizentalAlign'>

                    <HomeIcon fontSize='small'/>

                    <div className='tasksText'>
                        <p className='sidebarHorizentalPadding'>Tasks</p>
                    </div>

                </div>


                {/* Bottom Icons */}

                <div className='bottomIcons'>
                    <div className='bottomIcon'>
                        <MailOutlineIcon fontSize='small'/>
                    </div>

                    <div className='bottomIcon'>
                        <CalendarTodayIcon fontSize='small'/>
                    </div>

                    <div className='bottomIcon'>
                        <PeopleIcon fontSize='small'/>
                    </div>

                    <div className='bottomIcon'>
                        <AttachFileIcon fontSize='small'/>
                    </div>

                    <div className='bottomIcon'>
                        <DoneOutlineIcon fontSize='small'/>
                    </div>

                </div>
            </div>

        </div>

            
    );
};

export default SideBar;