import React from "react";
import ProjectSection from "../components/ProjectSection";
import ClientSection from "../components/ClientSection";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Welcome to Our Portal
          </div>
          <h1>Lead Generation & <span>Client Project Portal</span></h1>
          <p>
            Showcase your work, manage clients, and capture leads in one place. 
            Built for modern businesses looking to grow their digital presence.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#contact" className="secondary-btn">
              Get in Touch
            </a>
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="hero-shapes">
          <img src="/assets/shapes/Ellipse 7.svg" alt="" className="shape shape-1" />
          <img src="/assets/shapes/Ellipse 8.svg" alt="" className="shape shape-2" />
          <img src="/assets/shapes/Ellipse 10.svg" alt="" className="shape shape-3" />
          <img src="/assets/images/pexels-brett-sayles-2881232.svg" alt="" className="shape shape-4" />
        </div>
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="clients">
        <ClientSection />
      </section>

      <section id="contact" className="contact-section">
        <ContactForm />
      </section>

      <section id="newsletter" className="newsletter-section">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
