import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import StudentForm from '../pages/studentForm/StudentForm';
import StudentInfo from '../pages/studentInfo/StudentInfo';

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<StudentForm/>}/>
                    <Route path='/student-info' element={<StudentInfo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Routing;