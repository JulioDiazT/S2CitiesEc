import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import './bibliorio.css';

import ComparisonSection from './components/comparisonSection';
import Gallery from './components/gallery';
import TeamSection from './components/teamProject';
import CoverPageProject from './components/coverPageProjects';
import Footer from '../footer';
import BPortada from '../../assets/images/biblioPortada.jpg';
import BBefore from '../../assets/images/bibliorioBefore.jpg';
import BAfter from '../../assets/images/bibliorioAfter.jpg';
import Nico from '../../assets/images/NicoBibliorio.png';
import Ari from '../../assets/images/AriBibliorio.png';
import Dani from '../../assets/images/DaniBibliorio.png';
import galleryImages from './components/galleryBiblirio';
import { FaChalkboardTeacher, FaUsers, FaBook, FaClock, FaWalking, FaShieldAlt } from 'react-icons/fa';

const Bibliorio = () => {
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
    const counters = document.querySelectorAll('.b-counter-number');

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
          title="BIBLIORÍO"
          description={t('bibliorio.description')}
          imageUrl={BPortada}
        />

        <section className="b-impact-section">
          <h2 className="b-impact-title">{t('bibliorio.results')}</h2>
          <div className="b-impact-container">

            <div className="b-impact-item">
              <FaChalkboardTeacher className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="15">0</h3>
                <p className="b-impact-description">{t('bibliorio.impactWorkshops')}</p>
              </div>
            </div>

            <div className="b-impact-item">
              <FaUsers className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="40">0</h3>
                <p className="b-impact-description">{t('bibliorio.volunteers')}</p>
              </div>
            </div>

            <div className="b-impact-item">
              <FaBook className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="854">0</h3>
                <p className="b-impact-description">{t('bibliorio.books')}</p>
              </div>
            </div>

            <div className="b-impact-item">
              <FaUsers className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="10000">0</h3>
                <p className="b-impact-description">{t('bibliorio.people')}</p>
              </div>
            </div>

            <div className="b-impact-item">
              <FaClock className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="15">0</h3>
                <p className="b-impact-description">{t('bibliorio.readingTime')}</p>
              </div>
            </div>

            {/* Elementos que tienen porcentaje */}
            <div className="b-impact-item">
              <FaShieldAlt className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="86" data-percentage="true">0%</h3>
                <p className="b-impact-description">{t('bibliorio.feelSafe')}</p>
              </div>
            </div>

            <div className="b-impact-item">
              <FaWalking className="b-impact-icon" />
              <div className="b-impact-text">
                <h3 className="b-counter-number" data-count="70" data-percentage="true">0%</h3>
                <p className="b-impact-description">{t('bibliorio.walking')}</p>
              </div>
            </div>
          </div>
        </section>

        <ComparisonSection
          beforeImage={BBefore}
          afterImage={BAfter}
          before={t('bibliorio.before.description')}  // Descripción antes
          after={t('bibliorio.after.description')}   // Descripción después
          title={t('bibliorio.titleAF')}
        />
        <Gallery
          title="Galería del Proyecto"
          images={galleryImages}
        />
        <TeamSection teamMembers={[
          { name: 'Nicolás Cedillo', age: '18', image: Nico, testimonie: t('bibliorio.nicoTestimonie') },
          { name: 'Ariana Dután', age: '18', image: Ari, testimonie: t('bibliorio.ariTestimonie') },
          { name: 'Daniela Cuadrado', age: '18', image: Dani, testimonie: t('bibliorio.daniTestimonie') }
        ]} />
        <Footer />
      </main>
    </>
  );
};

export default Bibliorio;
