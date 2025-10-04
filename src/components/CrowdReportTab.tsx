import React, { useState, ChangeEvent, FormEvent } from "react";
import { Upload, MapPin, Camera, Send } from "lucide-react";

interface GeoTag {
  lat: number;
  lng: number;
}

const CrowdReportTab: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [geoTag, setGeoTag] = useState<GeoTag | null>(null);

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGeoTag = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoTag({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Unable to fetch your location.");
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!photo || !description) {
      alert("Please upload a photo and provide a description.");
      return;
    }
    const reportData = {
      photoName: photo.name,
      description,
      location,
      geoTag,
      timestamp: new Date().toISOString(),
    };
    console.log("Report Submitted:", reportData);
    alert("✅ Thank you! Your report has been submitted successfully.");
    setPhoto(null);
    setPreview(null);
    setDescription("");
    setLocation("");
    setGeoTag(null);
  };

  return (
    <section
      id="crowdreport"
      className="py-24 relative bg-gradient-to-br from-amber-50 via-white to-yellow-100 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>

      <div className="relative container mx-auto px-6 max-w-3xl">
        <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-amber-100 p-10 hover:shadow-yellow-200 transition-all duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            🏛️ Crowdsourced Site Reporting
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Help preserve our heritage by uploading real-time site photos and
            condition updates. 🌍
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Photo
              </label>
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-amber-300 bg-amber-50 rounded-2xl cursor-pointer hover:bg-amber-100 transition relative group">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-amber-600">
                    <Upload className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">
                      Click or drag to upload
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Condition / Report
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the current condition or issue observed..."
                rows={4}
                className="w-full border border-amber-200 bg-amber-50 rounded-2xl p-4 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:bg-white outline-none resize-none"
              />
            </div>

            {/* 📍 Responsive Location + Geo-tag Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2 flex-1 w-full">
                <MapPin className="w-6 h-6 text-yellow-600 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter site/location name"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 border border-amber-200 bg-amber-50 rounded-2xl p-3 text-gray-700 focus:ring-2 focus:ring-yellow-500 focus:bg-white outline-none w-full"
                />
              </div>

              <button
                type="button"
                onClick={handleGeoTag}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto"
              >
                <Camera className="w-4 h-4" /> Geo-tag
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-300 to-orange-500 text-white py-3 rounded-2xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 flex justify-center items-center gap-3 shadow-lg shadow-amber-200"
            >
              <Send className="w-5 h-5" /> Submit Report
            </button>

            {geoTag && (
              <div className="text-sm text-gray-500 mt-4 text-center bg-amber-50 rounded-xl py-2 border">
                📍 Geo-tag: {geoTag.lat.toFixed(4)}, {geoTag.lng.toFixed(4)}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CrowdReportTab;
