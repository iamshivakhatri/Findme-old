import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import '../src/CSS/App.css'
import Login2 from "./components/login2";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProfilePage from './components/Profilepage'; 
import Home from './components/Home'
import Landingpage from './components/Landingpage';
import Newsfeed from './components/Newsfeed';



function App() {

  const [newsfeed, setNewsfeed] = useState([]);

  //
  const addFeed = (passedFeed)=>{


    setNewsfeed(...newsfeed, passedFeed);
  }


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
       <Route path="/newsfeed" element={<Newsfeed />} />

    </Routes>
  </Router>


  );
}

export default App;
