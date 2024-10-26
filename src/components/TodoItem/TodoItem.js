import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={todo.completed}
        onClick={() => onComplete(todo)}
      />
      <p
        className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : ""}`}
      >
        {todo.title}
      </p>
      <DeleteIcon onClick={() => onDelete(todo)} />
    </li>
  );
}
export { TodoItem };
