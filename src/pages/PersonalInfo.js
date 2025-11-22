import React from "react";
import "../App.css"; // make sure your CSS has the dark theme styles

export default function PersonalInfo() {
  return (
    <section className="section personal-info">
      <h2 style={{ color: "#dcdcaa" }}>About Me</h2>
      <p>
        A passionate creator and tech enthusiast who blends analytical thinking
        with artistic exploration. I love dissecting culture, storytelling, and
        finding creative ways to visualize ideas. Currently learning full-stack
        development and 3D art integration, aiming to merge technical skills
        with artistic expression.
      </p>

      <h3 style={{ color: "#569cd6" }}>Hobbies & Interests</h3>
      <ul>
        <li>Sketching & painting</li>
        <li>Exploring new tech and software</li>
        <li>Analyzing art and culture trends</li>
        <li>Game design & worldbuilding</li>
      </ul>

      <h3 style={{ color: "#569cd6" }}>Fun Fact</h3>
      <p>I Always carry a sketchbook to capture random ideas. Coffee fuels my coding marathons ☕</p>

      <h3 style={{ color: "#569cd6" }}>Contact</h3>
      <ul>
        <li>Email: josephinerosecinco@gmail.com</li>
        <li>LinkedIn: linkedin.com/in/yourname</li>
        <li>GitHub: github.com/yourusername</li>
        <li>Portfolio: yourportfolio.com</li>
      </ul>
    </section>
  );
}
