export default (state = [], action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return action.payload;
    case "DELETE_ITEM":
      return state.filter(function (item) {
        return item._id !== action.payload;
      });
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};
