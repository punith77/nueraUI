export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                result: action.payload
            }
        default:
            return state

    }
}