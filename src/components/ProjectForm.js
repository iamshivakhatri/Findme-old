import React, { useState } from 'react';

const ProjectForm = ({ submitProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [tags, setTags] = useState(''); // State for storing tags

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      description,
      picture,
      tags, // Include tags in the project object
    };



    const tagList = tags.split(',').map(item => item.trim());
    submitProject(newProject);

 
    setTitle('');
    setDescription('');
    setPicture(null);
    setTags('');
  };

 

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Share Your Project</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Picture:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPicture(e.target.files[0])}
        />
      </label>
      {picture && (
          <img
            src={URL.createObjectURL(picture)}
            alt="Selected"
            width="200"
          />
        )}
      <label>
        Tags (comma-separated):
        <input
          type="text"
          onChange={(e)=> setTags(e.target.value)}
          placeholder="Add tags and press Enter"
        />
      </label>
      
      <button type="submit">Share Project</button>
    </form>
  );
};

export default ProjectForm;
