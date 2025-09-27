import React from "react";
import "./HomePage2.css";
import ImageSlider from "./ImageSlider"; 
import StatsSection from "./StatsSection";

function HomePage2() {
  return (
    <div className="school-container">
      {/* Vision
      <div className="vision-section">
        <div className="school-heading">Vision</div>
        <div className="school-text-center school-mb-40">
          Our vision is rooted in providing a blend of home-based emotional care
          and professionally guided special Training/ Education and therapy.
        </div>
      </div> */}

      {/* Mission
      <div className="school-mission-section">
        <div className="school-mission-text">
          <div className="school-subheading">Our Mission</div>
          <div>
            To provide a high-quality education that nurtures the holistic
            development of students.
            <br />
            <br />
            To help students develop into responsible and responsive global
            citizens with strong moral values and an understanding of diverse
            cultures.
          </div>
        </div>
        <div className="school-diagram">
          <img
            src="/diagram.jpg"
            alt="Mission Diagram"
            className="school-diagram-image"
          />
        </div> */}

      {/* About Us
      <div className="about-section">
        <div className="school-subheading">About Us</div>
        <div className="school-about-text">
        Arunodaya Special School began its journey in a small rented room with just 8–12 students, supported by three passionate faculty members and limited resources. What started as a humble initiative has today grown into a recognized institution for children with special needs in Gadag.

The school is currently training 42 children, while more than 120 parents seek counselling and guidance from the team. Over the years, Arunodaya has trained 183 children, with 29 successfully integrated into mainstream schools. Among them, one proud student went on to complete a postgraduate degree in Social Work — a milestone that reflects the school’s vision and impact.

Arunodaya strongly believes in holistic development. Children here are nurtured not only through academics but also through arts, physical education, medical support, and specialized therapies. The focus is on empowering each child to achieve independence, confidence, and dignity in life.

The school is equally committed to supporting families by providing counselling, awareness programs, and guidance to parents of special children. This two-way approach strengthens both the child’s and the family’s journey.

Over time, Arunodaya has built a strong reputation for its social service and inclusive education model. With the continued support of well-wishers, community members, and organizations like Seva Bharati and Seva UK, the school remains steadfast in its mission — to provide every child with special needs a nurturing, inclusive, and hopeful future.</div>
        <hr className="school-hr" />
      </div>
      <br></br> */}

      {/* Slider + Stats + Timeline */}
      <div className="slider-section">
        
        <StatsSection />
      </div>
    </div>
  );
}

export default HomePage2;
