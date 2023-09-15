// npx create-react-app tutorial-matheus-react
// cd tutorial-matheus-react
// npm start

import "./App.css";
import Condicional from "./components/Condicional";

import Evento from './components/Evento'
import Form from "./components/Form";

function App() {

  return (
    <div className="App">
      <h1>Renderizacao condicional</h1>
      <Condicional/>
    </div>
  );
}

export default App;
