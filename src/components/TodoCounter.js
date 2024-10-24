function TodoCouter(props) {
  const { completed, total } = props;
  return (
    <h1>
      Has Completado {completed} de {total}
    </h1>
  );
}

export { TodoCouter };
