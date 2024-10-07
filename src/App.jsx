// src/App.jsx

import React, { useState } from 'react';
import './App.css';
import Footer from './footer.jsx';
import ContactForm from './ContacForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DevelopmentTools from './DevelopmentTools.jsx';
import Navbar from './Navbar.jsx';
import ProjectDetail from './ProjectDetails.jsx'; // New component
import Modal from 'react-modal';


Modal.setAppElement('#root');

function App() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);


  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Community Builders Alliance",
      type: "Web Development",
      logo: "/assets/webd.svg",
      detailedDescription: "A unilevel marketing company website that serves as a hub for showcasing the company's products, services, and business opportunities. It typically features an easy-to-navigate interface where users can learn about the compensation plan, join as distributors, access training resources, and monitor their network growth.",
      image: "/assets/proj11.svg"
    },
    {
      id: 2,
      title: "Violeta Management System",
      type: "Web Development",
      logo: "/assets/webd.svg",
      detailedDescription: "The Barangay Violeta Management System is a comprehensive digital platform designed to streamline and automate barangay operations. It offers tools for managing resident records, barangay clearances, permits, and community services efficiently. ",
      image: "/assets/proj22.svg"
    },
    {
      id: 3,
      title: "BukSU Internship System",
      type: "Web Development",
      logo: "/assets/webd.svg",
      detailedDescription: "The BukSU Internship Management System is a dedicated platform for managing and streamlining internship programs at Bukidnon State University. It enables students to easily apply for internships, track their progress, and submit required documents, while providing faculty and administrators tools to manage placements, monitor student performance, and coordinate with partner companies.",
      image: "/assets/proj3.svg"
    },
    {
      id: 4,
      title: "ACLC Smart Classroom ",
      type: "IoT Solutions",
      logo: "/assets/iot.svg",
      detailedDescription: "The Smart Classroom and Biometric Security IoT Solution is an innovative system designed to enhance educational environments through automation and security. It integrates IoT devices for smart lighting, climate control, and multimedia management, optimizing the classroom for an interactive and efficient learning experience.",
     image: "/assets/proj4.svg"
    },
    {
      id: 5,
      title: "MedsMate App",
      type: "Mobile Development",
      logo: "/assets/webd.svg",
      detailedDescription: "Meds Mate is a user-friendly prescription management mobile app designed to simplify medication tracking and reminders. It allows users to store, manage, and track their prescriptions, set custom medication reminders, and receive notifications for refills. ",
      image: "/assets/proj555.svg"
    },
    {
      id: 6,
      title: "Roadside Assitance",
      type: "Mobile Development",
      logo: "/assets/webd.svg",
      detailedDescription: "The Roadside Assistance Mobile App is a reliable platform designed to provide users with quick access to emergency services for vehicle breakdowns. With just a few taps, users can request assistance for flat tires, towing, battery jump-starts, fuel delivery, and more. The app features real-time GPS tracking, allowing users to monitor the arrival of help, while offering secure payment options and 24/7 support.",
      image: "/assets/proj6.svg"

    },
    // Add more projects as needed
  ];



  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Optionally, lock the scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsExiting(true); // Start the exit animation
    setTimeout(() => {
      setIsModalOpen(false); // Close the modal after the animation
      setSelectedProject(null);
      document.body.style.overflow = 'auto'; // Restore background scrolling
      setIsExiting(false); // Reset exit state
    }, 300); // Match this duration with the animation duration
  };
  

  return (
    <Router>
    <div className="App">
      <Navbar />

      <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

  

      {/* Main Content */}
     
        <>
          {/* Company Section */}
          <div id="home" className="company-section">
            <div className="left-section">
              <h2>We build what you need.</h2>
              <div className="buttons">
              <a href="#services">
                  <button className="rounded-button">Learn More</button>
                </a>
                <a href="#contact">
                  <button className="rounded-button">Let's Work Together</button>
                </a>
              </div>
            </div>
            <div className="right-section">
              <p>
              Work with dedicated developers in the Philippines who are passionate about developing software that fits your needs and goals.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <div className="quote-overlay">
              <p>Software solutions to support your modern vision.</p>
            </div>
            <img src="/assets/Pattern2_n.jpg" alt="Pattern2" />
          </div>

          {/* Services Section */}
          <div id="services" className="services-section">
            <div className="services-content">
              <h2>Explore Our <span className="highlight">Services</span></h2>
              <p>Noderno Tech enables your company with success through an extensive range of software development services.</p>
            </div>
            <div className="services-buttons">
              <div className="button-group">
                <div className="service-button">
                  <img src="/assets/webd.svg" alt="UI/UX Logo" />
                  <span>
                    <span className="highlight-button">UI/UX</span> Design
                  </span>
                </div>
                <div className="service-button">
                  <img src="/assets/Code.svg" alt="Web Development Logo" />
                  <span>
                    <span className="highlight-button">Web</span> Development
                  </span>
                </div>
              </div>
              <div className="button-group">
                <div className="service-button">
                  <img src="/assets/developer.svg" alt="Mobile Development Logo" />
                  <span>
                    <span className="highlight-button">Mobile</span> Development
                  </span>
                </div>
                <div className="service-button">
                  <img src="/assets/IoT.svg" alt="IoT Solutions Logo" />
                  <span>
                    <span className="highlight-button">IoT</span> Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" className="projects-section">
              <h2>
                Our <span className="highlight">Projects</span>
              </h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`project-card ${index === 0 ? 'first-card' : ''}`} // Conditional class for the first card
                    onClick={() => handleProjectClick(project)} // Make the whole card clickable
                    role="button" // Improves accessibility
                    tabIndex={0} // Makes it focusable
                    aria-label={`View details of ${project.title}`} // Adds an aria label for screen readers
                  >
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <h3>{project.title}</h3>
                    <div className="project-row">
                    <div className="project-description-button">
                      <img className="icon" src={project.logo} alt="Logo" />
                      <span>
                        <span className="highlight-button">
                          {project.type.split(" ")[0]}
                        </span>{" "}
                        {project.type.split(" ")[1]}
                      </span>
                    </div>
                    {/* Keep the button for style purposes */}
                    <button 
                      className="arrow-button" 
                      aria-label={`View details of ${project.title}`} // Accessible label
                     
                    >
                      <img src="/assets/circle.svg" alt="View Project" className="arrow-icon" />
                    </button>
                    </div>
                   
                  </div>
                ))}
              </div>
            </div>



        {/* Modal for project details */}
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details Modal"
            className="Modal"
            overlayClassName="Overlay"
          >
            {selectedProject && (
              <div className="modal-content">
                {/* Title and Description Button Section */}
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-description-button">
                    <img src={selectedProject.logo} alt="Logo" />
                    <span>
                      <span className="highlight-button">
                        {selectedProject.type.split(" ")[0]}
                      </span>{" "}
                      {selectedProject.type.split(" ")[1]}
                    </span>
                  </div>
                </div>

                {/* Image Section */}
                <div className="project-detail-image-wrapper">
                  <img className="modal-img"src={selectedProject.image} alt={selectedProject.title} />
                </div>

                {/* Detailed Description */}
                <p className="project-detailed-description">
                  {selectedProject.detailedDescription}
                </p>

                {/* Close Button */}
                <button className="close-modal-button" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </Modal>

          {/* Development Tools */}
          <DevelopmentTools />

          {/* Contact Section */}
          <div id="contact" className="contact-section">
            <div className='contact-container'>
              <div className="left-contact-section">
                <h2>Contact <span className="highlight">Us</span></h2>
                <ContactForm />
              </div>
              <div className="right-contact-section">
                <div className="quote-contact-overlay">
                  
                </div>
                <div className="right-contact-section-container">
                  {/* Add any additional content or background here */}
                </div>
              </div>
            </div>
          </div>
        </>
      
        
       
      

      <Footer />
    </div>
    </Router>
  
  );
}

export default App;
