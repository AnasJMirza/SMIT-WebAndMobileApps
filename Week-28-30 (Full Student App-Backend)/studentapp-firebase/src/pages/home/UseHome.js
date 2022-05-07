import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc } from 'firebase/firestore';
import Store from '../../config/Store';
import { deleteStudent, FetchStudent, updateStudent } from '../../store/actions/AddStudent';
import { db } from '../../config/firebase';

const UseHome = () => {
    
    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);

    const deleteHandler = ( students, id)=>{
        dispatch(deleteStudent(students, id, setLoader))
    }

    const updateHandler = (name, id)=>{
        const doc = (db, 'students', id);

        console.log(name, id);

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
        updateHandler

    }
};

export default UseHome;