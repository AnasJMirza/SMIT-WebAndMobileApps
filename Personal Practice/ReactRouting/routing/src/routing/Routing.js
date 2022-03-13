import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';


const Routing = () => {
    return (
        <div>

            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>

            
            
        </div>
    );
};

export default Routing;