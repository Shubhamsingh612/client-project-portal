import React, { useState } from "react";
import { api } from "../../api";

const AddClient = () => {
  const [form, setForm] = useState({ name: "", description: "", designation: "", website: "", logo: null });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("description", form.description);
      data.append("designation", form.designation);
      data.append("website", form.website);
      if (form.logo) data.append("logo", form.logo);
      await api.post("/clients", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("Client added!");
      setForm({ name: "", description: "", designation: "", website: "", logo: null });
    } catch (err) {
      setStatus("Failed to add client.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Client</h2>
      <div className="form-row">
        <label htmlFor="client-name">Name</label>
        <input
          id="client-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="client-description">Description</label>
        <textarea
          id="client-description"
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="client-designation">Designation</label>
        <input
          id="client-designation"
          name="designation"
          type="text"
          placeholder="e.g. CEO, Web Developer, Designer"
          value={form.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="client-website">Website</label>
        <input
          id="client-website"
          name="website"
          value={form.website}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="client-logo">Logo</label>
        <input
          id="client-logo"
          name="logo"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button className="primary-btn" type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Save Client"}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default AddClient;


