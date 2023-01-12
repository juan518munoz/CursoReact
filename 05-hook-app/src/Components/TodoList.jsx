import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          desc={todo.desc}
          id={todo.id}
          done={todo.done}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
