import { INCREMENT, DECREMENT } from "../actions/CounterAction";

const initialState = {
    count : 0,
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:{
            let count = state.count;
            count = count + 1;
            return{
                ...state,
                count
            }
        }

        case DECREMENT:{
            let count = state.count;
            count = count - 1;
            return{
                ...state,
                count
            }
        }
            
            
    
        default:
            return state
    }
}