import { combineReducers } from "@reduxjs/toolkit";
import StudentReducer from "./StudentReducer";

const RootReducer = combineReducers({
    StudentReducer
})

export default RootReducer;