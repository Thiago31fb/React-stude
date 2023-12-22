// cd tutorial-react-net-ninja
// npx json-server --watch data/db.json --port 8000
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = {
    name: "yoshi",
    age: 30,
  };
const link = "http://www.google.com"
  return (
    <div className="App">
        <Navbar/>
      <div className="content">
        <Home/>
    
      </div>
    </div>
  );
}

export default App;
