import React, { useState } from 'react';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Find me',
      description: 'I am developing the find me app.',
      media: create, // Replace with actual URL or leave blank

    },
    {
      id: 2,
      title: 'Recipe Sharing App',
      description: 'Hi guys, I am using AI and trying to make the recipe app. If anyone is interested you can comment down.',
      media: create, // Replace with actual URL or leave blank

    },
    {
        id: 3,
        title: 'Nourish Kid',
        description: 'I am very good at gpting stuff and you can almost call me gpt yadav. I am good at talking',
        media: create, // Replace with actual URL or leave blank

      }
    ]
  );


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitProject = (newProject) => {
    let thisid = projects.length + 1;

    const addProject = {
      id: thisid,
      title: newProject.title,
      description: newProject.description,
      media: newProject.picture

    }
    setProjects([...projects, addProject]);

    // Handle the project submission here
    closeModal();
  };  



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
        projects.map((project, i) => {
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
