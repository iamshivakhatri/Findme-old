import React, {useState} from 'react'
import '../CSS/profile.css'



const About = () => {
    const sampleProjects = [
        { id: 1, name: 'Project 1', description: 'Description for Project 1' },
        { id: 2, name: 'Project 2', description: 'Description for Project 2' },
        { id: 3, name: 'Project 3', description: 'Description for Project 3' },
        { id: 4, name: 'Project 4', description: 'Description for Project 4' },
        { id: 5, name: 'Project 5', description: 'Description for Project 5' },
        { id: 6, name: 'Project 6', description: 'Description for Project 6' },
        { id: 7, name: 'Project 7', description: 'Description for Project 7' },
        

        // Add more project items as needed
      ];

      const sampleContributors = [
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' },
        { id: 1, name: 'Contributor 1' },
        { id: 2, name: 'Contributor 2' }
        // Add more contributor items as needed
      ];

      const [showAllProjects, setShowAllProjects] = useState(false);
      const [showAllContributors, setShowAllContributors] = useState(false);

      // Slice the projects to show only two rows initially (adjust the number as needed)
  const visibleProjects = showAllProjects ? sampleProjects : sampleProjects.slice(0, 6);
  const visibleContributors = showAllContributors ? sampleContributors : sampleContributors.slice(0, 6);
    
   
    return (
        <div className="profile-page-container">
        {/* User Information Division */}
   
        <div className="user-info-container">
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>University Name: ABC University</p>
        <p>Major: Computer Science</p>
        {/* Add more user information as needed */}
      </div>
  
        {/* Projects Division */}
        <div className="projects-container">
          <h2 className='main-title'> Projects</h2>
          <div className="project-list">

            {visibleProjects.map((project)=>{
                return(
                <div className="project-item"> 
                <h3> {project.name} </h3>
                <p> {project.description}</p>
                </div>
                )
               
            })}

         
          </div>

         


          {!showAllProjects && sampleProjects.length >= 6 && (
            <div className="text-center">  
          <button  onClick={() => setShowAllProjects(true)}>Show More</button>
          </div>
        )}

        {showAllProjects && sampleProjects.length > 6 && (
            <div className="text-center">  
          <button  className='text-center' onClick={() => setShowAllProjects(false)}>Show Less</button>
          </div>
        )}
        </div>
  
        {/* Contributors Division */}
        <div className="contributors-container">
          <h2 className='main-title'>Contributors</h2>
          <div className="contributor-list">
          {visibleContributors.map((contributor) => (
            <div key={contributor.id} className="contributor-item">
              <p>{contributor.name}</p>
              {/* Add more details about each contributor as needed */}
            </div>
          ))}
          </div>
          {!showAllContributors && sampleContributors.length > 6 && (
            <div className="text-center">  
          <button className='text-center' onClick={() => setShowAllContributors(true)}>Show More</button>
          </div>
        )}
           {showAllContributors && (
            <div className="text-center">  
          <button  className='text-center'  onClick={() => setShowAllContributors(false)}>Show Less</button>
          </div>
        )}

        </div>
      </div>

    )
           
}

export default About
