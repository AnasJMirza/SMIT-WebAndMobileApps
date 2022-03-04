import React from 'react';
import Details from '../../components/details/Details';
import List from '../../components/lists/List';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar.js';



const Home = () => {
    return (
        <div>
            <Navbar/>

            <Sidebar/>

            <Details/>

            <List/>
            
        </div>
    );
};

export default Home;