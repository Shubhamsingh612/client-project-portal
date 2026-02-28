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
      setStatus({ type: "success", message: "Subscribed successfully!" });
      setEmail("");
    } catch (err) {
      setStatus({ type: "error", message: "Unable to subscribe. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="newsletter-wrapper">
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit" disabled={submitting}>
          {submitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status && (
        <p className={`form-status ${status.type}`} style={{ color: status.type === 'success' ? '#4ade80' : '#f87171' }}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Newsletter;
