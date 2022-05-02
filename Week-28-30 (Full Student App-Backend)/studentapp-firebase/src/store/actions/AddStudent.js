
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import React from "react";
import { db } from "../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";


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


export const AddStudent = (data) => async (dispatch) => {
    try {
        // console.log("Check : ",data.name);
        const docRef = await addDoc(collection(db, "students"), data);
        
        dispatch( {
        type: ADD_STUDENT,
        payload: data
        })
          
        // console.log("Dtaa added to firebase");
          
        
    } catch (error) {
        console.log(error);       
    }
}


export const deleteStudent = (students, id)=> async (dispatch) =>{
    try {
        // students.filter(()=>{
        //     if
        // })
        const studentId = doc(db, "students", id)
        await deleteDoc(studentId)

        // let check = [
        //     {name : 'haha'},
        //     {rollNum : 2},
        //     {degree : 'haha'}
        // ]
        // dispatch({
        //     type : DELETE_STUDENT,
        //     payload: check
        // })
        
    } catch (error) {
        console.log(error);
    }
}


export const FetchStudent = () => async (dispatch) => {
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
}

