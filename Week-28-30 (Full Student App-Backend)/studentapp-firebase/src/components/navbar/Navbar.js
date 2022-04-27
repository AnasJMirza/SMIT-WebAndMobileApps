import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../button/Button';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-body'>
            <div className='navbar-content'>
                <div className='logo-wrapper'>
                    <p className='logo'>STUDENT-APP</p>
                </div>
                <div className='navbar-routes-wrapper'>
                    <Link to={"/"} className="navbar-routes">Home</Link>
                    <Link to={"/"} className="navbar-routes">About</Link>
                    <Link to={"/"} className="navbar-routes">Contact</Link>
                </div>
                <div className='navbar-buttons-wrapper'>
                    <Button label='Login' color='crimson' bg='white' route='/login'/>
                    <Button label='Signup' color='white' bg='crimson' route='signup'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;