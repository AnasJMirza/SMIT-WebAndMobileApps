export const ADD_STUDENT = "ADD_STUDENT";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../config/firebase";

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