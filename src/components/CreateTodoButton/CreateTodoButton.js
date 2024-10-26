import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton(props) {
  const { activeModal, openModal, closeModal } = useContext(TodoContext);
  const action = (event) => {
    if (activeModal) {
      closeModal();
      return;
    }
    openModal();
  };

  return (
    <button
      className={`CreateTodoButton ${
        activeModal ? "CreateTodoButton--close" : ""
      }`}
      onClick={action}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
