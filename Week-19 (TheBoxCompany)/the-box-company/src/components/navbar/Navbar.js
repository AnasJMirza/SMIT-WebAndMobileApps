import React from 'react';
import style from './NavbarStyle'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div  style={style.navContent} >
                {/* logo of navbar */}

                <div style={style.logo}>
                    <img  src='/images/logo.png' className='logo'></img>
                </div>                

                {/* Actual Navbar */}

                <div style={style.actualNav} >
                    <li style={style.navMargin}>Home</li>
                    <li style={style.navMargin}>About Us</li>
                    <li style={style.navMargin}>Projects</li>
                    <li style={style.navMargin} >Services</li>
                    <li style={style.navMargin} >  <li style={style.contact}>Contact Us</li> </li>
                </div>

            </div>
        </div>
    );
};

export default Navbar;