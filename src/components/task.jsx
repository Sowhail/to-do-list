import React from "react";
import editIcon from "../assets/icons/edit-button.svg";
import deleteIcon from "../assets/icons/delete.svg";
import checkIcon from "../assets/icons/check.svg";
import { TasksContext } from "../context.jsx";

const Task = (props) => {
  const contextValue = React.useContext(TasksContext);

  return (
    <div className="task-box">
      <h3 style={{ display: props.task.edit ? "none" : "block" }}>
        {props.task.task}
      </h3>
      <input
        style={{ display: props.task.edit ? "" : "none" }}
        type="text"
        className="edit-input"
        defaultValue={props.task.task}
        onChange={(e) => contextValue.updateTask(e, props.task.id)}
      />
      <div className="options">
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => contextValue.deleteTask(props.task.id)}
        />
        {!props.task.edit ? (
          <img
            src={editIcon}
            alt="edit"
            onClick={() => contextValue.toggleEdit(props.task.id)}
          />
        ) : (
          <img
            src={checkIcon}
            alt="edit"
            onClick={() => contextValue.toggleEdit(props.task.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
