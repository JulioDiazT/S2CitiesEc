import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import App from './App';
import Bibliorio from './components/projects/Bibliorio';
import Urbano from './components/projects/Urbano';
import Arteria from './components/projects/Arteria'; // Asegúrate de que la capitalización sea correcta
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);  

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/S2Cities"> {/* Agrega basename aquí */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<App />} />
        {/* Rutas para los proyectos individuales */}
        <Route path="/bibliorio" element={<Bibliorio />} />
        <Route path="/arteria" element={<Arteria />} />
        <Route path="/urbano" element={<Urbano />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
