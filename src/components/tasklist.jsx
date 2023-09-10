import React from "react";
import Task from "./task";
import { TasksContext } from "../context.jsx";

const TaskList = () => {

    const contextValue = React.useContext(TasksContext);

  return (
    <div className="task-list">
      <div className="tasks">
        {contextValue.tasks.map((task, index) => {
          return <Task key={index} task={task}/>;
        })}
      </div>
    </div>
  );
};

export default TaskList;
