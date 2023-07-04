import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
