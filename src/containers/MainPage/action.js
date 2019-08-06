
import axios from 'axios'


export const getItems = () => {
    return async function (dispatch) {
        const itemsList = await axios.get('https://nueraapi.herokuapp.com/api/contents/getItems');
        dispatch({
            type: 'GET_ITEMS',
            payload: itemsList.data
        })
    }
}

export const deleteItem = (removeId) => {
    return async function (dispatch) {
        const itemDeleted = await axios.delete(`https://nueraapi.herokuapp.com/api/contents/${removeId}`);
        dispatch({
            type: 'DELETE_ITEM',
            payload: itemDeleted.data._id
        })
    }
}
export const addItem = (addData) => {
    return async function (dispatch) {
        const itemAdded = await axios.post('https://nueraapi.herokuapp.com/api/contents/addItem', addData);
        dispatch({
            type: 'ADD_ITEM',
            payload: itemAdded.data
        })
    }
}


