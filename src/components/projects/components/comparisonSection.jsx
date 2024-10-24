import React, { useEffect, useRef } from 'react';
import './ComparisonSection.css';
import { useTranslation } from 'react-i18next';

const ComparisonSection = ({ title, before, after, beforeImage, afterImage }) => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate');
          } else {
            section.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.3,
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
    <section ref={sectionRef} className="comparison-section">
      <h2 className="comparison-title">{title}</h2>

      <div className="comparison-container">
        <div className="comparison-item">
          <h3 className="comparison-label">{t('Before')}</h3>
          <img src={beforeImage} alt="Before" className="comparison-img" />
          <p className="comparison-description">{before}</p>
        </div>

        <div className="comparison-item">
          <h3 className="comparison-label">{t('After')}</h3>
          <img src={afterImage} alt="After" className="comparison-img" />
          <p className="comparison-description">{after}</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
