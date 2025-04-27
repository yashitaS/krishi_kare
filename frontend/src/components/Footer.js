import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-logo">KrishiKare</h4>
          <p>Empowering farmers through technology, connecting agricultural communities for a sustainable future.</p>
          <div className="social-icons">
            {/* Add social media icons here, e.g., using react-icons */}
            {/* Example: <FaFacebook />, <FaTwitter />, <FaInstagram /> */}
            <a href="Your_Facebook_Link">Facebook</a>
            <a href="Your_Twitter_Link">Twitter</a>
            <a href="Your_Instagram_Link">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Shop Agricultural Inputs</li>
            <li>Crop Insurance</li>
            <li>Machinery Rental</li>
            <li>Bulk Agro Sales</li>
            <li>AI Assistant</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Our Partners</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Rural Avenue, Agritown, India</li>
            <li>+91 1234 567 890</li>
            <li>support@krishikare.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 KrishiKare. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookie">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
