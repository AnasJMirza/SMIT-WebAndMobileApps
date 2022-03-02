import React from 'react';
import Details from '../../components/details/Details';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar.js';



const Home = () => {
    return (
        <div>
            <Navbar/>

            <Sidebar/>

            <Details/>
            
        </div>
    );
};

export default Home;