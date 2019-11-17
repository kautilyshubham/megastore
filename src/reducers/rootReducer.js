import { combineReducers } from 'redux'
import shopReducer from './shopReducer';
import cartReducer from './cartReducer';


export default combineReducers({
    cartReducer,
    shopReducer
})