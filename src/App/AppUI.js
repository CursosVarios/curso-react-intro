import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";

function AppUI({
  completed,
  total,
  search,
  setSearch,
  filteredTodos,
  onComplete,
  onDelete,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {loading
          ? "cargando..."
          : error
          ? "Hubo un error"
          : filteredTodos.length === 0
          ? "No hay tareas"
          : ""}
        {filteredTodos.map((todo, key) => (
          <TodoItem
            key={"todoItem" + key}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };