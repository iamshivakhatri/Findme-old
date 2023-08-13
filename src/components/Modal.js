import React from 'react';
import ProjectForm from './ProjectForm';

const Modal = ({ children, closeModal, submitProject }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <ProjectForm submitProject = {submitProject}/>
        
      </div>
    </div>
  );
};

export default Modal;
