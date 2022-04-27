import {createStore} from 'redux'
import RootReducer from "../store/reducers/RootReducer";

const Store = createStore(RootReducer);

export default Store;