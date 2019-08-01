import { appData } from '../../appData';

export const getItems = () => {
    return function (dispatch) {
        dispatch({
            type: 'GET_ITEMS',
            payload: appData
        })
    }
}

export const deleteItem = (removeId) => {
    console.log(removeId)
    return function (dispatch) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: removeId
        })
    }
}
export const addItem = (addData) => {

    return function (dispatch) {
        dispatch({
            type: 'ADD_ITEM',
            payload: addData
        })
    }
}


