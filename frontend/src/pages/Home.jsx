import React from "react";
import ProjectSection from "../components/ProjectSection";
import ClientSection from "../components/ClientSection";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <div className="hero-shape hero-shape-4"></div>
        </div>
        <div className="hero-content">
          <h1>
            Transform Your <span>Digital Presence</span> With Our Expert Solutions
          </h1>
          <p>
            We deliver cutting-edge projects and build lasting relationships with our clients. 
            Let's create something amazing together.
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
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">Explore our latest work and innovative solutions</p>
        <ProjectSection />
      </section>

      <section id="clients" className="section">
        <h2 className="section-title">Happy Clients</h2>
        <p className="section-subtitle">What our clients say about working with us</p>
        <ClientSection />
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in touch with us for your next project</p>
          <ContactForm />
        </div>
      </section>

      <section id="newsletter" className="newsletter-section">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest projects and news</p>
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;
