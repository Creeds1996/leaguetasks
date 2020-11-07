import { createPortal } from "react-dom";

import "./Backdrop.css";

const Backdrop = (props) => {
  const content = (
    <div className="Backdrop" onClick={props.onClick}>
      {props.children}
    </div>
  );

  return createPortal(content, document.getElementById("backdrop-hook"));
};

export default Backdrop;
