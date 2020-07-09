import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/layout/NavigationBar";
import LoginPage from "./components/pages/Login";
import ProtectedRoute from "./components/pages/Protected";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={LoginPage} />
      <Route path="/protected" component={ProtectedRoute} />
    </div>
  );
}

export default App;
