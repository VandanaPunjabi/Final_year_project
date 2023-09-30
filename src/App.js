import React from "react";
import Login from "./Login";
import Signup from './Signup';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { All } from "./All";
import Display from "./Display";
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
     <>
    <Display/>
        <Routes>
               <Route path="/" element={<Login/>}></Route>
               <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
      </>
  );
}

export default App;
