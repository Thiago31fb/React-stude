// cd tutorial-react-net-ninja
// npx json-server --watch data/db.json --port 8000

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
