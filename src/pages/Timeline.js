import React from "react";
import "./Timeline.css";

const milestones = [
  {
    year: "2015",
    title: "Univariety Journey Begins",
    desc: "",
    color: "#ff5722",
  },
  {
    year: "2016",
    title: "Early Growth",
    desc: "• Partnered with 100+ schools.\n• Collaborated with UCLA Extension to introduce the Global Career Counsellor Program in India",
    color: "#673ab7",
  },
  {
    year: "2017",
    title: "First Round of Investment",
    desc: "Received the first round of investment from InfoEdge, India’s pioneer in internet products",
    color: "#2196f3",
  },
  {
    year: "2018",
    title: "Innovations with Career Guidance",
    desc: "• Launched ‘Future 50 Schools Shaping Success’\n• Super Counsellor SaaS Platform Launched",
    color: "#f44336",
  },
  {
    year: "2020",
    title: "More Investment & National Recognition",
    desc: "",
    color: "#ff9800",
  },
];

function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Univariety wasn’t built in a day.</h2>
      <p className="timeline-subheading">Explore our journey through the years</p>

      {/* SVG Road */}
      <div className="timeline-road">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
          <path
            d="M 50 150 Q 250 50, 450 150 T 850 150"
            stroke="#0d47a1"
            strokeWidth="12"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>

        {/* Milestones placed along the curve */}
        <div className="milestones">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="timeline-point"
              style={{
                left: `${15 + index * 20}%`,
                top: index % 2 === 0 ? "20px" : "120px", // alternate above/below road
              }}
            >
              <div
                className="timeline-marker"
                style={{ background: item.color }}
              >
                {item.year}
              </div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                {item.desc && <p>{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
