// npx create-react-app tutorial-matheus-react
// cd tutorial-matheus-react
// npm start

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import Contact from "./components/pages/Contact";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";


function App() {


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/alIusers" element={<Navigate to="/Users" />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
