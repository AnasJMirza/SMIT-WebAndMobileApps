import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='navbar-body'>
                <ul className='navbar-items'>
                    <li><Link className='navbar-item' to={"/"}>Home</Link></li>
                    <li><Link className='navbar-item' to={"/about"}>About</Link></li>
                    <li><Link className='navbar-item' to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;