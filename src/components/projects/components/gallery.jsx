import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { useTranslation } from 'react-i18next';


const Gallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const { t } = useTranslation(); // Hook for translations


  // Automatic image rotation
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [activeIndex]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Rotate image every 3 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  // Change image when clicking on a thumbnail
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    stopAutoSlide();
  };

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate');
          } else {
            section.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section">
      <h2 className="gallery-title">{t('gallery')}</h2>
      <div className="title-subtitle-line"></div>

      <div className="gallery-container">
        {/* Large Image on the left */}
        <div className="gallery-sidebar">
          <div className="image-container">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="gallery-img-large"
            />
          </div>
        </div>

        {/* Thumbnails below for smaller screens */}
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`thumbnail-img ${index === activeIndex ? 'highlight' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
