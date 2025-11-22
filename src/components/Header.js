import React from "react";
import profilePic from "../images/profile.png"; // adjust path if Header.js is nested

export default function Header() {
  return (
    <header className="header">
      <img
        src={profilePic}
        alt="profile"
        className="profile-pic"
      />
      <h1>Josephine Rose B. Cinco</h1>
      <p>
       Hello! I’m a junior Computer Science student with a strong passion for arts and technology. <br></br>
       I’m currently based in Cabuyao City, Laguna, Philippines.
      </p>
    </header>
  );
}
