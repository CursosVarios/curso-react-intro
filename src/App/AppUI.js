import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoEmpty } from "../components/TodoEmpty/TodoEmpty";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";

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
        {loading ? (
          <>
            <TodosLoading />
            <TodosLoading />
          </>
        ) : error ? (
          <TodosError />
        ) : filteredTodos.length === 0 ? (
          <TodoEmpty />
        ) : (
          ""
        )}
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
