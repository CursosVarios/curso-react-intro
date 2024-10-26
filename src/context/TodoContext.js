import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStotage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [search, setSearch] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos", []);

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
    <TodoContext.Provider
      value={{
        completed,
        total,
        search,
        setSearch,
        filteredTodos,
        onComplete,
        onDelete,
        loading,
        error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
