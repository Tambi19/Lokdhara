import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import MonasteryPhotoShowcase from "./components/MonasteryPhotoShowcase";
import MonasteryGrid from "./components/MonasteryGrid";
import Footer from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import TimeTravel from "./components/TimeTravel";
import CrowdReportTab from "./components/CrowdReportTab";
import FolktaleSection from "./components/FolktaleSection";
import "@google/model-viewer";

function App() {
const [activeTab, setActiveTab] = useState<"home" | "explore" | "crowdreport" | "timetravel" | "folktales">("home");

  const handleNavigate = (tab: "home" | "explore" | "crowdreport" | "timetravel") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />

      {/* Conditional rendering */}
      {activeTab === "home" && (
        <>
          <Hero onNavigate={handleNavigate} />
          <MonasteryPhotoShowcase />
        </>
      )}

      {activeTab === "explore" && <MonasteryGrid />}

      {activeTab === "folktales" && <FolktaleSection />}

      {activeTab === "crowdreport" && <CrowdReportTab />}

      {activeTab === "timetravel" && <TimeTravel onBack={() => setActiveTab("home")} />}

      <Footer />
      <Chatbot />
    </div>
  );
}



export default App;
