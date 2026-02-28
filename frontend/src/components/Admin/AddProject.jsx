import React, { useState } from "react";
import { api } from "../../api";

const AddProject = () => {
  const [form, setForm] = useState({ name: "", description: "", image: null });
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
      if (form.image) data.append("image", form.image);
      await api.post("/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("Project added!");
      setForm({ name: "", description: "", image: null });
    } catch (err) {
      setStatus("Failed to add project.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <div className="form-row">
        <label htmlFor="project-name">Name</label>
        <input
          id="project-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="project-image">Image</label>
        <input
          id="project-image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button className="primary-btn" type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Save Project"}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default AddProject;


