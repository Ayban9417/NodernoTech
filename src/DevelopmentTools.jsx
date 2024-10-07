import React, { useEffect, useRef } from 'react';
import './App.css';

const DevelopmentTools = () => {
  const toolsRef = useRef(null);

  useEffect(() => {
    const toolsSection = toolsRef.current;
    const toolImages = toolsSection.querySelectorAll('img');

    const observerOptions = {
      root: null, // Defaults to the viewport
      rootMargin: '0px',
      threshold: 0.1, // 10% of the element is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the float-animation class when the section is in view
          toolImages.forEach(img => img.classList.add('float-animation'));
        } else {
          // Remove the float-animation class when the section is out of view
          toolImages.forEach(img => img.classList.remove('float-animation'));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (toolsSection) {
      observer.observe(toolsSection);
    }

    
    return () => {
      if (toolsSection) {
        observer.unobserve(toolsSection);
      }
    };
  }, []);

  return (
    <div className="development-tools" ref={toolsRef}>
    <h2>Development <span className="highlight">Tools</span></h2>

    <div className="tools-row">
    <div className="tool">
      <img src="/assets/figma.png" alt="Figma" />
      <span className="tooltip">Figma</span>
    </div>
    <div className="tool">
      <img src="/assets/html5.png" alt="HTML5" />
      <span className="tooltip">HTML5</span>
    </div>
    <div className="tool">
      <img src="/assets/css3.png" alt="CSS3" />
      <span className="tooltip">CSS3</span>
    </div>
    <div className="tool">
      <img src="/assets/react.png" alt="ReactJS" />
      <span className="tooltip">ReactJS</span>
    </div>
    <div className="tool">
      <img src="/assets/js.png" alt="JavaScript" />
      <span className="tooltip">JavaScript</span>
    </div>
    <div className="tool">
      <img src="/assets/nodejs.svg" alt="NodeJS" />
      <span className="tooltip">NodeJS</span>
    </div>
  </div>
  <div className="tools-row">
    <div className="tool">
      <img src="/assets/php.png" alt="PHP" />
      <span className="tooltip">PHP</span>
    </div>
    <div className="tool">
      <img src="/assets/flutter.png" alt="Flutter" />
      <span className="tooltip">Flutter</span>
    </div>
    <div className="tool">
      <img src="/assets/android.png" alt="Android" />
      <span className="tooltip">Android</span>
    </div>
    <div className="tool">
      <img src="/assets/c.png" alt="C" />
      <span className="tooltip">C</span>
    </div>
    <div className="tool">
      <img src="/assets/java.png" alt="Java" />
      <span className="tooltip">Java</span>
    </div>
    <div className="tool">
      <img src="/assets/post.png" alt="PostgreSQL" />
      <span className="tooltip">PostgreSQL</span>
    </div>
    <div className="tool">
      <img src="/assets/Frame.svg" alt="MySQL" />
      <span className="tooltip">MySQL</span>
    </div>
  </div>
    </div>
  );
};

export default DevelopmentTools;
