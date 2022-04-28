import { ADD_STUDENT, FETCH_STUDENT } from "../actions/AddStudent"


const initialState = [
    {
        name:'Anas',  
    },
    {
        name:'Juniad',  
    },
    {
        name:'Ahsan',  
    },
]

export default function StudentReducer(state=initialState, action) {
    console.log("Reducer getting the data");
    let newStudents = action.payload
    switch (action.type) {

        case ADD_STUDENT:
            return [
                ...state,
                newStudents
            ]
        // case FETCH_STUDENT:
        //     console.log("FETCH STUDENT");
        //     console.log(action.payload);

        //     let newData = action.payload
        //     return[
        //         ...state,
        //         newData
        //     ]
            
    
        default:
            return state
    }

    // return state
    
}