import { ADD_STUDENT, FETCH_STUDENT } from "../actions/AddStudent"


const initialState = {
    allStudents : [
        
    ]
}

export default function StudentReducer(state=initialState, action) {
    console.log("Reducer getting the data");
    
    switch (action.type) {

        case ADD_STUDENT:
            let newStudents = action.payload
            return {
                ...state,
                allStudents : [...state.allStudents, newStudents]
            }
        case FETCH_STUDENT:
            return{
                ...state,
                allStudents : action.payload
            }
            
                
            
    
        default:
            return state
    }

    // return state
    
}