import React from "react";
import Area from "./Area";

import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="TaskList">
      {props.Regions.map((Region) => {
        return (
          <Area
            information={Region}
            completeTaskHandler={props.completeTaskHandler}
            incompleteTaskHandler={props.incompleteTaskHandler}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
