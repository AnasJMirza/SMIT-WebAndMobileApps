import {ADD_STUDENT} from '../actions/StudentInfoAction'
import { DEL_STUDENT } from '../actions/StudentInfoAction';




const initialState = [
    {
        name : 'Anas',
        rollNo : '14148',
        degree : 'BSCS'
    },

    {
        name : 'Hamza',
        rollNo : '16235',
        degree : 'BSSE'
    },

    {
        name : 'Ali',
        rollNo : '34632',
        degree : 'BSIT'
    },
]


export default function studentInfoReducer(state = initialState, action) {
    console.log("Studetn Indo Reducer Call");
    switch (action.type) {

        case ADD_STUDENT:{
            let newStudentData = action.payLoad
            console.log(newStudentData);

            return [
                ...state,
                newStudentData
            ]
        }
         
        case DEL_STUDENT:{
            console.log("Del student reducer run");
            let newStudentData = action.payLoad
            console.log(newStudentData);

            return newStudentData
        }
    
        default:
            return state
    }
}