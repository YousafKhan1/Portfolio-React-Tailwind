// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
        <Navbar onMenuToggle={setIsMenuOpen} />
        <Hero isMenuOpen={isMenuOpen} />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
