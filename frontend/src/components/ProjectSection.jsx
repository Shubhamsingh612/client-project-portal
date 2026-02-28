import React, { memo, useEffect, useState } from "react";
import { api, API_BASE, fixImagePath } from "../api";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    api
      .get("/projects")
      .then((res) => {
        if (mounted) {
          console.log("Projects fetched:", res.data);
          setProjects(res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        if (mounted) setError(err.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  // Function to get the correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    // Fix Windows path to URL path
    const fixedPath = fixImagePath(imagePath);
    // If it's already a full URL, return as is
    if (fixedPath.startsWith('http')) return fixedPath;
    // Otherwise, prepend the API base
    return `${API_BASE}/${fixedPath}`;
  };

  if (loading) {
    return <div className="section-loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="section-loading">Error: {error}</div>;
  }

  if (projects.length === 0) {
    return (
      <div className="section">
        <div className="section-header">
          <div className="section-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H11V11H3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3H13V11H21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 13H13V21H21V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 13H11V21H3V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">Explore our latest work and innovative solutions</p>
        </div>
        <div className="empty-state">
          <h3>No Projects Yet</h3>
          <p>Add projects from the admin panel to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H11V11H3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3H13V11H21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13H13V21H21V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 13H11V21H3V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">Explore our latest work and innovative solutions</p>
      </div>
      
      <div className="cards-grid">
        {projects.map((project) => (
          <article className="card" key={project._id}>
            <div className="card-image-wrapper">
              {project.image ? (
                <img
                  src={getImageUrl(project.image)}
                  alt={project.name}
                  loading="lazy"
                  onError={(e) => {
                    console.error("Image failed to load:", project.image);
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
              ) : null}
              <div className="placeholder-image" style={{ display: project.image ? 'none' : 'flex' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#94a3b8" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#94a3b8"/>
                  <path d="M21 15L16 10L5 21" stroke="#94a3b8" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default memo(ProjectSection);
