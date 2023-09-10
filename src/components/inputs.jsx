import React from "react";
import { TasksContext } from "../context.jsx";

const Inputs = () => {
  const contextValue = React.useContext(TasksContext);

  return (
    <div className="inputs">
      <input
        type="text"
        className="task-input"
        placeholder="Add your new Task"
        onChange={contextValue.saveTask}
        value={contextValue.task}
      />
      <input
        type="button"
        value="Add"
        className="add-button"
        onClick={contextValue.addTask}
      />
    </div>
  );
};

export default Inputs;
