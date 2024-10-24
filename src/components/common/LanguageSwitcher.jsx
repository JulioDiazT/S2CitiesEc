import React from 'react';
import flagEN from '../../assets/images/flagEN.svg'; // Asegúrate de cambiar estas rutas
import flagES from '../../assets/images/flagES.svg'; // a las imágenes correctas
import '../../i18n';

// Definición del componente funcional LanguageSwitcher
const LanguageSwitcher = ({ changeLanguage }) => {
  return (
    <div className="language-switcher">
      <img
        src={flagEN}
        alt="English"
        onClick={() => changeLanguage('en')}
        className="flag"
      />
      <img
        src={flagES}
        alt="Español"
        onClick={() => changeLanguage('es')}
        className="flag"
      />
    </div>
  );
};

export default LanguageSwitcher;
