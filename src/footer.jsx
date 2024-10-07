import { useState } from 'react';


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
        <a href="https://www.facebook.com/profile.php?id=61562167407409" target="_blank" rel="noopener noreferrer">
  <img className='fb' src="/assets/Facebook.svg" alt="Facebook" />
</a>
<a href="https://www.instagram.com/noderno.tech/" target="_blank" rel="noopener noreferrer">
  <img className='ig' src="/assets/Instagram.svg" alt="Facebook" />
</a>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Noderno. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  