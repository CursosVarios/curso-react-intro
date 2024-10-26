import { createPortal } from "react-dom";
import "./Modal.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function Modal({ children }) {
  const { closeModal } = useContext(TodoContext);
  return createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}
export { Modal };
