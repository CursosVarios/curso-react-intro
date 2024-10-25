import "./TodoItem.css";

function TodoItem(props) {
  const { todo } = props;

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${
          todo.completed ? "Icon-check--active" : ""
        }`}
      >
        v
      </span>
      <p
        className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : ""}`}
      >
        {todo.title}
      </p>
      <span className="Icon Icon-delete">x</span>
    </li>
  );
}
export { TodoItem };
