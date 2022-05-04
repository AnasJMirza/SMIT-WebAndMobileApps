import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../config/Store';
import { deleteStudent, FetchStudent } from '../../store/actions/AddStudent';

const UseHome = () => {
    
    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);

    const deleteHandler = ( students, id)=>{
        dispatch(deleteStudent(students, id))
    }


    const students = useSelector((Store)=> Store.StudentReducer.allStudents)
    console.log("store Data = ", students);


    useEffect(()=>{
        console.log("UseEffect Running");
        dispatch(FetchStudent(setLoader))   
    }, [])



    return {
        students,
        loader,
        deleteHandler,

    }
};

export default UseHome;