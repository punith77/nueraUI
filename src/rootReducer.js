import { combineReducers } from 'redux';

import itemsReducer from './containers/MainPage/reducer'

// console.log(appData)
export default combineReducers({
    // simpleReducer,
    // form: addItemForm,
    items: itemsReducer
})