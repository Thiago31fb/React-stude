// npx create-react-app tutorial-matheus-react
// cd tutorial-matheus-react
// npm start

import logo from "./logo.svg";
import "./App.css";

function App() {
  function soma(a, b) {
    return a + b;
  }

  const name = "Thiago";
  const newName = name.toUpperCase();

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <p>Ola {newName}</p>
      <p>Soma: {soma(2,3)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
