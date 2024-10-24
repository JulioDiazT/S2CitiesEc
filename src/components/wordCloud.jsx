import React, { useState, useEffect } from 'react';
import './WordCloud.css';
import { useTranslation } from 'react-i18next';

const WordCloud = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  const words = [
    { text: t('wordcloud.architecture'), size: '2.8rem', color: '#1e6794', weight: 'bold' },
    { text: t('wordcloud.rivers'), size: '2.5rem', color: '#E55218', weight: 'normal' },
    { text: t('wordcloud.parks'), size: '2.2rem', color: '#1e6794', weight: 'bold' },
    { text: t('wordcloud.clean'), size: '2rem', color: '#f7be12', weight: 'bold' },
    { text: t('wordcloud.secure'), size: '1.5rem', color: '#ED6A60', weight: 'normal' },
    { text: t('wordcloud.greenSpaces'), size: '2.5rem', color: '#1e6794', weight: 'bold' },
    { text: t('wordcloud.culture'), size: '2.3rem', color: '#f7be12', weight: 'normal' },
    { text: t('wordcloud.art'), size: '1.8rem', color: '#1e6794', weight: 'bold' },
    { text: t('wordcloud.neighborhoodCommunity'), size: '1.5rem', color: '#ED6A60', weight: 'normal' },
    { text: t('wordcloud.petFriendly'), size: '1.2rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.gastronomy'), size: '2rem', color: '#E55218', weight: 'bold' },
    { text: t('wordcloud.tram'), size: '1.2rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.friendly'), size: '2.5rem', color: '#ED6A60', weight: 'bold' },
    { text: t('wordcloud.nature'), size: '2.3rem', color: '#f7be12', weight: 'normal' },
    { text: t('wordcloud.historic'), size: '1.7rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.mountainRoute'), size: '1.5rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.churches'), size: '1.3rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.colorful'), size: '2.2rem', color: '#E55218', weight: 'bold' },
    { text: t('wordcloud.diverse'), size: '1.5rem', color: '#ED6A60', weight: 'normal' },
    { text: t('wordcloud.caredFor'), size: '1.2rem', color: '#f7be12', weight: 'normal' },
    { text: t('wordcloud.murals'), size: '2.2rem', color: '#1e6794', weight: 'bold' },
    { text: t('wordcloud.publicBenches'), size: '1.3rem', color: '#E55218', weight: 'normal' },
    { text: t('wordcloud.aesthetic'), size: '1.3rem', color: '#f7be12', weight: 'normal' },
    { text: t('wordcloud.peaceful'), size: '1.2rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.communityLife'), size: '2rem', color: '#E55218', weight: 'bold' },
    { text: t('wordcloud.bikeRides'), size: '1.2rem', color: '#1e6794', weight: 'normal' },
    { text: t('wordcloud.culturalWealth'), size: '2rem', color: '#ED6A60', weight: 'bold' },
    { text: t('wordcloud.green'), size: '1.3rem', color: '#f7be12', weight: 'normal' },
    { text: t('wordcloud.culturalProjects'), size: '1.8rem', color: '#E55218', weight: 'normal' },
    { text: t('wordcloud.beautifulViews'), size: '1.8rem', color: '#1e6794', weight: 'bold' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on initial load

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedWords = isMobile ? words.slice(0, 15) : words; // Show only 15 words on mobile

  return (
    <div className="word-cloud-container">
      <h2 className="word-cloud-title">{t('wordcloud.title')}</h2>
      <div className="word-grid">
        {displayedWords.map((word, index) => (
          <span
            key={index}
            className="word"
            style={{
              fontSize: word.size,
              color: word.color,
              fontWeight: word.weight,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordCloud;
