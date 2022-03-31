
export const ADD_STUDENT = 'ADD_STUDENT';
export const DEL_STUDENT = 'DEL_STUDENT';




export function addStudent(data) {
    console.log("Add Student Action Call", data);
    return{
        type : ADD_STUDENT,
        payLoad : data,
    }
}

export function deleteStudent(data) {
    console.log("Delete Student Action Call", data);
    return{
        type : DEL_STUDENT,
        payLoad : data,
    }
}