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

    // <Router>
    //   <NavBar />
    //   {/* Logo
    //   <Link to="/">
    //     <img
    //       src="/path/to/your/logo.png"
    //       alt="Company Logo"
    //       style={{ cursor: "pointer", position: "absolute", top: "10px", left: "10px" }}
    //     />
    //   </Link> */}
    //   {/* Clickable Company Title
    //   <Link to="/" style={{ textDecoration: "none", color: "black", position: "absolute", top: "20px", left: "60px" }}>
    //     <h1 style={{ cursor: "pointer" }}>6541 Trust</h1>
    //   </Link> */}
    //   {/* <HomePage /> */}
    //   <FoundersPage />
    //   <HomePage />
    //   <BottomPart />
    // </Router>
  );
}

export default App;
