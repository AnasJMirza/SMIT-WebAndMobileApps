import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='mainNav'>
                
                <Link to={"/"} className='navItem'>Home</Link>
                <Link to={"/about"} className='navItem'>About</Link>
                <Link to={"/services"} className='navItem'>Services</Link>
                <Link to={"/contact"} className='navItem'>Contact</Link>
                
            </div>
        </div>
    );
};

export default Navbar;  