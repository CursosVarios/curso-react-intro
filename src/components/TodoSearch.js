import "./TodoSearch.css";

function TodoSearch(props) {
  const action = (event) => {
    console.log(event.target.value);
  };
  return (
    <input className="TodoSearch" placeholder="cortar" onChange={action} />
  );
}

export { TodoSearch };
