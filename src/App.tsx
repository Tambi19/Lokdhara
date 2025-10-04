import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import MonasteryPhotoShowcase from "./components/MonasteryPhotoShowcase";
import MonasteryGrid from "./components/MonasteryGrid";
import Footer from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import TimeTravel from "./components/TimeTravel";
import CrowdReportTab from "./components/CrowdReportTab.tsx";
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
          <CrowdReportTab />
          <Footer />
        </>
      )}

      {activeTab === "timetravel" && <TimeTravel onBack={() => setActiveTab("home")} />}

      <Chatbot />
    </div>
  );
}

export default App;
