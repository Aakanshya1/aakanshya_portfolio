import { useState } from 'react'

import './App.css'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'

function App() {

  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader ? (
        <Preloader onComplete={() => setShowPreloader(false)} />
      ) : (
        <div className="scroll-smooth ">
        <Navbar />
        <section id="landing"><Landing /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
      )}
    </>
  );
};

export default App
