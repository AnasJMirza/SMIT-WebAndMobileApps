import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navvbar'>
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link " href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#" >Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">Contact</a>
            </li>
            </ul>    
        </div>
        
    );
};

export default NavBar;