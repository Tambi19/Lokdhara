// src/components/ARTab.jsx
import React, { useState } from "react";

type ARTabProps = {
  onBack: () => void; // onBack is a function with no parameters
};

const ARTab: React.FC<ARTabProps> = ({ onBack }) => {
  const [selectedLang, setSelectedLang] = useState("en");

  const audioFiles: Record<string, string> = {
  en: "/audio/monument_en.mp3",
  hi: "/audio/monument_hi.mp3",
  fr: "/audio/monument_fr.mp3",
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">AR View Mode</h1>

      <model-viewer
        src="/models/monument.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "400px" }}
      ></model-viewer>

      {/* Language Selector */}
      <div className="mt-6">
        <label className="mr-2 font-medium">Choose Language:</label>
        <select
          className="border px-3 py-1 rounded text-black"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Audio Guide */}
      <div className="mt-4">
        <audio controls key={selectedLang}>
    <source src={audioFiles[selectedLang]} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <button
        onClick={onBack}
        className="mt-6 px-6 py-2 bg-purple-500 rounded-lg"
      >
        ⬅ Back Home
      </button>
    </div>
  );
};

export default ARTab;
