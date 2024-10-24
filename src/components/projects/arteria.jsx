import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import './arteria.css';

import ComparisonSection from './components/comparisonSection';
import Gallery from './components/gallery';
import TeamSection from './components/teamProject';
import CoverPageProject from './components/coverPageProjects';
import Footer from '../footer';
import APortada from '../../assets/images/ARTERIAC.png';
import ABefore from '../../assets/images/ArteriaBefore.png';
import AAfter from '../../assets/images/ArteriaAfter.png';
import M1 from '../../assets/images/M1.png';
import M2 from '../../assets/images/M2.png';
import M3 from '../../assets/images/M3.png';
import M4 from '../../assets/images/M4.png';
import { FaWalking, FaTree, FaBicycle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const Arteria = () => {
  const { t } = useTranslation();

  // Scroll suave al inicio
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  }, []);

  // Función para el contador
  const countUp = (el, target, isPercentage = false) => {
    let count = 0;
    const speed = 1000 / target; // Controla la velocidad del contador
    const increment = target / 100;

    const updateCount = () => {
      count += increment;
      if (count >= target) {
        el.innerText = isPercentage ? target + '%' : target; // Añadir el % si es necesario
      } else {
        el.innerText = isPercentage ? Math.ceil(count) + '%' : Math.ceil(count);
        setTimeout(updateCount, 20); // Velocidad de actualización
      }
    };

    updateCount();
  };

  // UseEffect para inicializar el contador
  useEffect(() => {
    const counters = document.querySelectorAll('.a-counter-number');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.getAttribute('data-count');
            const isPercentage = entry.target.getAttribute('data-percentage') === 'true';
            countUp(entry.target, parseInt(target), isPercentage); // Inicia el contador
            observer.unobserve(entry.target); // Deja de observar después de que el contador inicia
          }
        });
      },
      { threshold: 0.5 } // El 50% del elemento debe ser visible para iniciar el contador
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <CoverPageProject
          title="ARTERIA"
          description={t('arteria.description')}
          imageUrl={APortada}
        />

        <section className="a-impact-section">
          <h2 className="a-impact-title">{t('arteria.results')}</h2>
          <div className="a-impact-container">

            <div className="a-impact-item">
              <FaWalking className="a-impact-icon" />
              <div className="a-impact-text">
                <h3 className="a-counter-number" data-count="1350">0</h3>
                <p className="a-impact-description">{t('arteria.pedestrians')}</p>
              </div>
            </div>

            <div className="a-impact-item">
              <FaTree className="a-impact-icon" />
              <div className="a-impact-text">
                <h3 className="a-counter-number" data-count="3449">0</h3>
                <p className="a-impact-description">{t('arteria.greenAreas')}</p>
              </div>
            </div>

            {/* Elementos que tienen porcentaje */}
            <div className="a-impact-item">
              <FaShieldAlt className="a-impact-icon" />
              <div className="a-impact-text">
                <h3 className="a-counter-number" data-count="75" data-percentage="true">0%</h3>
                <p className="a-impact-description">{t('arteria.safety')}</p>
              </div>
            </div>

            <div className="a-impact-item">
              <FaBicycle className="a-impact-icon" />
              <div className="a-impact-text">
                <h3 className="a-counter-number" data-count="38" data-percentage="true">0%</h3>
                <p className="a-impact-description">{t('arteria.mobility')}</p>
              </div>
            </div>

            <div className="a-impact-item">
              <FaLightbulb className="a-impact-icon" />
              <div className="a-impact-text">
                <h3 className="a-counter-number" data-count="15">0</h3>
                <p className="a-impact-description">{t('arteria.lightning')}</p>
              </div>
            </div>

          </div>
        </section>

        <ComparisonSection
          beforeImage={ABefore}
          afterImage={AAfter}
          before={t('arteria.before.description')}  // Descripción antes de Arteria
          after={t('arteria.after.description')}   // Descripción después de Arteria
          title={t('arteria.titleAF')}
        />
        <Gallery
          title="Galería del Proyecto"
          images={[M1, M2, M3, M4]} // Las imágenes de los miembros de equipo
        />
        <TeamSection teamMembers={[
          { name: 'Fabricio Naranjo', age: '23', image: M4, testimonie: t('arteria.T1') },
          { name: 'Paula Quintuña', age: '22', image: M1, testimonie: t('arteria.T3') },
          { name: 'Jeremy Litardo', age: '22', image: M2, testimonie: t('arteria.T4') },
          { name: 'Josué Carpio', age: '22', image: M3, testimonie: t('arteria.T2') },
        ]} />
        <Footer />
      </main>
    </>
  );
};

export default Arteria;
