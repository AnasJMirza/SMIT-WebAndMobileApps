export const ADD_STUDENT = "ADD_STUDENT";

export function AddStudent(data) {
    console.log("Action Dispathed");
    return{
        type: ADD_STUDENT,
        payload: data
    }
}