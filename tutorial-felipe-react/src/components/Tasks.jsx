import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, hendleTaskClick, delTaskClick }) => {
  // console.log(props);

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          hendleTaskClick={hendleTaskClick}
          delTaskClick={delTaskClick}
        />
      ))}
    </>
  );
};

export default Tasks;
