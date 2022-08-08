import React from "react";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from "axios"; 
import './App.css';
import { Link } from "react-router-dom";

const App = () => {

  const[user, setUser] = useState([]);
  const getUser = async() => {
    try{
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data} = await axios.get(url, { withCredentials: true});
      setUser(data.user._json);
    }
    catch(err){
      console.log(err);

    }
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return(
    <> 
    <nav className="navbar">
    <Routes>
      <Route exact path="/" element = {<Signup />} />
      <Route path="/Login" element = {<Login />} />
      <Route path="/Home" element = {user ? <Home user={user} />:<Link to="/Signup"/>} />
    </Routes> 
    </nav>
    </>
  );
}

export default App;

