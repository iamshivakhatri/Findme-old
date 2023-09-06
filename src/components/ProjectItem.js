import React, {useState} from 'react'
import elon from '../PICS/elon.png'


const ProjectItem = ({project}) => {

    const profileName = "Shiva Khatri";
    console.log("This is project media", project.media)
    const isImageFile = project.media instanceof File;





  return (
    <div className="project-list">


      <div className="project-item" key={project.id}>
        {/* Profile Section */}
        <div className="profile-section">
          <img src={elon} alt="Profile" className="profile-pic" />
          <p className="profile-name">{profileName}</p>
        </div>

        {/* Title and Description Section */}
        <div className="title-section">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        {/* Media Section */}
        {project.media && (
          <div className="media-section">
            {/* Display image or video here */}
            {/* Replace 'project.media' with actual media file */}
       
            {/*<img src={project.media} alt="Selected" width="200" /> */}
            <img
            src={(project.media)}
            alt="Selected"
            width="800"
          />
          
                  </div>
                )}
         {/* Media Section */}
        {isImageFile && (
          <div className="media-section">
            {/* Display image here using 'URL.createObjectURL' */}
            <img src={URL.createObjectURL(project.media)} alt="Selected" width="800" />
          </div>
        )}
      </div>

  </div>
  )
}

export default ProjectItem