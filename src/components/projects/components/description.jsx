import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './description.css';

const UrbanoDescription = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Efecto de aparición al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const descriptionSection = document.querySelector('.urbano-description-section');
      const rect = descriptionSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={`urbano-description-section ${isVisible ? 'visible' : ''}`}>
      <div className="description-container">
        <p className="description-text"   dangerouslySetInnerHTML={{ __html: i18n.t('urbano.summary') }}></p>
      </div>
    </section>
  );
};

export default UrbanoDescription;
