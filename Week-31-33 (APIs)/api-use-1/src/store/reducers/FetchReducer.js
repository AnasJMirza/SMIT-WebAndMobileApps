import { FETCH_HOME_DATA } from "../actions/HomeActions";

const initialState = {
    data : [
        "Anas",
        "ad"
    ]
}


export default function FetchReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_HOME_DATA:
            console.log("REDUCER RUN");
            
            const data = action.payload
            return{
                ...state,
                data
                
            }
    
        default:
            return state
    }
}

