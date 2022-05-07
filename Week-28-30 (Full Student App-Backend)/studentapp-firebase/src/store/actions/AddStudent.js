
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore"; 
import React from "react";
import { db } from "../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const ADD_STUDENT = "ADD_STUDENT";
export const FETCH_STUDENT = "FETCH_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
// export function AddStudent(data) {
//     console.log("Action Dispathed");
//     return{
//         type: ADD_STUDENT,
//         payload: data
//     }
// }


export const AddStudent = (data, setLoader) => async (dispatch) => {
    setLoader(true)
    try {
        // console.log("Check : ",data.name);
        await addDoc(collection(db, "students"), data);
        
        // dispatch( {
        // type: ADD_STUDENT,
        // payload: data
        // })
        
        toast.success("Ho Gya Add Bhai!");
          
        
          
        
    } catch (error) {
        console.log(error);       
    }
    finally{
        setLoader(false)
    }
}


export const deleteStudent = (students, id, setLoader)=> async (dispatch) =>{
    setLoader(true)
    try {
        
        const studentId = doc(db, "students", id)
        await deleteDoc(studentId)

        const newStudents = students.filter(item => item.id !== id)
        

        dispatch({
            type : DELETE_STUDENT,
            payload: newStudents
        })
        toast.error("Ho Gya Delete Bhai!");
        
    } catch (error) {
        console.log(error);
    }
    finally{
        setLoader(false)
    }
}

export const updateStudent = (doc) => async (dispatch) =>{
    
}


export const FetchStudent = (setLoader) => async (dispatch) => {
    setLoader(true)
    try {
        let students = []

        const studentsCollection = collection(db, "students")
        // console.log("before await");
        const firebaseData = await getDocs(studentsCollection)
        // console.log("before await");
        firebaseData.docs.map((item)=>{
            students.push({...item.data(), id : item.id})
        })
        // console.log("Cleaen Data array = ", students);


        dispatch({
            type:FETCH_STUDENT,
            payload: students
        })
    } catch (error) {
        console.log("FETCH ERROR : ", error);
    }
    finally{
        setLoader(false)
    }
}

