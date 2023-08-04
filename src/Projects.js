import React, { useState } from 'react';

function Projects({ projects, addProject, deleteProject }) {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && tags && description) {
      addProject({ title, tags, description });
      setTitle('');
      setTags('');
      setDescription('');
    }
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Tags:</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Project</button>
      </form>

      {projects.length > 0 ? (
        <div>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>Tags: {project.tags}</p>
              <p>Description: {project.description}</p>
              <button onClick={() => deleteProject(index)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects added yet.</p>
      )}
    </div>
  );
}

export default Projects;
