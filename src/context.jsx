import React from "react";

export const TasksContext = React.createContext();

const AppContext = (props) => {
  return (
    <TasksContext.Provider value={props.value}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default AppContext;
