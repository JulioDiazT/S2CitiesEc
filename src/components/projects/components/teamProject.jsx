import React from 'react';
import './teamProject.css';
import { useTranslation } from 'react-i18next';

const TeamSection = ({ teamMembers }) => {
  const { t } = useTranslation(); 

  return (
    <section className="team-section">
      <h2 className="team-title">{t('menu.team')}</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3 className="member-name">
                {member.name}, {member.age} {t('testimonies.yearsold')}
              </h3>
              <p className="member-testimonie">{member.testimonie}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
