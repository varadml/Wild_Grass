import logo from './logo.svg';

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import './App.css';
import { React, useEffect, useState } from 'react'
import { getAuth, signOut ,onAuthStateChanged}
    from "firebase/auth";
import { auth } from './firebase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const[user,setuser]=useState({});

  useEffect(() => {
    onAuthStateChanged(auth,(currentUser) =>{
      setuser(currentUser); 
     });
    },[])
    console.log(user);
  return (
    <div className="App">
      <Router>
      {user?    <Home/>:<Login/>}
      </Router>
      


    </div>
  );
}

export default App;
