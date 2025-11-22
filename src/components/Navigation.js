import React from "react";
import { Link } from "react-router-dom"; // if you are using React Router

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Personal Info</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
    </nav>
  );
}
