import "./TodoItem.css";

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props;

  return (
    <li className="TodoItem">
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
      <span className="Icon Icon-delete" onClick={() => onDelete(todo)}>
        x
      </span>
    </li>
  );
}
export { TodoItem };
