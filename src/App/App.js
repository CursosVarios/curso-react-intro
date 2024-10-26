import { useState } from "react";
import "./App.css";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStotage";
/*
const defaultTodos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Complete homework", completed: false },
  { id: 3, title: "Pick up dry cleaning", completed: true },
  { id: 4, title: "Pick up dry cleaning1", completed: true },
  { id: 5, title: "Pick up dry cleaning2", completed: false },
  { id: 6, title: "Pick up dry cleaning3", completed: true },
];

localStorage.setItem("todos", JSON.stringify(defaultTodos));*/

function App() {
  const [search, setSearch] = useState("");
  const [todos, saveTodos] = useLocalStorage("todos", []);

  const total = todos.length;
  const completed = todos.filter((x) => x.completed).length;
  const searchLowerCase = search.toLowerCase();
  const filteredTodos = todos.filter(
    (todo) =>
      !searchLowerCase || todo.title.toLowerCase().includes(searchLowerCase)
  );

  const onComplete = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((x) => x.title === todo.title);
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };
  const onDelete = (todo) => {
    const newTodos = todos.filter((x) => x.title !== todo.title);
    saveTodos(newTodos);
  };
  return (
    <>
      <AppUI
        completed={completed}
        total={total}
        search={search}
        setSearch={setSearch}
        filteredTodos={filteredTodos}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    </>
  );
}

export default App;
