import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = () => {
    event.preventDefault();
    if (description.lengt == 0) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      desc: description,
    };

    onNewTodo(newTodo);
    onResetForm()
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
