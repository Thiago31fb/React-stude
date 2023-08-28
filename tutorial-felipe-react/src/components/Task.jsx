// imr
import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./Task.css";
// sfc
const Task = ({ task, hendleTaskClick, delTaskClick }) => {
  const history = useNavigate();

  const handleTaskDetailsClick = () => {
    history(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => hendleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button-container">
        <button
          className="remove-task-button"
          onClick={() => delTaskClick(task.id)}
        >
          <CgClose />
        </button>

        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );

  //   return <div className="task-container">{task.title}</div>;
};

export default Task;
