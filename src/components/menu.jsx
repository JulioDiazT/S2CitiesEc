import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LS2C from '../assets/images/logoS2C.png';
import flagEN from '../assets/images/flagEN.svg';
import flagES from '../assets/images/flagES.svg';
import './Menu.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language); // Save the selected language to localStorage
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
      <nav>
        <Link to="/" onClick={() => scrollToSection('top')}>
          <img src={LS2C} alt="logo S2C" className="logoS2C" />
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => handleNavigation('cuenca')}>{i18n.t('menu.cuenca')}</a></li>
          <li><a onClick={() => handleNavigation('youths')}>{i18n.t('menu.youths')}</a></li>
          <li><a onClick={() => handleNavigation('projects')}>{i18n.t('menu.projects')}</a></li>
          <li><a onClick={() => handleNavigation('team')}>{i18n.t('menu.team')}</a></li>
          <li><a onClick={() => handleNavigation('support')}>{i18n.t('menu.contact')}</a></li>
          <li className="language-switcher">
            <button 
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'active' : ''}
            >
              <img src={flagEN} alt="English" />
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={i18n.language === 'es' ? 'active' : ''}
            >
              <img src={flagES} alt="Español" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
