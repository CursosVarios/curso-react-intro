import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;

  return (
    <li className="TodoItem">
      <CompleteIcon  onClick={() => onComplete(todo)}/>
      <span
        className={`Icon Icon-check ${
          todo.completed ? "Icon-check--active" : ""
        }`}
        onClick={() => onComplete(todo)}
      >
        v
      </span>
      <p
        className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : ""}`}
      >
        {todo.title}
      </p>
      <DeleteIcon   onClick={() => onDelete(todo)}/>
      <span className="Icon Icon-delete" onClick={() => onDelete(todo)}>
        x
      </span>
    </li>
  );
}
export { TodoItem };
