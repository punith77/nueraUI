export const postAction = () => {
    return function (dispatch) {
        dispatch({
            type: 'ADD_ITEM',
            payload: 'result_of_simple_action'
        })
    }
}