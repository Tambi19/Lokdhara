import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import MonasteryPhotoShowcase from "./components/MonasteryPhotoShowcase";
import MonasteryGrid from "./components/MonasteryGrid";
import Footer from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import TimeTravel from "./components/TimeTravel";
import ARView from "./components/Arview";
import "@google/model-viewer";

function App() {
  const [activeTab, setActiveTab] = useState<"home" | "timetravel" | "arview">("home");

  return (
    <div className="min-h-screen">
      <Header />

      {activeTab === "home" && (
        <>
          <Hero onNavigate={setActiveTab} />
          <MonasteryPhotoShowcase />
          <MonasteryGrid />
          <Footer />
        </>
      )}

      {activeTab === "timetravel" && <TimeTravel onBack={() => setActiveTab("home")} />}
      {activeTab === "arview" && <ARView onBack={() => setActiveTab("home")} />}

      <Chatbot />
    </div>
  );
}

export default App;
