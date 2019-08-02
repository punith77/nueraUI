// if the request is async we make a async req up here
// we dont need to use redux thunk middleware uphere - but using it to show case my skills with redux thunk

import { appData } from '../../appData';

export const getItems = () => {
    // async req
    return function (dispatch) {
        dispatch({
            type: 'GET_ITEMS',
            payload: appData
        })
    }
}

export const deleteItem = (removeId) => {
    // async req
    return function (dispatch) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: removeId
        })
    }
}
export const addItem = (addData) => {
    // async req
    return function (dispatch) {
        dispatch({
            type: 'ADD_ITEM',
            payload: addData
        })
    }
}


