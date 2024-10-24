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
  { id: 3, title: "Pick up dry cleaning", completed: true },
];
function App() {
  return (
    <>
      <TodoCouter completed={3} total={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, key) => (
          <TodoItem key={'todoItem'+key} todo={todo} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
