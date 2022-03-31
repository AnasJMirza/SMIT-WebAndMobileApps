import {createStore} from 'redux'
import { rootReducer } from '../store/reducers/RootReducer'

export const Store = createStore(rootReducer);