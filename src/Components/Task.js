import { useState } from "react";

import SkillList from "./SkillList";
import "./Task.css";

const Task = (props) => {
  const [completed, setCompleted] = useState(false);

  const onClickHandler = () => {
    setCompleted(!completed);

    if (!completed) {
      props.completeTaskHandler(props.tier);
    } else {
      props.incompleteTaskHandler(props.tier);
    }
  };

  return (
    <li
      className={`Task${completed ? " Completed" : ""}`}
      onClick={onClickHandler}
    >
      <h4 className="Task-Name">{props.Name}</h4>
      <span className="Task-Desc">{props.Desc}</span>
      {props.Skills.length > 0 ? <SkillList Skills={props.Skills} /> : null}
      {props.Requirements.length > 0 ? "Reqs go here" : null}
    </li>
  );
};

export default Task;
