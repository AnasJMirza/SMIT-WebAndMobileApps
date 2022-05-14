import { combineReducers } from "redux";
import ApiReducer from "./ApiReducer";

const RootReducer = combineReducers({
    ApiReducer,
})

export default RootReducer;