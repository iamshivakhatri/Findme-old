import React, { useState } from 'react';
import "./Newsfeed.css"
import elon from './elon.png'
import create from './create.png'
import selisha from './selisha.png'
import yadav from './yadav.jpeg'


const Newsfeed = () => {
  // Dummy data for user's projects and friends' projects
  const [userProjects, setUserProjects] = useState([
    {
      id: 1,
      name: 'My Project 1',
      description: 'This is my first project.',
    },
    {
      id: 2,
      name: 'My Project 2',
      description: 'This is my second project.',
    },
  ]);

  const [friendsProjects, setFriendsProjects] = useState([
    {
      id: 1,
      profilePic: elon,
      name: 'Elon Musk',
      title: 'Find me',
      description: 'I am developing the find me app.',
      media: create, // Replace with actual URL or leave blank
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      profilePic: selisha,
      name: 'Selisha Thapa',
      title: 'Recipe Sharing App',
      description: 'Hi guys, I am using AI and trying to make the recipe app. If anyone is interested you can comment down.',
      media: create, // Replace with actual URL or leave blank
      likes: 15,
      comments: 3,
    },
    {
        id: 3,
        profilePic: yadav,
        name: 'Abhishek Yadav',
        title: 'Nourish Kid',
        description: 'I am very good at gpting stuff and you can almost call me gpt yadav. I am good at talking',
        media: create, // Replace with actual URL or leave blank
        likes: 4,
        comments: 2,
      },
      {
        id: 4,
        profilePic: 'url_to_friend_2_profile_pic.jpg',
        name: 'Friend 2',
        title: 'Friend\'s Project 2',
        description: 'This is my friend\'s second project.',
        media: 'url_to_video_file.mp4', // Replace with actual URL or leave blank
        likes: 15,
        comments: 3,
      }
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
  });

  const handleCreateProject = () => {
    // Logic to handle creating a new project
    // You can add this project to the database and update the state
    console.log('New project created:', newProject);
    setFriendsProjects([...friendsProjects, newProject]);
    setNewProject({
      name: '',
      description: '',
    });
  };

  return (
    <div className="newsfeed">
      {/* Create Project Form */}
      <div className="create-project-form">
        <h2>Create a New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>

      {/* Friends' Projects */}
      <h2>Friends' Projects</h2>
      <div className="project-list">
        {friendsProjects.map((project) => (
          <div className="project-item" key={project.id}>
            {/* Profile Section */}
            <div className="profile-section">
              <img src={project.profilePic} alt="Profile" className="profile-pic" />
              <p className="profile-name">{project.name}</p>
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
                <img src={project.media} alt="Media" />
              </div>
            )}

            {/* Like and Comment Section */}
            <div className="like-comment-section">
              <p>Likes: {project.likes}</p>
              <p>Comments: {project.comments}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
