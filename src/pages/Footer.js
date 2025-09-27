import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-arun">
      <div className="footer-row">
        {/* Brand Column */}
        <div className="brand-col">
          <span className="brand-arun">ARUNODAYA</span>
          {/* <span className="brand-daya">DAYA</span> */}
          <address>
            Seva Chetan, 
Near Shri.Panchamukhi Maruthi Temple, Bankers Colony, Hubli Road, Gadag - 582103.
 Karnataka, India
          </address>
          <div className="footer-email">
            <a href="mailto:info@arundaya.com">arunodayasplschool@gmail.com</a>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col">
          <h4>About Us</h4>
          <div className="footer-list">
            <a href="#">Events</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* Social Column */}
        {/* <div className="social-col footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div> */}

        {/* Map Column */}
        <div className="map-col footer-col">
          <h4>Our Location</h4>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38882.123456!2d75.6289!3d15.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8f123456789ab%3A0xabcdef1234567890!2sCJ99%2BXR5%2C%20Ganesh%20Colony%2C%20Zakir%20Hussain%20Colony%2C%20Hudco%20Colony%2C%20Gadag-Betageri%2C%20Karnataka%20582103!5e0!3m2!1sen!2sin!4v1693545600000!5m2!1sen!2sin"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Our Location"
/>

        </div>
      </div>

      <div className="footer-base">
        © 2025 ARUNODAYA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;