import React, { useState } from "react";
import { Search, Clock } from "lucide-react"; // Removed Landmark as it was not used

// --- 1. UPDATED Monument Type and Data ---
type Monument = {
  id: number;
  name: string;
  location: string;
  category: string;
  image: string; // This will be the "Now" image
  thenImage: string; // ADDED: This will be the "Then" image
  description: string; // ADDED: Description for the monument
};

const monuments: Monument[] = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "Mausoleum",
    image:
      "https://static.wixstatic.com/media/055605_65e20a7fcbc54e2e8720adfc2544c35e~mv2.jpg/v1/fill/w_1800,h_1082,al_c,q_85/taj_new_contant_edited.jpg", // Current image
    thenImage: "https://preview.redd.it/earliest-known-photograph-of-the-taj-mahal-1850s-v0-cn7xind4e4w81.jpg?width=640&crop=smart&auto=webp&s=6eb42c1686877ac3086696be610403d67b16bcc9", // Example historical image
    description: "Symbol of eternal love built by Shah Jahan in 1632. A magnificent white marble mausoleum located on the right bank of the Yamuna River in Agra, renowned for its intricate carvings and perfect symmetry.",
  },
  {
    id: 2,
    name: "Hampi",
    location: "Karnataka",
    category: "Ruins",
    image: "https://blogs.pathbeat.in/wp-content/uploads/2024/09/Hampi_karnataka.jpg", // Current image
    thenImage: "https://explorehampi.com/wp-content/uploads/2021/07/Vittala-Temple-Stone-Chariot-Andrew-Charles-Brisbane-Neill-1856.jpg", // Example historical/artistic rendition
    description: "Ruins of the Vijayanagara empire, 14th century glory. Hampi is a UNESCO World Heritage Site, known for its boulder-strewn landscape and numerous temples, monolithic sculptures, and other ancient monuments.",
  },
  {
    id: 3,
    name: "Konark Sun Temple",
    location: "Odisha",
    category: "Temple",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/konark-temple-puri-odisha-2-attr-hero", // Current image
    thenImage: "https://cdn.thestonestudio.in/wp-content/uploads/2021/12/Konark-Sun-Temple-1.png", // Example historical image
    description: "Famous for its stone chariot with carved wheels & walls. This 13th-century CE Sun Temple is designed as a colossal chariot pulled by seven horses, symbolizing the sun god Surya's chariot.",
  },
];
// --- End Monument Type and Data ---


type Props = { onBack: () => void };

// --- 2. NEW ThenNowView Component ---
// This component displays the "Then" and "Now" images for a selected monument.
type ThenNowViewProps = {
  monument: Monument; // The selected monument to display
  onBack: () => void; // Function to go back to the monument list
};

const ThenNowView: React.FC<ThenNowViewProps> = ({ monument, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{monument.name}</h2>
        <p className="text-xl text-gray-300">
          See the transformation of {monument.name}{" "}
          <span className="text-purple-400 font-semibold">Then vs Now</span>
        </p>
        <p className="text-md text-gray-400 mt-2 max-w-2xl mx-auto">
          {monument.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {/* Then Image */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <img
            src={monument.thenImage}
            alt={`${monument.name} - Then`}
            // --- UPDATED LINE ---
            className="w-full h-96 object-cover" 
          />
          <p className="p-4 text-center text-lg font-semibold bg-gray-700">
            Then
          </p>
        </div>

        {/* Now Image */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <img
            src={monument.image}
            alt={`${monument.name} - Now`}
            // --- UPDATED LINE ---
            className="w-full h-96 object-cover"
          />
          <p className="p-4 text-center text-lg font-semibold bg-gray-700">
            Now
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white"
        >
          ⬅ Back to Monuments
        </button>
      </div>
    </div>
  );
};
// --- End ThenNowView Component ---


const TimeTravel: React.FC<Props> = ({ onBack }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // NEW STATE: To track which monument is selected for Time Travel view
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);

  const categories = ["All", "Temple", "Mausoleum", "Ruins"];

  const filteredMonuments = monuments.filter(
    (m) =>
      (selectedCategory === "All" || m.category === selectedCategory) &&
      m.name.toLowerCase().includes(search.toLowerCase())
  );

  // NEW: Function to handle Time Travel button click
  const handleTimeTravelClick = (monument: Monument) => {
    setSelectedMonument(monument);
  };

  // NEW: Function to go back from the ThenNowView to the monument list
  const handleBackToMonuments = () => {
    setSelectedMonument(null);
  };

  // Conditional Rendering: Show ThenNowView if a monument is selected, otherwise show the list
  if (selectedMonument) {
    return <ThenNowView monument={selectedMonument} onBack={handleBackToMonuments} />;
  }

  // If no monument is selected, render the list of monuments
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6"> {/* Adjusted py-16 */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
             Time Travel Mode
          </h1>
          <p className="text-lg text-gray-300">
            Discover monuments through <span className="text-purple-400 font-semibold">Then vs Now</span> views powered by AI.
          </p>
        </div>

        {/* Search + Filter Panel */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          {/* Search */}
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-full md:w-1/2">
            <Search className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search monuments..."
              className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Monuments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMonuments.map((site) => (
            <div
              key={site.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/30 transition transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{site.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{site.location}</p>
                  {/* Display description in the card */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {site.description}
                  </p>
                </div>

                {/* Time Travel Button - NOW FUNCTIONAL */}
                <button
                  onClick={() => handleTimeTravelClick(site)} // Call the handler with the current monument
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-800 transition-all text-sm font-semibold shadow-md mt-auto"
                >
                  <Clock className="w-4 h-4" />
                  Time Travel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white"
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeTravel;