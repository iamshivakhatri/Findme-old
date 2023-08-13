import React from 'react';
import '../CSS/Landingpage.css'; 
import { Link } from 'react-router-dom';
import create from '../PICS/create.png'
import share from '../PICS/share.png'
import collaborate from '../PICS/collaborate.png'

import elon from '../PICS/elon.png'
import Collaborate from '../PICS/collobarative.png'
import commenting from '../PICS/commenting.png'
import doctor from '../PICS/doctor.png'
import appreciation from '../PICS/showingappreciation.png'

const Landingpage = () => {
    const features = [
        {
          id: 1,
          icon: <i className="fas fa-users"></i>,
          title: 'Collaborative Community',
          description: "Welcome to the Collaborative Community! Join us to connect with like-minded creators and collaborate on exciting projects together. Unleash your creativity and explore endless possibilities as you work together to bring your ideas to life. Whether you're a seasoned professional or just starting, this platform provides the perfect space to share, inspire, and grow. Let's create something extraordinary, together!"
        },
        {
          id: 2,
          icon: <i className="fas fa-lightbulb"></i>,
          title: 'Inspiration Everywhere',
          description: 'Discover a wide range of innovative projects and find inspiration for your own creations.',
        },
        {
          id: 3,
          icon: <i className="fas fa-heart"></i>,
          title: 'Like and Share',
          description: 'Show appreciation for projects you love by liking and sharing them with your network.',
        },
        {
          id: 4,
          icon: <i className="fas fa-comment"></i>,
          title: 'Engage and Comment',
          description: 'Join discussions, provide feedback, and offer valuable insights on project pages.',
        },
      ];

      const projects = [
        {
          id: 1,
          title: 'Project One',
          creator: 'John Doe',
          previewImage: '/images/project1.jpg',
          likes: 150,
          comments: 25,
        },
        {
          id: 2,
          title: 'Project Two',
          creator: 'Jane Smith',
          previewImage: '/images/project2.jpg',
          likes: 200,
          comments: 45,
        },
        // Add more dummy projects as needed
      ];

      const communityStories = [
        {
          id: 1,
          user: 'John Doe',
          image: '/images/community1.jpg',
          story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus vel justo fringilla pharetra. Pellentesque vel commodo ipsum, eget rhoncus mi.',
        },
        {
          id: 2,
          user: 'Jane Smith',
          image: '/images/community2.jpg',
          story: 'Cras eget ex elit. Ut sed libero in sapien vestibulum ultrices. Fusce rhoncus nunc ac risus gravida, at facilisis velit egestas. Sed sagittis, mi in pellentesque.',
        },
        // Add more dummy community stories as needed
      ];

     
        // Dummy data for testimonials
        const testimonials = [
          {
            id: 1,
            name: '1John Doe',
            position: 'CEO, ABC Company',
            image: {elon},
            message: 'Lorem ipsum dolor sit amet,Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum, ',
          },
          {
            id: 2,
            name: '2Jane Smith',
            position: 'Designer, XYZ Studio',
            image: {elon},
            
            message: 'Pellentesque vel commodo. Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum,',
          },
          {
            id: 1,
            name: '3John Doe',
            position: 'CEO, ABC Company',
            image: './elon.png',
            message: 'Lorem ipsum dolor sit amet.Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum,',
          },
          {
            id: 2,
            name: '4Jane Smith',
            position: 'Designer, XYZ Studio',
            image: {elon},
            message: 'Pellentesque vel commodo ipsum,Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum,',
          },
          {
            id: 1,
            name: '5John Doe',
            position: 'CEO, ABC Company',
            image: {elon},
            message: 'Lorem ipsum dolor sit amet, Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum,',
          },
          {
            id: 2,
            name: '6Jane Smith',
            position: 'Designer, XYZ Studio',
            image: {elon},
            message: 'Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum, ',
          },
          {
            id: 1,
            name: '1John Doe',
            position: 'CEO, ABC Company',
            image: {elon},
            message: 'Lorem ipsum dolor sit amet, consectetur Pellentesque vel commodo ipsum, Pellentesque vel commodo ipsum,',
          }
        
          // Add more dummy testimonials as needed
        ];

        const howItWorksSteps = [
            {
              id: 1,
              title: 'Step 1: Create Your Profile',
              image: create,
              description: 'Sign up and create your profile on "Findme." Showcase your skills and projects to the community.',
            },
            {
              id: 2,
              title: 'Step 2: Share Your Projects',
              image: share,
              description: 'Share your ongoing projects and ideas with the community. Get feedback and collaboration requests.',
            },
            {
              id: 3,
              title: 'Step 3: Collaborate and Engage',
              image: collaborate,
              description: 'Engage with other users, collaborate on exciting projects, and explore new opportunities.',
            },
            // Add more dummy "How It Works" steps as needed
          ];
        
    
  return (
    <div className="landing-page-container">
      {/* Hero Section */}
      <section className="hero-section">
     
        <div className="hero-content">
          <h1>Collaborate and Create with Findme</h1>
          <p>Discover and share projects with a vibrant community of creators.</p>
          <button className="cta-button">Get Started</button>
        </div>

      </section>

         {/* How It Works */}
         <section className="how-it-works-section">
        {/* Step-by-step guide on how "Findme" works */}
        <div className="how-it-works-container">
          {howItWorksSteps.map((step) => (
            <div key={step.id} className="how-it-works-step">
              <div className="step-image">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
<section className="feature-section"> 

<section className="main-section">
  <div className="main-container">
    <div className="left-section-design">
      
      <div className="left-overlay">

      </div>
      <div className="left-picture">
        <img src={Collaborate} alt="Your Image" />

      </div>


    </div>
    <div className="right-section">
      <h2> Collaborative-Community</h2>
      <p>
      Welcome to the Collaborative Community! Join us to connect with like-minded creators and collaborate on
       exciting projects together. Unleash your creativity and explore endless possibilities as you work together to bring your ideas to life.
      This platform provides the perfect space to share, inspire, and grow. Let's create something extraordinary, together!
      </p>
    </div>
  </div>
</section>

{/** This is second*/}

<section className="main-section-reverse">
  <div className="main-container-reverse">
  <div className="left-section-text">
      <h2>Engage and Comment</h2>
      <p>
      Join the conversation, offer constructive feedback, and inspire others to
       reach new heights with their projects. Contribute to the growth and success of diverse 
       collaborations. Embrace this chance to connect, share, and make a meaningful impact.
        
      </p>
    </div>

    <div className="right-section-design">
      
      <div className="right-overlay">

      </div>
      <div className="right-picture">
        <img src={commenting} alt="Your Image" />

      </div>


    </div>
  
  </div>
</section>





{/**This is third */}

<section className="main-section">
  <div className="main-container">
    <div className="left-section-design">
      
      <div className="left-overlay">

      </div>
      <div className="left-picture">
        <img src={doctor} alt="Your Image" />

      </div>


    </div>
    <div className="right-section">
      <h2>Get Inspired</h2>
      <p>
      Explore a diverse array of innovative projects and find endless inspiration 
      for your own creative endeavors. Unleash your imagination and let it soar as you
       discover the incredible possibilities within our collaborative community. Get ready 
       to be inspired and take your projects to new heights!
        
      </p>
    </div>
  </div>
</section>









{/**This is fourth */}

<section className="main-section-reverse">
  <div className="main-container-reverse">
  <div className="left-section-text">
      <h2>Like and Share</h2>
      <p>
      Express your appreciation for the projects you love by liking and sharing them with your network.
      Spread creativity and inspiration, build a supportive community where innovative
        ideas flourish. Engage to the excitement of discovering remarkable talent. 
        
      </p>
    </div>

    <div className="right-section-design">
      
      <div className="right-overlay">

      </div>
      <div className="right-picture">
        <img src={appreciation} alt="Your Image" />

      </div>


    </div>
  
  </div>
</section>





</section>


      


      {/* Project Feed 
      <section className="project-feed-section">
        Project cards with project title, creator, and preview 

        <div className="project-cards-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.previewImage} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>By {project.creator}</p>
                <div className="project-actions">
                  <div className="like-button">
                    <i className="fas fa-heart"></i>
                    <span>{project.likes}</span>
                  </div>
                  <div className="comment-button">
                    <i className="fas fa-comment"></i>
                    <span>{project.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
          */}

    





{/* 
         Warning!
         message prop requires a string 
    



      <section className="testimonials-section">
        

        <div className="testimonials-container">  


        <div className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card ">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
     
                <p className="testimonial-message">{testimonial.message}</p>
         
                
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-message">{testimonial.message}</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        </div>


      </section>

       */}

       

 



   

      {/* Sign-up and Get Started */}
      <section className="signup-section">
     
        {/* Sign-up form and CTA buttons */}
        <h2>Join the Collaborative Community Today</h2>
        <div className="signup-form">
          <input type="text" placeholder="Your Email" />
          <input type="email" placeholder="Your password" />
          <button className="signup-button">Sign Up</button>
        </div>
      </section>





      

      {/* Footer */}
      <footer className="footer-section">
        {/* Footer content with links and social media icons */}

      
      </footer>
    </div>
  );
}

export default Landingpage;
