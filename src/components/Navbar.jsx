import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <div className="brand">
          <span className="dot" />
          <span>Padmaja Gurram</span>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about" className="active">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certs">Certifications</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn small" href="/padmaja_resume.pdf" download>Download Résumé</a>
        </div>
      </div>
    </header>
  );
}
