import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import Achievements from "./components/Achievements";
import AboutMe from './components/AboutMe';


function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main theme={mode} />
        <AboutMe />
        <Expertise />
        <Timeline />
        <Project />
        <Achievements />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
