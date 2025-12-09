import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import StickyCTA from './components/StickyCTA';
import Services from './components/Services';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Process from './components/Process';
import About from './components/About';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white">
        <CustomCursor />
        <ScrollProgress />
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Projects />
          <Stats />
          <About />
          <Experience />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <StickyCTA />
    </div>
  );
}

export default App;