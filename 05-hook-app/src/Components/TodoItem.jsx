export const TodoItem = ({ desc, id, done, onRemoveTodo, onToggleTodo }) => {
  const handleRemoveTodo = () => {
    onRemoveTodo(id);
  };

  const handleToggleTodo = () => {
    onToggleTodo(id);
  };

  return (
    <li
      className={
        "list-group-item d-flex justify-content-between " +
        (done ? "list-group-item-success" : "")
      }
    >
      <span className="align-self-center" onClick={handleToggleTodo}>
        {desc}
      </span>
      <button className="btn btn-danger" onClick={handleRemoveTodo}>
        Borrar
      </button>
    </li>
  );
};
