import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from '../src/pages/Dashboard'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'

function App({setISLoggedIn}) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return <div>
    <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login setISLoggedIn={setISLoggedIn} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashbord' element={<Dashboard/>} />
   </Routes>

  </div>;
}

export default App;
