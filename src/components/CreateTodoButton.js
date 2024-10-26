import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const action = (event) => {
    console.log("CreateTodoButton", event);
  };

  return (
    <button className="CreateTodoButton" onClick={action}>
      +
    </button>
  );
}

export { CreateTodoButton };
