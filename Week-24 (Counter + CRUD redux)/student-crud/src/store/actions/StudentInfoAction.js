
export const ADD_STUDENT = 'ADD_STUDENT';




export function addStudent(data) {
    console.log("Add Student Action Call", data);
    return{
        type : ADD_STUDENT,
        payLoad : data,
    }
}