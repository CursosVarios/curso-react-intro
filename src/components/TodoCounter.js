import "./TodoCounter.css";
function TodoCouter(props) {
  const { completed, total } = props;
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span>
      de <span>{total}</span>
    </h1>
  );
}

export { TodoCouter };
