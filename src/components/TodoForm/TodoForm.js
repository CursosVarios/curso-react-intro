import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";
function TodoForm() {
  const [name, setName] = useState("");
  const { closeModal, addTodo } = useContext(TodoContext);
  const cancel = () => {
    closeModal();
    console.log("Cancelar");
  };
  const createTodo = (event) => {
    const newTodo = { title: name, completed: false };
    addTodo(newTodo);
  };
  return (
    <form className="TodoForm">
      <textarea
        className="TodoForm-input"
        placeholder="NEW TASK"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={cancel}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--add"
          onClick={createTodo}
        >
          Crear
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
