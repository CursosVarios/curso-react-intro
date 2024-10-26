import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";
function TodoCounter(props) {
  const { completed, total } = useContext(TodoContext);
  if (total === completed) {
    return <h1 className="TodoCounter">Todos completados!</h1>;
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span>
      de <span>{total}</span>
    </h1>
  );
}

export { TodoCounter };
