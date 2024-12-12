import React from 'react';
import './footer.css'; // Ensure this CSS file exists for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 HasHikA. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#!">Privacy Policy</a></li>
          <li><a href="#!">Terms of Service</a></li>
          <li><a href="#!">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
