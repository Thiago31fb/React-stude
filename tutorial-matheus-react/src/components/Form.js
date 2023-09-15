import { useState } from "react";

const Form = () => {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);

    console.log(`Cadastrou o usuario!`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            // value={name}
            placeholder="DIgite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="DIgite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="CADASTRAR" />
        </div>
      </form>
    </div>
  );
};

export default Form;
