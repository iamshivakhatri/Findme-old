import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import elon from '../PICS/elon.png'
import '../CSS/Navbar.css'; // Create a CSS file named 'Navbar.css' and include the styles there
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Navbar = () => {

  const handleClick = (event) => {
    // Your code to handle the click event goes here
  

    if (event.target.classList.contains('nav-icon') || event.target.closest('.nav-icon')) {
      console.log('clicked on the icon');
    }else{
      console.log('not clicked on the icon');
      setShowProfileDropdown(false);
      setShowMessageDropdown(false);
      setShowNotificationDropdown(false);
    }

  }

  

  useEffect(() => {
    // Add the click event listener when the component mounts
    document.addEventListener('click', handleClick);

    // Remove the click event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);



  

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMessageDropdown, setShowMessageDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  // Function to toggle the visibility of the dropdowns
  const toggleDropdown = (dropdownType) => {
    if (dropdownType === 'profile') {
      setShowProfileDropdown(!showProfileDropdown);
      setShowMessageDropdown(false);
      setShowNotificationDropdown(false);
    } else if (dropdownType === 'message') {
      setShowMessageDropdown(!showMessageDropdown);
      setShowNotificationDropdown(false);
      setShowProfileDropdown(false);

    } else if (dropdownType === 'notification') {
      setShowNotificationDropdown(!showNotificationDropdown);
      setShowProfileDropdown(false);
      setShowMessageDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to= "./" className="company-name"> 
          Findme
        </Link>  
        <Link to= "./landingpage" className = "company-name"> 
          Landingpage
        </Link>  
        <Link to= "./newsfeed" className = "company-name"> 
          NewsFeed
        </Link>  
      </div>
      <div className="navbar-right">
        <div className="icon-right">  

        <Link href="#" className="nav-icon" onClick={() => toggleDropdown('profile')}>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Link>
    



        <Link href="#" className="nav-icon" onClick={() => toggleDropdown('message')}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Link>
        <Link href="#" className="nav-icon" onClick={() => toggleDropdown('notification')}>
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Link>
        </div>


      </div>
      {/* Profile Dropdown */}
      {showProfileDropdown && (
        <div className="dropdown" >
        <div className="profile-info">
        <Link to="/profile">
        <img src= {elon} alt="User Profile" className="user-picture" />
        </Link>

        <Link to="/profile">
          <p className="name">Elon Musk</p>
          
        </Link>
        

          <p className="university">University of Example</p>
          <p className="major">Computer Science</p>
        </div>
        <button className="signout-btn">Sign Out</button>
      </div>

      )}
      {/* Message Dropdown */}
      {showMessageDropdown && (
        <div className="dropdown">
          {/* Add message content here */}
          <p>Message information goes here...</p>
        </div>
      )}
      {/* Notification Dropdown */}
      {showNotificationDropdown && (
        <div className="dropdown">
          {/* Add notification content here */}
          <p>Notification information goes here...</p>
        </div>
      )}
    
    </nav>
  );
};

export default Navbar;
