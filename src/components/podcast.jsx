import React, { useEffect, useRef } from 'react';
import PodcastImage from '../assets/images/podcast.png';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './Podcast.css';

const PodcastS = () => {
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
        <section id="podcast" ref={sectionRef} className="podcast-section">
            <div className="podcast-container">
                <div className="podcast-text">
                    <h2 className="podcast-title">{i18n.t('podcast.title')}</h2>
                    <p className="podcast-description">
                        {i18n.t('podcast.description')}
                    </p>
                    <div className="cta-container">
                        <p className="cta-text">{i18n.t('podcast.callToAction')}</p>
                        <div className="arrow-container">
                            <span className="arrow">↪</span> {/* Flecha curvada */}
                        </div>
                    </div>
                </div>
                <div className="podcast-image">
                    <a
                        href="https://open.spotify.com/show/0w0HZZQhB1Xl7CuJ4m53AH?si=4f93412658c04943"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="podcast-link"
                    >
                        <img
                            src={PodcastImage}
                            alt="Podcast Safe and Sound"
                            className="podcast-img"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PodcastS;
