import React, { useState } from "react";
import { api } from "../api";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", city: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await api.post("/contact", form);
      setStatus({ type: "success", message: "Thank you! We will get back to you soon." });
      setForm({ name: "", email: "", mobile: "", city: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="mobile">Mobile Number</label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={form.city}
          onChange={handleChange}
          placeholder="Enter your city"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        />
      </div>
      <button className="primary-btn" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Submit"}
      </button>
      {status && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
};

export default ContactForm;
