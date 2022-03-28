import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='mainNav'>
                
                <Link to={"/"} className='navItem'>Home</Link>
                <Link to={"/student-info"} className='navItem'>Students</Link>
                
            </div>
        </div>
    );
};

export default Navbar;