import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ResumeSection from './Components/ResumeSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ ContactSection';
function App() {
  return (
    <div className="App">
          <Navbar />
      <Hero />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
