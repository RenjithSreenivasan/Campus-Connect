import React, { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();

function AppContextProvider({ children }) {

  // Tasks state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare Project Documentation",
      priority: "Medium",
      completed: false,
    },
  ]);

  // Add Task
  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Toggle Task
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;