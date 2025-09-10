import React from "react";

const PROJECTS = [
  {
    id: "cx",
    title: "Customer Experience Architecture(CXA)",
    img: "https://www.loop11.com/wp-content/uploads/2023/07/How-UX-Design-Can-Improve-Customer-Experience-And-Drive-Business-Growth-Our-Top-Tips-Loop11.jpg",
    description: "The Customer Experience Architecture (CXA) project is designed to analyze and optimize Microsoft’s customer support ecosystem. It collects and processes billions of telemetry events from multiple sources, including Microsoft support websites, the Knowledge Management Ecosystem, community forums, and virtual agent interactions. Using advanced data analytics and visualization techniques, CXA identifies patterns, bottlenecks, and opportunities to enhance customer satisfaction. The insights derived help improve both consumer and commercial support journeys, enabling Microsoft to deliver faster, more efficient, and personalized solutions. This project demonstrates the power of data-driven decision-making in large-scale digital support systems."  
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container animate">
      <h2>Projects</h2>
      <div style={{ color: "var(--muted)", marginBottom: 12 }}>Project details below:</div>

      <div className="grid">
        {PROJECTS.map((p) => (
          <article key={p.id} className="card animate">
            <img src={p.img} alt={p.title} style={{ width: "100%", borderRadius: 8, objectFit: "cover", height:"500px" }} />
            <div className="p">
              <h3>{p.title}</h3>
              <p style={{ color: "var(--muted)", marginTop: 8 }}>{p.description}</p> {/* full description visible */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
