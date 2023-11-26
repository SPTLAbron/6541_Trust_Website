import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import FoundersPage from "./components/FoundersPage";
import BottomPart from "./components/BottomPart";
import HomePage from "./components/HomePage";
import EducationPage from "./components/EducationPage";
import MedicalPage from "./components/MedicalPage";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <HomePage />;
      break;
    case "/founders":
      Component = <FoundersPage />;
      break;
    case "/medical":
      Component = <MedicalPage />;
      break;
    case "/education":
      Component = <EducationPage />;
      break;

    default:
      return null;
  }

  console.log(window.location);
  return (
    <Router>
      <NavBar />
      {Component}
      <BottomPart />
    </Router>
  );
}

export default App;
