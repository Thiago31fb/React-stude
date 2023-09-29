import ProjecForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

import { useNavigate } from "react-router-dom";
const NewProject = () => {
  const navegar = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.service = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        // redirect
        navegar("/projects", {state: { message: "Projeto criado com sucesso!" }});
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os servicos</p>
      <ProjecForm handleSubmit={createPost} btnProject="Criar Projeto" />
    </div>
  );
};

export default NewProject;
