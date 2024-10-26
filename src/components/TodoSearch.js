import { useState } from "react";
import "./TodoSearch.css";

function TodoSearch(props) {
  const [search, setSearch] = useState("");
  const action = (event) => {
    setSearch(event.target.value);
  };
  
  console.log(search);
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
