/* eslint-disable default-case */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import OrganizationsPage from "./components/OrganizationsPage";
import FoundersPage from "./components/FoundersPage";
import BottomPart from "./components/BottomPart";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <HomePage /> */}
      <FoundersPage />
      <BottomPart />
      {/* <Routes>
        <Route path="/" exact component={<HomePage />} />
        <Route path="/activities" component={Activities} />
        <Route path="/founder" component={<FoundersPage />} />
        <Route path="/organizations" component={<OrganizationsPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;
