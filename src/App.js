import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <About />
     <Work />
     <Contact />
    </div>
  );
}

export default App;
