import { combineReducers } from "redux";
import CounterReducer from '../reducers/CounterReducer'

export const rootReducer = combineReducers({
    CounterReducer,
})