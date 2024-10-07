
import React from 'react';
import './App.css'; // Create and customize this CSS file
import ContactForm from './ContacForm';
import { useNavigate, useParams } from 'react-router-dom';


const ProjectDetail = ({ project, onBack }) => {


  const { id } = useParams(); // Extract the project ID from the URL
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
  

    <div className="project-detail">
     
      <h2>{project.title}</h2>


    {project.type && (
      <div className="description-button">
        <img src={project.logo} alt="Logo" />
        <span>
          <span className="highlight-button">{project.type.split(" ")[0]}</span> {project.type.split(" ")[1]}
        </span>
      </div>
    )}
      <div className="project-detail-image-wrapper">
        <img src={project.image} alt={project.title} />
      </div>
      <p className="project-detailed-description">{project.detailedDescription}</p>
      <button className="go-back-button" onClick={onBack}>
        Go Back
      </button>
      {/* Add more detailed sections as needed */}
      <div id="contact"className="contact-section">
            <div className='contact-container'>
              <div className="left-contact-section">
                <h2>Contact <span className="highlight">Us</span></h2>
                <ContactForm />
              </div>
              <div className="right-contact-section">
                <div className="quote-contact-overlay">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="right-contact-section-container">
                  {/* Add any additional content or background here */}
                </div>
              </div>
            </div>
          </div>
    </div>

  
    
  );
};

export default ProjectDetail;
