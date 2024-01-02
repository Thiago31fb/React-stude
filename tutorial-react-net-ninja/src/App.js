// cd tutorial-react-net-ninja
// npx json-server --watch data/db.json --port 8000

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = {
    name: "yoshi",
    age: 30,
  };
  const link = "http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
