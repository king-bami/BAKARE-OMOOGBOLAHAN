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

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white">
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Experience />
          <Projects />
          <Stats />
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