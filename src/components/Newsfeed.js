import React, { useState, useContext } from 'react';
import feedContext from "./feedContext"
import "../CSS/Newsfeed.css"
//tHIS IS NEWSFEED

import ProjectForm from './ProjectForm';
import Modal from './Modal';
import ProjectItem from './ProjectItem';
import create from '../PICS/create.png'
import selisha from '../PICS/selisha.png'
import yadav from '../PICS/yadav.jpeg'
import elon from '../PICS/elon.png'



const Newsfeed = () => {
  const context = useContext(feedContext);
  const {projects, addPost} = context
  console.log(context, "This is context")

 

 

  const [isModalOpen, setIsModalOpen] = useState(false);
  


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitProject = (newProject) => {
    addPost(newProject)
    // Handle the project submission here
    closeModal();
  };  

  // Reverse the projects array
  const reversedProjects = [...projects].reverse();


  return (
    <div className="newsfeed">
      {!isModalOpen && (
        <button onClick={openModal}>Create a Post</button>
      )}
      {isModalOpen && (
        <> 
        <Modal closeModal={closeModal} submitProject = {submitProject}/>
        </>
      )}    

      {/* Friends' Projects */}
      <h2>Friends' Projects</h2>
      {
        reversedProjects.map((project, i) => {
          return(
            <> 
          <ProjectItem key = {i} project = {project} />

          </>
          )

        })

        
      }

      

    </div>
  );
};

export default Newsfeed;
