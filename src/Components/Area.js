import React from "react";

import TaskTier from "./TaskTier";
import "./Area.css";

const Area = (props) => {
  return (
    <div className="Area">
      <h3 className={`Area-Title ${props.information.Name.split(" ")[0]}`}>
        {props.information.Name}
      </h3>
      <ul className="Area-Tiers">
        <TaskTier
          tier="Easy"
          tasks={props.information.Easy}
          completeTaskHandler={props.completeTaskHandler}
          incompleteTaskHandler={props.incompleteTaskHandler}
        />
        <TaskTier
          tier="Medium"
          tasks={props.information.Medium}
          completeTaskHandler={props.completeTaskHandler}
          incompleteTaskHandler={props.incompleteTaskHandler}
        />
        <TaskTier
          tier="Hard"
          tasks={props.information.Hard}
          completeTaskHandler={props.completeTaskHandler}
          incompleteTaskHandler={props.incompleteTaskHandler}
        />
        <TaskTier
          tier="Elite"
          tasks={props.information.Elite}
          completeTaskHandler={props.completeTaskHandler}
          incompleteTaskHandler={props.incompleteTaskHandler}
        />
        <TaskTier
          tier="Master"
          tasks={props.information.Master}
          completeTaskHandler={props.completeTaskHandler}
          incompleteTaskHandler={props.incompleteTaskHandler}
        />
      </ul>
    </div>
  );
};

export default Area;
