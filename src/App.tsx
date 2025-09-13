import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import MonasteryPhotoShowcase from './components/MonasteryPhotoShowcase';
import MonasteryGrid from './components/MonasteryGrid';
import InteractiveMap from './components/InteractiveMap';
import ArchiveSection from './components/ArchiveSection';
import EventsSection from './components/EventsSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MonasteryPhotoShowcase />
      <MonasteryGrid />
      <InteractiveMap />
      <ArchiveSection />
      <EventsSection />
      <ShopSection />
      <Footer />
    </div>
  );
}

export default App;