import React, { useEffect, useRef } from 'react';
import './team.css';
import { useTranslation } from 'react-i18next';
import Pia from '../assets/images/equipo/pia.png';
import Vivi from '../assets/images/equipo/vivi.png';
import Martin from '../assets/images/equipo/martin.png';
import Ame from '../assets/images/equipo/ame.png';
import Pedro from '../assets/images/equipo/pedro.png';
import Cris from '../assets/images/equipo/cris.png';


const Team = () => {
    const { t } = useTranslation();  // Hook de i18n para traducir
    const sectionRef = useRef(null);

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

    // Datos del equipo traducidos con i18n
    const teamMembers = [
        { name: t('team.viviana.name'), age: t('team.viviana.age'), role: t('team.viviana.role'), description: t('team.viviana.description'), image: Vivi },

        { name: t('team.amelia.name'), age: t('team.amelia.age'), role: t('team.amelia.role'), description: t('team.amelia.description'), image: Ame },
        { name: t('team.cristina.name'), age: t('team.cristina.age'), role: t('team.cristina.role'), description: t('team.cristina.description'), image: Cris },
        { name: t('team.martin.name'), age: t('team.martin.age'), role: t('team.martin.role'), description: t('team.martin.description'), image: Martin },
        { name: t('team.pedro.name'), age: t('team.pedro.age'), role: t('team.pedro.role'), description: t('team.pedro.description'), image: Pedro },
        { name: t('team.maria.name'), age: t('team.maria.age'), role: t('team.maria.role'), description: t('team.maria.description'), image: Pia },
    ];

    return (
        <section ref={sectionRef} className="team-section" id='team'>
            <h2 className="team-title">{t('team.title')}</h2>
            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="team-photo-wrapper">
                            <img src={member.image} alt={member.name} className="team-photo" />
                        </div>
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-age">{member.age}</p>
                        <p className="team-role">{member.role}</p>
                        <p className="team-description">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
