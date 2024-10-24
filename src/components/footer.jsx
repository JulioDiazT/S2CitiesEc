import React from 'react';
import './footer.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Navegación
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate(); // Navegación programática
  const location = useLocation(); // Obtiene la ubicación actual
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navega a la página principal si no está en ella
      setTimeout(() => {
        scrollToSection(sectionId); // Espera y luego hace scroll a la sección
      }, 300);
    } else {
      scrollToSection(sectionId); // Si ya está en la página, solo hace scroll
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de Links Rápidos */}
        <div className="footer-section links">
          <h4 className="footer-title">{t('footer.quickLinks')}</h4>
          <ul>
            <li>
              <a onClick={() => handleNavigation('projects')} href="#projects">
                {t('footer.projects')}
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('youths')} href="#youths">
                {t('footer.youths')}
              </a>
            </li>
            <li>
              <a onClick={() => handleNavigation('support')} href="#support">
                {t('footer.support')}
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-section contact">
          <h4 className="footer-title">{t('footer.contactUs')}</h4>
          <p>Email: s2cities.cuenca@husipichanga.com</p>
          <a href="https://www.instagram.com/direct/t/17842083878975336" className="footer-link">
            {t('footer.chatOnWhatsapp')}
          </a>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="footer-section social-media">
          <h4 className="footer-title">{t('footer.followUs')}</h4>
          <div className="social-icons">
            <a href="https://wa.me/+593994746521" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/s2citiescuenca/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@s2citiescuenca" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
              
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Derechos Reservados */}
      <div className="footer-bottom">
        <p>&copy; 2024 S2C Ecuador. {t('footer.allRightsReserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
