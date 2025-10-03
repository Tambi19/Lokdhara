import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
import MonasteryPhotoShowcase from './components/MonasteryPhotoShowcase';
import MonasteryGrid from './components/MonasteryGrid';
import Footer from './components/Footer';
import { Chatbot } from './components/Chatbot';
import '@google/model-viewer';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <FeaturesSection /> */}
      <MonasteryPhotoShowcase />
      <MonasteryGrid />
      <Footer /> 
      <Chatbot />
    </div>
  );
}

export default App;