import React, { useState } from "react";
import { api } from "../api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await api.post("/newsletter", { email });
      setStatus("Thanks for subscribing! We'll keep you updated.");
      setEmail("");
    } catch (err) {
      setStatus("Unable to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <h2 className="section-title">Newsletter</h2>
        <p className="section-subtitle">Get updates on new projects and client stories</p>
      </div>
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit" disabled={submitting}>
          {submitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default Newsletter;
