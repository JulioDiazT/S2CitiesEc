import React, { useEffect, useRef } from 'react';
import './SupportSection.css';
import Voluntariado from '../assets/images/DSC_0122.JPG';
import { useTranslation } from 'react-i18next';
import '../i18n';

const SupportSection = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const section = sectionRef.current;

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
        threshold: 0.3, // Activar cuando el 30% sea visible
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id='support' className="volunteer-section">
      <div className="volunteer-container">
        <div className="volunteer-image">
          <img src={Voluntariado} alt="Voluntariado" />
        </div>
        <div className="volunteer-text">
          <h2 className="volunteer-title">
            {t('change.title')}
          </h2>
          <p className="volunteer-description">
            {t('change.description')}
          </p>
          <div className="volunteer-button-container">
            <a href="https://www.instagram.com/direct/t/17842083878975336" className="volunteer-button">
              {t('change.callToAction')}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SupportSection;
