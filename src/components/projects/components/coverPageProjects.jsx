import React, { useEffect, useRef } from 'react';
import './coverPageProjects.css';

const Portada = ({ title, description, imageUrl }) => {
  const sectionRef = useRef(null);

  // Efecto de aparición
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('appear');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="portada-section">
      <img src={imageUrl} alt={title} className="portada-image" /> {/* Imagen */}
      <div className="text-container">
        <h1 className="project-title">{title}</h1>
        <h2
          className="project-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></h2>
      </div>
    </section>
  );
};

export default Portada;
