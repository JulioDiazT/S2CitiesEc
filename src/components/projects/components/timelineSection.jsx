import React, { useEffect, useState } from 'react';
import './TimelineSection.css';
import { useTranslation } from 'react-i18next';

const TimelineSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const timelineSection = document.querySelector('.timeline-section');
      const rect = timelineSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activities = [
    { title: t('urbano.timeline.activity1.title'), description: t('urbano.timeline.activity1.description') },
    { title: t('urbano.timeline.activity2.title'), description: t('urbano.timeline.activity2.description') },
    { title: t('urbano.timeline.activity3.title'), description: t('urbano.timeline.activity3.description') },
    { title: t('urbano.timeline.activity4.title'), description: t('urbano.timeline.activity4.description') },
    { title: t('urbano.timeline.activity5.title'), description: t('urbano.timeline.activity5.description') }
  ];

  return (
    <section className={`timeline-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="timeline-title">{t('urbano.timeline.title')}</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {activities.map((activity, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-circle">{index + 1}</div>
            <div className="timeline-content">
              <h3 className="timeline-activity-title">{activity.title}</h3>
              <p className="timeline-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
