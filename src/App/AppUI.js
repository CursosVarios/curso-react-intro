import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoEmpty } from "../components/TodoEmpty/TodoEmpty";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { TodoContext } from "../context/TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ loading, error, filteredTodos, onComplete, onDelete }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />

      <TodoContext.Consumer>
        {({ activeModal }) =>
          !activeModal ? "" : <Modal>La funciin de agregar todo</Modal>
        }
      </TodoContext.Consumer>
    </>
  );
}

export { AppUI };
