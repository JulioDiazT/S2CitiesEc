import React from 'react';
import ScrollToTop from './components/ScrollToTop';
import Menu from './components/Menu';
import Cuenca from './components/Cuenca';
import Footer from './components/footer';
import Projects from './components/projects';
import PodcastS from './components/podcast';
import Testimonies from './components/testimonies';
import SupportSection from './components/SupportSection';
import PortadaHome from './components/coverPageHome';
import Mision from './components/mision';
import Impact from './components/impact';
import Team from './components/team';
import WordCloud from './components/wordCloud';

function App() {
  return (
    <>
      <ScrollToTop />  {/* Asegura que la página siempre comience desde la parte superior */}
      <header className="header">
        <Menu />
      </header>

      <main>
        <PortadaHome />
        <Mision />
        <Testimonies />
        <Cuenca />
        <WordCloud/>
        <Impact />

        <Projects />
        <Team />
        <PodcastS />
        <SupportSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
