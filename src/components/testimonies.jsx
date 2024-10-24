import React, { useState, useRef } from "react";
import Slider from "react-slick";
import './testimonies.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTimes } from 'react-icons/fa'; // Importar el ícono de cierre
import P1 from '../assets/images/p1.png';
import P2 from '../assets/images/p2.png';
import P3 from '../assets/images/p3.png';
import P4 from '../assets/images/p4.png';
import P5 from '../assets/images/p5.png';
import P6 from '../assets/images/p6.png';
import P7 from '../assets/images/p7.png';
import T1 from '../assets/videos/T1.mp4';
import V1 from '../assets/videos/V1.mp4';
import V2 from '../assets/videos/V2.mp4';
import V3 from '../assets/videos/V3.mp4';
import V4 from '../assets/videos/V4.mp4';

import { useTranslation } from 'react-i18next';
import '../i18n';


const testimoniesData = [
    { img: P1, name: 'Andrés', age: 26, video: V3 },
    { img: P2, name: 'Carolina', age: 25, video: V1 },
    { img: P3, name: 'Pamela', age: 32, video: T1 },
    { img: P4, name: 'Margot', age: 23, video: V2 },
    { img: P5, name: 'Dani', age: 25, video: V4 },
    { img: P6, name: 'Fernando', age: 22, video: T1 },
    { img: P7, name: 'Patricia', age: 26, video: T1 },
];


const Testimonies = () => {
    const { i18n } = useTranslation();
    const [activeTestimonio, setActiveTestimonio] = useState(null);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Mostrar 4 testimonios en pantallas grandes
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleVideoToggle = (index) => {
        if (activeTestimonio === index) {
            setActiveTestimonio(null);
            sliderRef.current.slickPlay(); // Reanudar la rotación después de cerrar el video
        } else {
            setActiveTestimonio(index);
            sliderRef.current.slickPause(); // Detener la rotación al abrir el video
        }
    };

    return (
        <div id="youths">
            <section className="titles">
                <h3  >   {i18n.t('testimonies.hook')} </h3>
                <h2 >   {i18n.t('testimonies.title')} </h2>
            </section>

            <div className="testimonies-wrapper">
                <Slider ref={sliderRef} {...settings} className="slider-wrapper">
                    {testimoniesData.map((testimonio, index) => (
                        <div key={index} className="testimonio" onClick={() => handleVideoToggle(index)}>
                            <div className={`testimonio-image ${activeTestimonio === index ? "highlight" : ""}`}>
                                <img src={testimonio.img} alt={testimonio.name} />
                            </div>
                            <h3 className="testimonio-name">{testimonio.name}, {testimonio.age} {i18n.t('testimonies.yearsold')} </h3>
                        </div>
                    ))}
                </Slider>

                {activeTestimonio !== null && (
                    <div className="video-container">
                        <video id="testimonioVideo" controls autoPlay>
                            <source src={testimoniesData[activeTestimonio].video} type="video/mp4" />
                            Tu navegador no soporta el formato de video.
                        </video>
                        <button className="close-video" onClick={() => handleVideoToggle(activeTestimonio)}>
                            <FaTimes size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>);
};

export default Testimonies;
