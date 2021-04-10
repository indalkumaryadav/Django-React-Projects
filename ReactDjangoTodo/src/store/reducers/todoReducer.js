const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
