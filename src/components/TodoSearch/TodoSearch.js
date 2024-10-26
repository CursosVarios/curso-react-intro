import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";

function TodoSearch(props) {
  const { search, setSearch } = useContext(TodoContext);
  const action = (event) => {
    setSearch(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="cortar"
      onChange={action}
      value={search}
    />
  );
}

export { TodoSearch };
