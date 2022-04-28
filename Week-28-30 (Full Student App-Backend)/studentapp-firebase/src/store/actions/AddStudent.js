
import { addDoc, collection, getDoc } from "firebase/firestore"; 
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
        const docRef = await addDoc(collection(db, "students"), {
            name : data
          });

          
          
          
          dispatch( {
            type: ADD_STUDENT,
            payload: data
           })

           
           
           console.log("Dtaa added to firebase");
        
    } catch (error) {
        console.log(error);       
    }
}


// export const FetchStudent = (data) => async (dispatch) => {
    
// }

