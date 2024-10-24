function TodoItem(props) {
  const { todo } = props;
  return (
    <li>
      <span>v</span>
      <p>{todo.title}</p>
      <span>x</span>
    </li>
  );
}
export { TodoItem };
