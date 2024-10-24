import React from 'react';
import PortadaS2Cities from '../assets/images/PortadaS2Cities.png';
import LGIB from '../assets/images/GIB.png';
import LHUASIPICHANGA from '../assets/images/HUASIPICHANGA.png';
import LINTEGRAR from '../assets/images/INTEGRAR.jpeg';
import LAMARU from '../assets/images/AMARU.png';
import ICLEI from '../assets/images/ICLEI.png';

import MUNICIPIO from '../assets/images/cuenca.png';
import './coverPageHome.css';

const CoverPageHome = () => {
  return (
    <div className="portada">
      <img
        src={PortadaS2Cities}
        className="imgPortada"
        alt="Portada S2Cities"
      />
      <section className="listalogos">
        <img src={LGIB} alt="logoGIB" className="logoInstitucion" />
        <img src={ICLEI} alt="logoICLEI" className="logoInstitucion" />
        <img src={LHUASIPICHANGA} alt="logoHuasipichanga" className="logoInstitucion" />
        <img src={LINTEGRAR} alt="logoIntegrar" className="logoInstitucion" />
        <img src={LAMARU} alt="logoAmaru" className="logoInstitucion" />
        <img src={MUNICIPIO} alt="logoMunicipio" className="logoInstitucion" />
      </section>
    </div>
  );
};

export default CoverPageHome;
