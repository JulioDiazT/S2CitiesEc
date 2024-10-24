import React, { useEffect, useRef } from 'react';
import Catedral from '../assets/images/Catedral.jpg';
import './cuenca.css';
import { useTranslation } from 'react-i18next';
import '../i18n';

const Cuenca = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef(null); // Crear una referencia a la sección

  useEffect(() => {
    const section = sectionRef.current;

    // Crear el observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate'); // Añadir clase cuando la sección sea visible
          } else {
            section.classList.remove('animate'); // Remover clase si la sección deja de ser visible
          }
        });
      },
      {
        threshold: 0.2, // El 50% de la sección debe ser visible para activar la animación
      }
    );

    if (section) {
      observer.observe(section); // Observar la sección
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="cuenca" className="section-cuenca" ref={sectionRef}>
      <div className="cuenca-info">
        <h2 className="cuenca-title">{i18n.t('cuenca.title')}</h2>
        <p className="cuenca-description">
          {i18n.t('cuenca.description')}
        </p>
      </div>
      <img src={Catedral} alt="Cuenca" className="cuenca-image" />
    </section>
  );
};

export default Cuenca;
