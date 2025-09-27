import React from "react";
import "./StatsSection.css";

function StatsSection() {
  return (
    <div className="stats-container">
      <h2 className="stats-title">Why Trust Arunodaya?</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>18+</h3>
          <p>Years of Service<br /></p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h3>183+</h3>
          <p>Childerns Trained<br /></p>
        </div>
        <div className="divider"></div>
        <div className="stat-item">
          <h3>29+</h3>
          <p>Migrated to Main<br />Stream School</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
