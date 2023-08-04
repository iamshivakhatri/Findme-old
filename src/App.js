import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Login2 from "./components/login2";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProfilePage from './components/Profilepage'; 
import Home from './components/Home'
import Landingpage from './components/Landingpage';



function App() {


  return (
    <Router>
    <Navbar />
    <Routes>
    <Route
              path="/"
              element={
             
                  <Home/>
            
              }
            />
       <Route path="/profile" element={<ProfilePage />} />
       <Route path="/landingpage" element={<Landingpage />} />

    </Routes>
  </Router>


  );
}

export default App;
