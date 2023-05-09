import {combineReducers} from 'redux'
import itemReducer from './itemReducer';


const rootReducer=combineReducers({Items:itemReducer});

export default rootReducer;