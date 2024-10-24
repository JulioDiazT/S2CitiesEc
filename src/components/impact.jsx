import React, { useEffect, useRef } from 'react';
import './impact.css';
import { useTranslation } from 'react-i18next';
import InseguridadImg from '../assets/images/icons/arma.png';
import AsaltosImg from '../assets/images/icons/bus.png';
import DesconfianzaImg from '../assets/images/icons/pregunta.png';
import InseguridadCaminandoImg from '../assets/images/icons/peaton.png';
import AnsiedadImg from '../assets/images/icons/saludmental.png';


const Impacto = () => {
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
      { threshold: 0.3 }
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

  useEffect(() => {
    const counters = document.querySelectorAll('.impacto-numeros');
    const duration = 2000;
    const speed = duration / 100;

    const countUp = (counter, target) => {
      let count = 0;
      const increment = target / 100;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.innerText = Math.ceil(count) + '%';
      }, speed);
    };

    const onScroll = () => {
      const section = document.querySelector('.impacto-section');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        counters.forEach((counter) => {
          const target = +counter.getAttribute('data-count');
          countUp(counter, target);
        });
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="impact" className="impacto-section" ref={sectionRef}>
      <h2 className="impacto-title">{t('impact.title')}</h2>
      <div className="impacto-container">
        <div className="impacto-item">
          <img src={InseguridadImg} alt="Inseguridad" className="impacto-icon" />
          <div className="impacto-text">
            <h3 className="impacto-numeros" data-count="39">0%</h3>
            <p className="impacto-descripcion">{t('impact.insecurity')}</p>
          </div>
        </div>
        <div className="impacto-item">
          <img src={AsaltosImg} alt="Asaltos" className="impacto-icon" />
          <div className="impacto-text">
            <h3 className="impacto-numeros" data-count="33">0%</h3>
            <p className="impacto-descripcion">{t('impact.transportation')}</p>
          </div>
        </div>
        <div className="impacto-item">
          <img src={DesconfianzaImg} alt="Desconfianza" className="impacto-icon" />
          <div className="impacto-text">
            <h3 className="impacto-numeros" data-count="59">0%</h3>
            <p className="impacto-descripcion"> {t('impact.strangers')} </p>
          </div>
        </div>
        <div className="impacto-item">
          <img src={InseguridadCaminandoImg} alt="Inseguridad caminando" className="impacto-icon" />
          <div className="impacto-text">
            <h3 className="impacto-numeros" data-count="43">0%</h3>
            <p className="impacto-descripcion">{t('impact.unsafe')} </p>
          </div>
        </div>
        <div className="impacto-item">
          <img src={AnsiedadImg} alt="Ansiedad" className="impacto-icon" />
          <div className="impacto-text">
            <h3 className="impacto-numeros" data-count="71">0%</h3>
            <p className="impacto-descripcion">{t('impact.anxiety')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impacto;
