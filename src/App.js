import { useState } from "react";
import "./App.css";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCouter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const defaultTodos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Complete homework", completed: false },
  { id: 3, title: "Pick up dry cleaning", completed: true },
  { id: 3, title: "Pick up dry cleaning1", completed: true },
  { id: 3, title: "Pick up dry cleaning2", completed: false },
  { id: 3, title: "Pick up dry cleaning3", completed: true },
];
function App() {
  const [search, setSearch] = useState("");

  const [todos, setTodos] = useState(defaultTodos);
  const total = todos.length;
  const completed = todos.filter((x) => x.completed).length;
  const filteredTodos = search
    ? todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
    : todos;

  return (
    <>
      <TodoCouter completed={completed} total={total} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {filteredTodos.map((todo, key) => (
          <TodoItem key={"todoItem" + key} todo={todo} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
