import { TodoIcon } from "./TodoIcon";

function DeleteIcon({ onClick }) {
  return <TodoIcon type="delete" color="gray" onClick={onClick}></TodoIcon>;
}

export { DeleteIcon };
