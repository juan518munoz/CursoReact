export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Complete Todo":
      return initialState.map((todo) => {
        const state = todo.id === action.payload ? !todo.done : todo.done;
        return { ...todo, done: state };
      });

    default:
      return initialState;
  }
};
