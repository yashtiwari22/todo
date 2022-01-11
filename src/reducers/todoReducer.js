const intialData = {
  list: [],
};
const todoReducer = (state = intialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const new_list = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: new_list,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducer;
