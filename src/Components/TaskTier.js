import { useState, useEffect, useRef } from "react";

import Task from "./Task";
import "./TaskTier.css";

const TaskTier = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const TaskTierRef = useRef();

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!isExpanded) {
      TaskTierRef.current.style.maxHeight = "25px";
    } else {
      TaskTierRef.current.style.maxHeight =
        TaskTierRef.current.scrollHeight + "px";
    }
  }, [isExpanded]);

  return (
    <li className="TaskTier" ref={TaskTierRef}>
      <h4 className="TaskTier-Name" onClick={toggleIsExpanded}>
        {props.tier}
      </h4>
      <ul className="TaskTier-Tasks">
        {props.tasks &&
          props.tasks.map((task) => {
            return (
              <Task
                Name={task.Name}
                Desc={task.Task}
                Skills={task.Skills}
                Requirements={task.Requirements}
                completeTaskHandler={props.completeTaskHandler}
                incompleteTaskHandler={props.incompleteTaskHandler}
                tier={props.tier}
              />
            );
          })}
      </ul>
    </li>
  );
};

export default TaskTier;
