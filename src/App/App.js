import { TodoProvider } from "../context/TodoContext";
import "./App.css";
import { AppUI } from "./AppUI";
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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
