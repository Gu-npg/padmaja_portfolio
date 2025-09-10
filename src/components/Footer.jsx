import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © <span id="year">{new Date().getFullYear()}</span> Padmaja Gurram •
      </div>
    </footer>
  );
}
