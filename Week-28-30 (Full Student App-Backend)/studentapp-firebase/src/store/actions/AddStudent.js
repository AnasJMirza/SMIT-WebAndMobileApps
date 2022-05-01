
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import React from "react";
import { db } from "../../config/firebase";
import 'react-toastify/dist/ReactToastify.css';


export const ADD_STUDENT = "ADD_STUDENT";
export const FETCH_STUDENT = "FETCH_STUDENT";
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


export const FetchStudent = () => async (dispatch) => {
    try {
        let students = []

        const studentsCollection = collection(db, "students")
        // console.log("before await");
        const firebaseData = await getDocs(studentsCollection)
        // console.log("before await");
        const cleanData = firebaseData.docs.map((item)=>{
            students.push(item.data())
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

