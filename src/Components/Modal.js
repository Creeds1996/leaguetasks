import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";
import "./Modal.css";

const Modal = (props) => {
  const content = (
    <div className="Modal">
      <Backdrop onClick={props.onClose} />
      {props.children}
      <button onClick={props.onClose} className="Modal-Close">
        X
      </button>
    </div>
  );

  return createPortal(content, document.getElementById("modal-hook"));
};

export default Modal;
