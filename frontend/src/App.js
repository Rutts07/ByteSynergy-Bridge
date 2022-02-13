import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Nav from "./components/Nav";
import Login from "././routes/Login";
import Register from "././routes/Register";
import User from "././routes/User";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav></Nav>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/user/:username" element={<User></User>}/>
      </Routes>
    </Router>
  );
}

export default App;
