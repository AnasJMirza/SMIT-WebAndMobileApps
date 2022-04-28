import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../config/Store';
import { FetchStudent } from '../../store/actions/AddStudent';

const UseHome = () => {
    const dispatch = useDispatch();
    const students = useSelector((Store)=> Store.StudentReducer)
    console.log("store Data = ", students);

    return {
        students
    }
};

export default UseHome;