import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import Store from '../../config/Store';
import { deleteStudent, FetchStudent, updateStudent } from '../../store/actions/AddStudent';
import { db } from '../../config/firebase';
import { async } from '@firebase/util';


const UseHome = () => {
    
    
    
    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);

    const deleteHandler = ( students, id)=>{
        dispatch(deleteStudent(students, id, setLoader))
    }

    const update = async (id)  =>{
        const ref = doc(db, "students", id)
        await updateDoc(ref, {name:"OKAy"})
        console.log("DOne");
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
        update,
        

    }
};

export default UseHome;
