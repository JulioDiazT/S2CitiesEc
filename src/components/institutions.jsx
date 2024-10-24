import React, { useEffect } from 'react';
import './i.css';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Instituciones = () => {
    const { i18n } = useTranslation();
    return (
        <>
            <h2> Quienes forman parte </h2>
            <section id="impacto" className="listaInstituciones">
                <img> </img>
                <h2>Viaje a Medellín </h2>
                <h4> descripción </h4>
            </section>
          
        </>
    );
};
export default Instituciones;
