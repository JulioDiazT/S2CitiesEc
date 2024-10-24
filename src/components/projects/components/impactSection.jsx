import React, { useEffect, useRef } from 'react';
import './ImpactSection.css';

const ImpactSection = ({ title, impactData }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate');

            // Iniciar conteo de los números
            const counters = document.querySelectorAll('.impact-number');
            const duration = 3000; // Duración fija de 3 segundos

            counters.forEach((counter) => {
              const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const increment = target / (duration / 20); // Ajuste para que todos duren 3 segundos

                if (count < target) {
                  counter.innerText = Math.ceil(count + increment);
                  setTimeout(updateCount, 20);
                } else {
                  counter.innerText = target;
                }
              };
              updateCount();
            });
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
    <section ref={sectionRef} className="impact-section">
      <h2 className="impact-title">{title}</h2>
      <div className="impact-container">
        {impactData.map((item, index) => (
          <div className="impact-item" key={index}>
            <item.icon className="impact-icon" />
            <div className="impact-text-container">
              <h3 className="impact-number" data-count={item.count}>0</h3>
              <p className="impact-description">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
