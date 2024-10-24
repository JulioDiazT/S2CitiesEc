import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './mision.css';
import Image1 from '../assets/images/B1.jpg';
import Image2 from '../assets/images/biblioPortada.jpg';
import Image3 from '../assets/images/B2.jpg';
import Image4 from '../assets/images/B4.JPG';
import { useTranslation } from 'react-i18next';
import '../i18n';
import './vision.css';

const Mision = () => {
  const swiperRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); 
      }
    }, 4500); 

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
  }, []);

  return (
    <div className="carousel-container">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Guardar la referencia de Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div className="carousel-slide">
            <img src={Image1} alt="Slide 1" className="carousel-image" />
            <div className="carousel-text">
              <h3 dangerouslySetInnerHTML={{ __html: i18n.t('vision.description') }}></h3>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide">
            <img src={Image2} alt="Slide 2" className="carousel-image" />
            <div className="carousel-text">
              <h3 dangerouslySetInnerHTML={{ __html: i18n.t('vision.description') }}></h3>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide">
            <img src={Image3} alt="Slide 3" className="carousel-image" />
            <div className="carousel-text">
              <h3 dangerouslySetInnerHTML={{ __html: i18n.t('vision.description') }}></h3>
              </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="carousel-slide">
            <img src={Image4} alt="Slide 4" className="carousel-image" />
            <div className="carousel-text">
              <h3 dangerouslySetInnerHTML={{ __html: i18n.t('vision.description') }}></h3>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Mision;
