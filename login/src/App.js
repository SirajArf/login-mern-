import './App.css';
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Email from "./components/email/email";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

   const [ user, setLoginUser] = useState({})


return (
  <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/email" element={<Email />}/>
       
      </Routes>
    </Router>
    
  </div>
)
}

export default App;
