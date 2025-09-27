import React from "react";
import "./SuccessStories.css";

export default function SuccessStories() {
  return (
    <section className="success-stories-section">
      <h2 className="success-stories-title">
        Success Stories That Speak for Themselves
      </h2>
      <div className="underline"></div>

      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-icon" role="img" aria-label="Graduation Cap">🎓</div>
          <div className="stat-percent">37%</div>
          <p className="stat-description">Increase in Alumni Participation</p>
          <hr className="stat-divider" />
        </div>

        <div className="stat-item">
          <div className="stat-icon" role="img" aria-label="Chart Up">📈</div>
          <div className="stat-percent">17%</div>
          <p className="stat-description">Boost in admission enquiries</p>
          <hr className="stat-divider" />
        </div>

        <div className="stat-item">
          <div className="stat-icon" role="img" aria-label="Signpost">🗺️</div>
          <div className="stat-percent">41%</div>
          <p className="stat-description">Improved Student Decision Making</p>
          <hr className="stat-divider" />
        </div>
      </div>
    </section>
  );
}
