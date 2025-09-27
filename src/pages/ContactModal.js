import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"; // Install with react-icons
import "./ContactModal.css";

function ContactModal({ onClose }) {
  return (
    <div className="contactOverlay">
      <div className="contactCard">
        <div className="contactHeader">
          <div className="contactHeader-left">
            {/* Replace src with your logos as needed */}
            <img src="/Sevauk logo.jpg" alt="sewa logo" className="contactLogo" />
            <img src="/image8.jpg" alt="arunodaya logo" className="contactLogo" />
            <span className="arunodayaText">
              <span>ARUNODAYA</span>
              {/* <span style={{ color: "#ff6900", fontWeight: 700 }}>NO</span>
              <span style={{ color: "#fed14f", fontWeight: 700 }}>DAYA</span> */}
            </span>
          </div>
          <div className="contactHeader-main">
            <span className="reachUsText">REACH US</span>
            <div className="reachUsBar" />
          </div>
          <button className="closeBtn" onClick={onClose}>×</button>
        </div>

        <div className="contactBody">
          <div className="contactCol">
            <div className="contactCol-icon"><FiMapPin /></div>
            <div className="contactCol-title">Our Location</div>
            <div className="contactCol-info">
              Seva Chetan, 
Near Shri.Panchamukhi Maruthi Temple, Bankers Colony, Hubli Road, Gadag - 582103.
 Karnataka, India
            </div>
          </div>
          <div className="contactCol">
            <div className="contactCol-icon"><FiPhone /></div>
            <div className="contactCol-title">Our Phone</div>
            <div className="contactCol-info">
              Basavaraj.S.Pattanshetti 9449369553<br />
              Dr.Jayaraj Mulgund  9448564388<br />
              Mallikarjun Naglapur 8151887302<br/>
            </div>
          </div>
          <div className="contactCol">
            <div className="contactCol-icon"><FiMail /></div>
            <div className="contactCol-title">Our Mail</div>
            <div className="contactCol-info" style={{ wordBreak: "break-all" }}>
             arunodayasplschool@gmail.com<br/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;