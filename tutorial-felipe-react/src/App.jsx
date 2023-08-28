// npx create-react-app tutorial-felipe-react
// cd "tutorial-felipe-react"
// npm start

// extension vs 'Simple React Snippets'

// npm install uuid

// npm install react-icons --save

// npm install react-router-dom

//  npm install axios

import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tasks from "./components/Tasks";
import AddTask from "./components/addTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

// Ex componente de classe
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state ={
//       message: 'hello worlddd'
//     };
//   }

//   componentDidMount(){
//     console.log("Foi renderizado")
//   }
//   render() {
//     return (
//       <>
//         <h1>{this.state.message}</h1>
//       </>
//     );
//   }
// }

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "estudar Programacao",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      // console.log(data);
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const hendleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };
  const delTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  hendleTaskClick={hendleTaskClick}
                  delTaskClick={delTaskClick}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
