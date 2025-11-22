// Projects.js
import React from "react";
import Home from "../images/Home.jpg"; 
import Task from "../images/Task.png"; 
const projects = [
  {
    title: "PawShoppe E-Commerce",
    description: "This project does is for a pet shop. They offer pet neccesities",
    image: Home,
    repo: "https://github.com/josephinecinco/E-Commerce.git",
  },
  {
    title: "Task Manager",
    description: "Another cool project that handles...",
    image: Task,
    repo: "https://github.com/josephinecinco/Task_Manager.git",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <p>You'll get directed to the repository when clicked.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "150px", height: "100%", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem", color: "#f8e300ff" }}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
