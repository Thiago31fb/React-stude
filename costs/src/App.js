// cd costs
// npm install json-server
// npm install react-icons
// npm install react-router-dom
// npm install uuid
// npm run backend

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <Navbar/>

      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  ); 
}

export default App;
