import "./TodoCounter.css";
function TodoCounter(props) {
  const { completed, total } = props;
  if (total === completed) {
    return <h1 className="TodoCounter">Todos completados!</h1>;
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span>
      de <span>{total}</span>
    </h1>
  );
}

export { TodoCounter };
