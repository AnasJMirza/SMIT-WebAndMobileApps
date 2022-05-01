import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../config/Store';
import { FetchStudent } from '../../store/actions/AddStudent';

const UseHome = () => {
    const dispatch = useDispatch();
    const students = useSelector((Store)=> Store.StudentReducer.allStudents)
    console.log("store Data = ", students);


    useEffect(()=>{
        console.log("UseEffect Running");
        dispatch(FetchStudent())   
    }, [])

    return {
        students
    }
};

export default UseHome;