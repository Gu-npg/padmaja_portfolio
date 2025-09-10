import React from "react";

const SKILLS = [
  { name: "Power BI", level: "Advanced", width: "92%" },
  { name: "SQL (SQL Server)", level: "Advanced", width: "88%" },
  { name: "DAX", level: "Advanced", width: "86%" },
  { name: "Azure Databricks", level: "Intermediate", width: "72%" },
  { name: "Python & PySpark", level: "Intermediate", width: "68%" },
  { name: "Excel & Tabular Editor", level: "Advanced", width: "84%" },
];

export default function Skills() {
  return (
    <section id="skills" className="container animate">
      <h2 className="section-title">Skills</h2>
      <p style={{ color: "var(--muted)", marginBottom: 14 }}>Core analytics tools and technologies I use day-to-day.</p>
      <div className="skills">
        {SKILLS.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-head">
              <strong>{s.name}</strong>
              <span className="pill">{s.level}</span>
            </div>
            <div className="bar" aria-hidden="true">
              <span data-width={s.width} style={{ display: "block" }}></span>
            </div>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>
              {/* small description per skill, customize as desired */}
              {s.name === "Power BI" ? "Modeling • DAX • RLS • Publishing" : null}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
