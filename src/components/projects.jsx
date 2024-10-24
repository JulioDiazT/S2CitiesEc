import React, { useEffect, useRef } from 'react';
import BIBLIORIO from '../assets/images/BIBLIORIO.png';
import ARTERIA from '../assets/images/ARTERIA.png';
import URBANO from '../assets/images/URBANO.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './projects.css';

const Projects = () => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        // Crear el IntersectionObserver para observar cuando la sección sea visible
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
                threshold: 0.3, // El 30% visible para activar la animación
            }
        );

        if (section) {
            observer.observe(section);
        }

        // Limpiar el observer cuando el componente se desmonte
        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);
    return (
        <section id='projects' ref={sectionRef} className="proyectos-section">
            <h2 className="proyectos-title">{i18n.t('projects.title')}</h2>
            <div className="proyectos-container">
                <div className="proyecto-card">
                    <img src={BIBLIORIO} alt="BIBLIORIO" className="proyecto-imagen" />
                    <h3 className="proyecto-nombre">BIBLIORÍO</h3>
                    <p className="proyecto-descripcion">{i18n.t('projects.bibliorioDescription')}</p>
                    <button className="leer-mas" onClick={() => navigate('/bibliorio')}>
                        {i18n.t('projects.readMore')}
                    </button>
                </div>
                <div className="proyecto-card">
                    <img src={ARTERIA} alt="ARTERIA" className="proyecto-imagen" />
                    <h3 className="proyecto-nombre">ARTERIA</h3>
                    <p className="proyecto-descripcion">{i18n.t('projects.arteriaDescription')}</p>
                    <button className="leer-mas" onClick={() => navigate('/arteria')}>
                        {i18n.t('projects.readMore')}
                    </button>
                </div>
                <div className="proyecto-card">
                    <img src={URBANO} alt="URBANO" className="proyecto-imagen" />
                    <h3 className="proyecto-nombre">URBANO</h3>
                    <p className="proyecto-descripcion">{i18n.t('projects.urbanoDescription')}</p>
                    <button className="leer-mas" onClick={() => navigate('/urbano')}>
                        {i18n.t('projects.readMore')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
