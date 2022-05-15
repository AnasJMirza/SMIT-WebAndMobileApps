import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Items from '../pages/items/Items';

const Routing = () => {
    return (
        <div>
            
            <BrowserRouter>
            <Navbar/>
                <Routes >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/items' element={<Items/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
            
        </div>
    );
};

export default Routing;