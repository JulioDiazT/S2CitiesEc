import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../menu';
import CoverPageProject from './components/coverPageProjects';
import ImpactSection from './components/impactSection';
import Gallery from './components/gallery';
import Footer from '../footer';
import portadaImage from '../../assets/images/urbanoPortada.jpg';
import galleryImages from './components/galleryUrbano';  // Cambiar la ruta según las imágenes de la galería
import { FaUsers, FaHeartbeat, FaTree, FaShieldAlt, FaTools } from 'react-icons/fa';
import TimelineSection from './components/timelineSection';
import UrbanoDescription from './components/description';

const Urbano = () => {
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 100);
    }, []);



    const impactData = [
        { icon: FaUsers, count: 40, label: t('urbano.participants') },  // Número de participantes/asistentes
        { icon: FaHeartbeat, count: 8, label: t('urbano.safeCity') },  // Ciudad sana y segura
        { icon: FaTree, count: 4, label: t('urbano.greenAreas') },  // Necesidad de intervenciones en áreas verdes
        { icon: FaShieldAlt, count: 6, label: t('urbano.feelSafe') },  // Sensación de seguridad en la ciudad
        { icon: FaTools, count: 5, label: t('urbano.placemakingImplementations') }  // Intervenciones en el espacio público (Placemaking)
    ];


    return (
        <>
            <header>
                <Menu />
            </header>

            <CoverPageProject
                title={t('urbano.title')}
                description={t('urbano.description')}
                imageUrl={portadaImage}
            />
            <Gallery
                title={t('urbano.galleryTitle')}
                images={galleryImages}
            />
            <UrbanoDescription />
            <TimelineSection />
            <ImpactSection
                title={t('urbano.results')}
                impactData={impactData}
            />
           






            <Footer />
        </>
    );
};

export default Urbano;
