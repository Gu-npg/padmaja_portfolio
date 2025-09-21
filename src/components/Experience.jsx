import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="container animate">
      <h2>Experience</h2>
      <p>June 2022 - Till Date</p>
      <div className="timeline">
        <div className="t-item">
          <div className="t-card">
            <strong>Senior System Engineer — Infosys Limited</strong>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>Hyderabad, India</p>
            <ul style={{ marginTop: 10 }}>
             <li>Led the Customer Experience Architecture (CXA) project aimed at analyzing and optimizing 
              Microsoft’s customer support ecosystem by processing billions of telemetry events from diverse 
              data sources including support websites, the Knowledge Management Ecosystem, community forums, 
              and virtual agent interactions.</li>
            <li>Applied advanced data analytics, Power BI reporting, and visualization techniques to identify 
              key trends, friction points, and improvement opportunities across both consumer and commercial
              support journeys.</li>
            <li>Generated actionable insights that improved support efficiency, enhanced customer satisfaction,
               and enabled delivery of faster and more personalized service experiences.</li>
            <li>Demonstrated the impact of data-driven decision-making in large-scale digital support systems,
               contributing to measurable improvements in customer engagement and operational performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
