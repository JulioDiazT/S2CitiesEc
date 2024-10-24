import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mover el scroll a la parte superior de la página cuando cambias de ruta
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto se ejecuta cada vez que cambia la ruta

  return null;
}

export default ScrollToTop;
