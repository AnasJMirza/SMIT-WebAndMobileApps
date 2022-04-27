import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Form from '../pages/form/Form';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/add-students' element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;