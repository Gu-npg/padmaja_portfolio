import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:padmajagurram24@gmail.com?subject=Portfolio Contact&body=${body}`;
    // If you want to use EmailJS, replace this with the EmailJS client code.
  };

  return (
    <section id="contact" className="container animate">
      <h2>Contact</h2>
      <div className="contact-grid">
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Your email" type="email" required />
          <textarea name="message" placeholder="Tell me about the opportunity..." required />
          <div style={{ marginTop: 8 }}>
            <button className="btn primary" type="submit">Send Message</button>
          </div>
        </form>

        <div>
          <div className="t-card">
            <strong>Reach me</strong>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              Email: <a href="mailto:padmajagurram24@gmail.com">padmajagurram24@gmail.com</a><br />
              Phone: <a href="tel:+919381118656">+91 93811 18656</a>
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <a className="btn" href="https://www.linkedin.com/in/padmaja-g-b26514218" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="/padmaja_resume.pdf" download>Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
