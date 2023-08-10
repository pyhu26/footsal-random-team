import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Setteam from "./pages/Setteam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/setteam" element={<Setteam></Setteam>}></Route>
    </Routes>
  );
}

export default App;
