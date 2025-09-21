import React from "react";

const PROJECTS = [
  {
    id: "cx",
    title: "Customer Experience Architecture(CXA)",
    img: "https://www.loop11.com/wp-content/uploads/2023/07/How-UX-Design-Can-Improve-Customer-Experience-And-Drive-Business-Growth-Our-Top-Tips-Loop11.jpg",
    description: "Led the Customer Experience Architecture (CXA) project aimed at analyzing and optimizing Microsoft’s customer support ecosystem by processing billions of telemetry events from diverse data sources including support websites, the Knowledge Management Ecosystem, community forums, and virtual agent interactions. Applied advanced data analytics, Power BI reporting, and visualization techniques to identify key trends, friction points, and improvement opportunities across both consumer and commercial support journeys. Generated actionable insights that improved support efficiency, enhanced customer satisfaction, and enabled delivery of faster and more personalized service experiences. Demonstrated the impact of data-driven decision-making in large-scale digital support systems, contributing to measurable improvements in customer engagement and operational performance."  
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
