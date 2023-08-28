import React from "react";
import Button from "./Button";

import { useParams, useNavigate } from "react-router-dom";

import "./TaskDetails.css";
const TaskDetails = () => {
  const params = useParams();
    const history = useNavigate();

    const handleBackButtonClick = () =>{
        history(-1);
    }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          eaque iste quis obcaecati soluta quasi.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
