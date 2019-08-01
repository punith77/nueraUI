import { combineReducers } from 'redux';
import { reducer as addItemForm } from 'redux-form';
import simpleReducer from './containers/AddItem/reducer';
import itemsReducer from './containers/MainPage/reducer'

// console.log(appData)
export default combineReducers({
    // simpleReducer,
    // form: addItemForm,
    items: itemsReducer
})