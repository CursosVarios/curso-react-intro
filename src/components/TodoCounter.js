const style = {
  fontSize: "24px",
  textAlign: "center",
  margin: "0",
  padding: "48px",
  fontWeight: "bold",
};
function TodoCouter(props) {
  const { completed, total } = props;
  return (
    <h1 style={style}>
      Has Completado {completed} de {total}
    </h1>
  );
}

export { TodoCouter };
