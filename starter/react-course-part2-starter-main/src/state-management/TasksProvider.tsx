import React, { ReactNode, useReducer } from "react";
import taskReducer from "./reducers/taskReducer";
import TaskContext from "./contexts/tasksContext";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
