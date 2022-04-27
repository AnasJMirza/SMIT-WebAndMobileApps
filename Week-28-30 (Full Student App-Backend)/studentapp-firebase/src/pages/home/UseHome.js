import React from 'react';
import { useSelector } from 'react-redux';
import Store from '../../config/Store';

const UseHome = () => {

    const students = useSelector((Store)=> Store.StudentReducer)
    // console.log("store Data = ", students);

    return {
        students
    }
};

export default UseHome;