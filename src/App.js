
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';

function App() {
    useEffect(() => {
    AOS.init({
    duration: 1000, 
    once: true      
    });
    }, []);

  return (
    <>
    <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Project />
        <Contact />  
        <Footer />     
    </div>
    <SpeedInsights />
    </>
  );
}

export default App;
