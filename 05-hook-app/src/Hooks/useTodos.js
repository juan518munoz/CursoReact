import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodos = (initialState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  let todosCount = todos.length;
  let pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
    todosCount = todos.length;
    pendingTodosCount = todos.filter((todo) => !todo.done).length;
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Complete Todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
