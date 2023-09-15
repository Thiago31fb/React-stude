// npx create-react-app tutorial-matheus-react
// cd tutorial-matheus-react
// npm start

import "./App.css";
import OutraLista from "./components/OutraLista";

function App() {
  const meusItens = ["react", "vue", "Angular"];

  return (
    <div className="App">
      <h1>Renderizacao de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
