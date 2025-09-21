import React from "react";

export default function Hero() {
  return (
    <section id="about" className="hero container animate">
      <div className="hero-grid">
        <div>
          <div className="tag">🔍 Power BI & Data Analytics</div>
          <h1>Turning data into actionable insights.</h1>
          <p>
            I am <strong>Padmaja Gurram</strong>, a results-driven analyst with <strong>3+ years</strong> experience designing dashboards,
            optimizing models with <strong>DAX</strong> and managing data with <strong>SQL</strong> & <strong>Azure Databricks</strong>.
          </p>
          <p>Extensive experience in <strong>DAX, SQL, PySpark and Python</strong>. Demonstrated ability to transform raw
             data into actionable insights to support effective decision-making.</p>

          <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
            <a className="btn primary" href="#projects">See My Work</a>
            <a className="btn" href="mailto:padmajagurram24@gmail.com">Contact Me</a>
          </div>
        </div>

        <div className="hero-card">
          <img src="https://content.cloudthat.com/resources/wp-content/uploads/2025/06/Boosting-Performance-in-Power-BI-A-Guide-to-Incremental-Refresh-and-Hybrid-Tables%403x.webp" alt="Dashboard preview (replace with your screenshot)" />
        </div>
      </div>
    </section>
  );
}
