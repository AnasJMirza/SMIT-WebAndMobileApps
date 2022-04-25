import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-body'>
            <div className='navbar-content'>
                <div className='logo-wrapper'>
                    <p className='logo'>STUDENT-APP</p>
                </div>
                <div className='navbar-routes-wrapper'>
                    <p className='navbar-routes'>Home</p>
                    <p className='navbar-routes'>About</p>
                    <p className='navbar-routes'>Contact</p>
                </div>
                <div className='navbar-buttons-wrapper'>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" style={{
                        backgroundColor: "#ffffff",
                        color:"rgb(220,20,60)"
                    }}>Login</Button>

                    <Button variant="outlined" style={{
                        border: "1px solid #ffffff",
                        color:"white"
                    }}>Signup</Button>
                </Stack>
                </div>
            </div>
        </div>
    );
};

export default Navbar;