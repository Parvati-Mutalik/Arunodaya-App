import React, { useState } from "react";
import "./TeamSection.css";

const founders = [
  { name: "Prof.TukaramSingh Jamadar", role: "(President)", image: "/img.jpg" },
  { name: "Shri.Lukkannasa Rajoli", role: "(Vice - President)", image: "/edit2.jpg" },
  { name: "Shri.Jayaraj Mulgund", role: "(Secretary)", image: "/edit9.jpg" },
  { name: "Shri.Jitendra Shah", role: "(Treasurer)", image: "/edit6.jpg" },
  { name: "Shri.Basavaraj Nagalapur", role: "(Members)", image: "/edit1.jpg" },
  { name: "Dr.Umesh Hadi", role: "(Members)", image: "/edit5.jpg" },
  { name: "Shri.Umakanatasa Merwade", role: "(Members)", image: "/edit3.jpg" },
  { name: "Shri.Prakash Vailaya", role: "(Members)", image: "/edit4.jpg" },
  { name: "Shri.Basavaraj Pattanshetti", role: "(Members)", image: "/edit7.jpg" },
  { name: "Shri.Jayaprakash Bhajantri", role: "(Members)", image: "/edit8.jpg" },
  { name: "Shri.Lalit Jain", role: "(Members)", image: "/edit10.jpg" },
];


const teamMembers = [
  { name: "Shri. Malikarjun ", role: "(Administrator & Accountant)", image: "/edit11.jpg" },
  { name: "Shri. Mallappa Hakki", role: "(HeadMaster)", image: "/staff1.jpg" },
  { name: "Shri. Jagadeesh Hadapad ", role: "(Asst. Teacher)", image: "/staff5.jpg" },
  { name: "Smt. Jayshree Bahavre", role: "(Asst. Teacher)", image: "/staff4.jpg" },
  { name: "Smt. Veena kolhapure", role: "(Care taker)", image: "/staff2.jpg" },
  { name: "Smt.Ranuka dasar", role: "(Care taker)", image: "/staff3.jpg" },
];

export default function TeamSection() {
  const [tab, setTab] = useState("TEAM");

  let people;
  switch (tab) {
    case "MEMBERS":
      people = founders;
      break;
    default:
      people = teamMembers;
  }

  return (
    <div className="team-container">
      <h1 className="team-title">TEAM</h1>
      <div className="team-inner">
        <div className="team-tabs">
          {["MEMBERS", "STAFF"].map((t) => (
            <div
              key={t}
              className={`team-tab ${tab === t ? "team-tab-active" : ""}`}
              onClick={() => setTab(t)}
              style={{ cursor: "pointer" }}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="team-members">
          {people.map((tm) => (
            <div key={tm.name} className="team-member">
              <div className="team-member-image">
                <img
                  src={tm.image}
                  alt={tm.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="team-member-name">{tm.name}</div>
              <div className="team-member-role">{tm.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
