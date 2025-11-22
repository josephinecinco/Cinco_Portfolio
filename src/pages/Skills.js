import React from "react";
import "../App.css";

// Import your 6 artwork images
import artwork1 from "../images/artwork1.png";
import artwork2 from "../images/artwork2.png";
import artwork3 from "../images/artwork3.jpg";
import artwork4 from "../images/artwork4.jpg";
import artwork5 from "../images/artwork5.png";
import artwork6 from "../images/artwork6.jpg";

const artworks = [
  { id: 1, title: "3D Concept. Lost Robot", image: artwork1 },
  { id: 2, title: "Prop Model for game. Filipino Inspired Weapon", image: artwork2 },
  { id: 3, title: "Necromancer Concept Art for Games.", image: artwork3 },
  { id: 4, title: "CyberPunk Concept Art for Games.", image: artwork4 },
  { id: 5, title: "3D Environment for Games", image: artwork5 },
  { id: 6, title: "Elf Concept Art for Games", image: artwork6 },
];

export default function Skills() {
  return (
    <section className="section">
      <h3 style={{ color: "#569cd6" }}>Skills & Expertise</h3>
      <ul>
        <li>
          <strong>Programming & Web Dev:</strong> JavaScript, React, HTML, CSS, SQL
        </li>
        <li>
          <strong>Creative Arts:</strong> Digital painting, 3D modeling, concept art
        </li>
        <li>
          <strong>Tools & Software:</strong> VS Code, Blender, Photoshop, EMU8086
        </li>
      </ul>

      <h3 style={{ color: "#569cd6", marginTop: "30px" }}>Some of my Artworks</h3>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  }}
>
  {artworks.map((art) => (
    <div
      key={art.id}
      style={{
        border: "1px solid #333",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        backgroundColor: "#1e1e1e",
        transition: "transform 0.3s, box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      className="art-card"
    >
      <img
        src={art.image}
        alt={art.title}
        style={{
          width: "100%",
          height: "auto", // keeps the original aspect ratio
          display: "block",
        }}
      />
      <div style={{ padding: "10px", color: "#fff" }}>
        <h4 style={{ margin: 0 }}>{art.title}</h4>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
