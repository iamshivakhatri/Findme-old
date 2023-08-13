import React, {useState} from 'react'
import '../CSS/profile.css'
import elon from '../PICS/elon.png'
import { Link } from 'react-router-dom'

const About = () => {
    const sampleProjects = [
      {
        name: 'Project 1',
        description: 'This is the description of Project 1.',
        link: 'https://example.com/project1',
        contributors: [
          { name: 'Shiva khatri', profileLink: 'https://example.com/contributor1' },
          { name: 'Contributor 2', profileLink: 'https://example.com/contributor2' },
        ],
      },
      {
        name: 'Project 2',
        description: 'This is the description of Project 2.',
        link: 'https://example.com/project2',
        contributors: [
          { name: 'Contributor 3', profileLink: 'https://example.com/contributor3' },
          { name: 'Contributor 4', profileLink: 'https://example.com/contributor4' },
        ],
      },
      {
        name: 'Project 3',
        description: 'This is the description of Project 3.',
        link: 'https://example.com/project3',
        contributors: [
          { name: 'Contributor 5', profileLink: 'https://example.com/contributor5' },
          { name: 'Contributor 6', profileLink: 'https://example.com/contributor6' },
        ],
      },
      {
        name: 'Project 3',
        description: 'This is the description of Project 3.',
        link: 'https://example.com/project3',
        contributors: [
          { name: 'Contributor 5', profileLink: 'https://example.com/contributor5' },
          { name: 'Contributor 6', profileLink: 'https://example.com/contributor6' },
        ],
      },
      {
        name: 'Project 3',
        description: 'This is the description of Project 3.',
        link: 'https://example.com/project3',
        contributors: [
          { name: 'Contributor 5', profileLink: 'https://example.com/contributor5' },
          { name: 'Contributor 6', profileLink: 'https://example.com/contributor6' },
        ],
      },
      {
        name: 'Project 3',
        description: 'This is the description of Project 3.',
        link: 'https://example.com/project3',
        contributors: [
          { name: 'Contributor 5', profileLink: 'https://example.com/contributor5' },
          { name: 'Contributor 6', profileLink: 'https://example.com/contributor6' },
        ],
      },
      // Add more projects here...
      {
        name: 'Project 7',
        description: 'This is the description of Project 7.',
        link: 'https://example.com/project7',
        contributors: [
          { name: 'Contributor 11', profileLink: 'https://example.com/contributor11' },
          { name: 'Contributor 12', profileLink: 'https://example.com/contributor12' },
        ],
      },
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

        <div className="left-info-container">  
        <img src= {elon} alt="User Profile" className="user-picture" />
        </div>

        <div className="right-info-container"> 
        <h2>Elon Musk</h2>
        <p>University Of Mars</p>
        <p>Computer Science</p>
        </div>
        {/* Add more user information as needed */}
      </div>
  
        {/* Projects Division */}
        <div className="projects-container">
          <h2 className='main-title'> Projects</h2>
          <div className="project-list">

            {visibleProjects.map((project)=>{
                return(
                <div className="project-item" key={project.name}> 
                <h3> {project.name} </h3>
                <p> {project.description}</p>
                <a href={project.link} className="project-link">
              View Project
            </a>

            <div className="contributors-section">
              {project.contributors.map((contributor) => (
                <Link to={contributor.profileLink} className="contributor-avatar" key={contributor.name}>
                <img src={contributor.imageSrc} alt={contributor.name} />
              </Link>
              ))}
            </div>


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
