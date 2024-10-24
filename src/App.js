import "./App.css";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCouter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

function App() {
  return (
    <div className="App">
      <TodoCouter completed={3} total={5} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
