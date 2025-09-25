import React, { useEffect } from "react";

interface VRModalProps {
  image: string;
  name: string;
  onClose: () => void;
}

const VRModal: React.FC<VRModalProps> = ({ image, name, onClose }) => {
  useEffect(() => {
    const pannellum = window.pannellum;
    if (pannellum) {
      pannellum.viewer("panorama", {
        type: "equirectangular",
        panorama: image,
        autoLoad: true,
        showControls: true,
      });
    } else {
      console.error("Pannellum not loaded!");
    }
  }, [image]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-11/12 h-5/6 bg-black rounded-xl shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md z-10"
        >
          ✕ Close
        </button>
        <div id="panorama" className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default VRModal;
