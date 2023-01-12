import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList, TodoAdd } from "../Components";

const initialState = [
  {
    id: new Date().getTime,
    desc: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime * 3,
    desc: "Hablar con Gamora",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };

  return (
    <>
      <hr />
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
