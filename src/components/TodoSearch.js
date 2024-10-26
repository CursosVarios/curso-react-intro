import { useState } from "react";
import "./TodoSearch.css";

function TodoSearch(props) {
  const { search, setSearch } = props;
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
