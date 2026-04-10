import React from "react";
import "./TeamSection.css";

const sevaBharati = [
  { name: "Shri. Purnachandrarao Ghantasaal", role: "(President)", occupation: "(Businessman)" },
  { name: "Dr. Raghu Akamanchi", role: "(Secretary)", occupation: "(Social Worker)" },
  { name: "Shri. Krishna Kulkarni", role: "(Treasurer)", occupation: "(Retd. Bank Officer)" },
  { name: "Shri. Shridhar Nadgir", role: "(Trustee)", occupation: "(Social Worker)" },
  { name: "Shri. Manjunath Makkalageri", role: "(Trustee)", occupation: "(Businessman)" },
  { name: "Shri. Basavaraj Dambal", role: "(Trustee)", occupation: "(Industrialist)" },
  { name: "Shri. Narasim Kulkarni", role: "(Trustee)", occupation: "(Social Worker)" },
  { name: "Shri. Ramesh Tippanur", role: "(Trustee)", occupation: "(Businessman)" },
  { name: "Shri. Bharat Jain", role: "(Treasurer)", occupation: "(Businessman)" },
// const founders = [
//   { name: "Prof.TukaramSingh Jamadar", role: "(President)", image: "/img.jpg" },
//   { name: "Shri.Lukkannasa Rajoli", role: "(Vice - President)", image: "/edit2.jpg" },
//   { name: "Shri.Jayaraj Mulgund", role: "(Secretary)", image: "/edit9.jpg" },
//   { name: "Shri.Jitendra Shah", role: "(Treasurer)", image: "/edit6.jpg" },
//   { name: "Shri.Basavaraj Nagalapur", role: "(Members)", image: "/edit1.jpg" },
//   { name: "Dr.Umesh Hadi", role: "(Members)", image: "/edit5.jpg" },
//   { name: "Shri.Umakanatasa Merwade", role: "(Members)", image: "/edit3.jpg" },
//   { name: "Shri.Prakash Vailaya", role: "(Members)", image: "/edit4.jpg" },
//   { name: "Shri.Basavaraj Pattanshetti", role: "(Members)", image: "/edit7.jpg" },
//   { name: "Shri.Jayaprakash Bhajantri", role: "(Members)", image: "/edit8.jpg" },
//   { name: "Shri.Lalit Jain", role: "(Members)", image: "/edit10.jpg" },
];

const founders = [
  { name: "Prof.TukaramSingh Jamadar", role: "(President)", occupation: "(Social Worker)", image: "/img.jpg" },
  { name: "Shri.Lukkannasa Rajoli", role: "(Vice - President)", occupation: "(Businessman)", image: "/edit2.jpg" },
  { name: "Er.Jayaraj Mulgund", role: "(Secretary)", occupation: "(Civil Engineer)", image: "/edit9.jpg" },
  { name: "Shri.Jitendra Shah", role: "(Treasurer)", occupation: "(Businessman)", image: "/edit6.jpg" },
  { name: "Shri.Basavaraj Nagalapur", role: "(Members)", occupation: "(Industrialist)", image: "/edit1.jpg" },
  { name: "Dr.Umesh Hadi", role: "(Members)", occupation: "(Doctor)", image: "/edit5.jpg" },
  { name: "Shri.Umakanatasa Merwade", role: "(Members)", occupation: "(Industrialist)", image: "/edit3.jpg" },
  { name: "Shri.Prakash Vailaya", role: "(Members)", occupation: "(Insurance Advisor)", image: "/edit4.jpg" },
  { name: "Shri.Basavaraj Pattanshetti", role: "(Members)", occupation: "(Industrialist)", image: "/edit7.jpg" },
  { name: "Shri.Jayprakash Bhajantri", role: "(Members)",  occupation: "(Social Worker)", image: "/edit8.jpg" },
  { name: "Shri.Lalit Jain", role: "(Members)", occupation: "(Businessman)", image: "/edit10.jpg" },
  { name: "Shri.Sudheer Ghorpade", role: "(Members)", occupation: "(Advocate)", image: "/edit12.jpg" },

];

const teamMembers = [
  { name: "Shri. Malikarjun Nagalapur ", role: "(Accountant)", occupation: "(Since-2018)" },
  { name: "Shri. Mallappa Hakki", role: "(HeadMaster)",occupation: "(Since-2016)" },
  { name: "Shri. Jagadeesh Hadapad ", role: "(Asst. Teacher)",occupation: "(Since-2017)" },
  { name: "Smt. Renuka Dasar", role: "(Care taker)",occupation: "(Since-2007)" },
  { name: "Smt. Jayashree Bahavre ", role: "(Asst. Teacher)",occupation: "(Since-2010)" },
  { name: "Smt. Veena Kolhapure", role: "(Care taker)",occupation: "(Since-2023)" },
  { name: "Shri. Malikarjun ", role: "(Administrator & Accountant)", image: "/edit11.jpg" },
  { name: "Shri. Mallappa Hakki", role: "(HeadMaster)", image: "/staff1.jpg" },
  { name: "Shri. Jagadeesh Hadapad ", role: "(Asst. Teacher)", image: "/staff5.jpg" },
  { name: "Smt. Jayshree Bahavre", role: "(Asst. Teacher)", image: "/staff4.jpg" },
  { name: "Smt. Veena kolhapure", role: "(Care taker)", image: "/staff2.jpg" },
  { name: "Smt.Ranuka dasar", role: "(Care taker)", image: "/staff3.jpg" },
];

export default function TeamSection() {
  return (
    <div className="team-container">
      <h1 className="team-title">TEAM</h1>
      <div className="team-inner">
        {/* SevaBharati Section */}
        <h2
          className="team-section-heading"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            marginBottom: "1.5rem",
          }}
        >
          Seva Bharati Trust-Trustees
        </h2>
        <div className="team-members">
          {sevaBharati.map((tm) => (
            <div key={tm.name} className="team-member">
              <div className="team-member-name">{tm.name}</div>
              <div className="team-member-role">
                {tm.role}
                {tm.occupation && (
                  <span style={{ marginLeft: "8px", fontWeight: "bold", color: "#7e2525" }}>
                    {tm.occupation}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Founders Section */}
        <h2
          className="team-section-heading"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            margin: "2rem 0 1.5rem 0",
          }}
        >
          Arunodaya Prakalp Members
        </h2>
        <div className="team-members">
          {founders.map((tm) => (
            <div key={tm.name} className="team-member">
              {tm.image && (
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
              )}
              <div className="team-member-name">{tm.name}</div>
              <div className="team-member-role">
                {tm.role}
                {tm.occupation && (
                  <span style={{ marginLeft: "8px", fontWeight: "bold", color: "#7e2525" }}>
                    {tm.occupation}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Staff Section */}
        <h2
          className="team-section-heading"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            textUnderlineOffset: "6px",
            margin: "2rem 0 1.5rem 0",
          }}
        >
          Staff
        </h2>
        <div className="team-members">
          {teamMembers.map((tm) => (
            <div key={tm.name} className="team-member">
              <div className="team-member-name">{tm.name}</div>
              <div className="team-member-role">
                {tm.role}
                {tm.occupation && (
                  <span style={{ marginLeft: "8px", fontWeight: "bold", color: "#7e2525" }}>
                    {tm.occupation}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
