import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
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
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" style={{
                            backgroundColor: "#ffffff",
                        }}><Link to={"/login"} className="navbar-button">Login</Link></Button>

                        <Button variant="outlined" style={{
                            border: "1px solid #ffffff",
                        }}><Link to={"/signup"} className="navbar-button" style={{color:'white'}}>Signup</Link></Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Navbar;