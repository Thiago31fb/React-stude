import { useState } from "react";

const Condicional = () => {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);

  }
  function linparEmail() {
    setUserEmail('');
  }
  return (
    <div>
      <h2>Cadatre o seu email: </h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {userEmail && (
          <div>
            <p>O email do usuario e: {userEmail}</p>
            <button onClick={linparEmail}>Limpar email </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Condicional;
