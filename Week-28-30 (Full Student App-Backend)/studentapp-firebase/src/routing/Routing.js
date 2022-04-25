import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    {/* <Route path='/' element={}/> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;