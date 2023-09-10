import React from "react";
import TaskList from "./components/tasklist";
import Inputs from "./components/inputs";
import AppContext from "./context";
import "./assets/css/styles.css";
import "./assets/fonts/fonts.css";

function App() {
  const [task, setTask] = React.useState("");
  const saveTask = (e) => {
    setTask(e.target.value);
  };
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = () => {
    if (task.length !== 0) {
      setTasks((tasks) => [
        ...tasks,
        {
          id: tasks.length + 1,
          task: task,
          edit: false,
        },
      ]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleEdit = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, edit: !task.edit } : task
      )
    );
  };

  const updateTask = (e, id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, task: e.target.value } : task
      )
    );
  };

  const contextValue = {
    tasks: tasks,
    task: task,
    deleteTask: deleteTask,
    saveTask: saveTask,
    addTask: addTask,
    toggleEdit: toggleEdit,
    updateTask: updateTask,
  };

  return (
    <AppContext value={contextValue}>
      <div className="container">
        <TaskList />
        <Inputs />
      </div>
    </AppContext>
  );
}

export default App;