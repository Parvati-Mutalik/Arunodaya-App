// src/pages/Payment.js
import React from "react";
import "./Payment.css";

function Payment() {
  return (
    <div className="payment-page">
      <div className="payment-section">
        <div className="payment-details">
          <h2>Bank Details</h2>

          <h3>Domestic Donations:</h3>
          <p><strong>Name:</strong> SEVA BHARATI TRUST R GADAG</p>
          <p><strong>Bank:</strong> Bank of Baroda</p>
          <p><strong>Branch:</strong>Gadag-582101</p>
          <p><strong>A/c No. :</strong> 31400100000720</p>
          <p><strong>IFSC Code:</strong> BARB0GADAGX (Fifth character is zero)</p>

          {/* <div className="divider"></div> */}

          <h3>Overseas Donations (FCRA Approved Account):</h3>
          <p><strong>Name:</strong> SEVA BHARATI TRUST</p>
          <p><strong>Bank:</strong> State Bank of India</p>
          <p><strong>Branch:</strong> 11 SANSAD MARG, New Delhi-110001</p>
          <p><strong>A/c No. :</strong> 40102525254</p>
          <p><strong>IFSC Code:</strong> SBIN0000691</p>
          <p><strong>SWIFT:</strong> SBININBB104</p>
        </div>

        <div className="qr-section">
          <img src="/QRcode.jpg" alt="QR Code" />
        </div>
      </div>

      <div className="contact-info">
        <span><i className="fas fa-envelope"></i> arunodayasplschool@gmail.com</span>
        <span><i className="fas fa-phone"></i>  9449369553</span>
      </div>
    </div>
  );
}

export default Payment;