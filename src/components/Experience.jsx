import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="container animate">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="t-item">
          <div><span className="pill">Jun 2022 - Present</span></div>
          <div className="t-card">
            <strong>Senior System Engineer — Infosys Limited</strong>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>Hyderabad, India</p>
            <ul style={{ marginTop: 10 }}>
              <li>Designed and maintained interactive Power BI dashboards & reports; published into workspace.</li>
              <li>Built data models and Power Query transformations; implemented RLS for secure views.</li>
              <li>Created reporting views in Azure Databricks and executed complex SQL for dataset management.</li>
              <li>Authored DAX measures (Time intelligence, Filter, Logical, Text) to enable KPIs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
