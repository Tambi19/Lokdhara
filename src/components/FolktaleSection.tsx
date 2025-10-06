// FolktaleSection.tsx
import React, { useState } from "react";
import { Play, Headphones, BookOpen, Video } from "lucide-react";

const folktales = [
  {
    id: 1,
    title: "The Floating Girls of Konark",
    region: "Odisha",
    genre: "Legend",
    duration: "5 min",
    image: "https://i.ytimg.com/vi/HMyPsLbdI3U/hqdefault.jpg",
    audio: "/audio/folktales/konark_floating_girls.mp3",
        video: "https://www.youtube.com/embed/EJ3L4wL4mwY",

    description: "The legend of the Konark Sun Temple's floating girls, believed to be spirits of devadasis, whose whispers and ghungroo are said to haunt the temple.",
  },
  {
    id: 2,
    title: "Dharmapada's Sacrifice",
    region: "Odisha",
    genre: "Legend",
    duration: "6 min",
    image: "https://i.ytimg.com/vi/qmgkbZrxDCE/maxresdefault.jpg",
    audio: "/audio/folktales/dharmapada.mp3",
        video: "https://www.youtube.com/embed/tiwteteu9AM?si=UltZQ0Q32VT3xovd",

    description: "The tale of Dharmapada, the 12-year-old son of a temple architect, who sacrificed himself to save other craftsmen during the Konark Sun Temple's construction.",
  },
  {
    id: 3,
    title: "Mysteries of Jagannath Temple",
    region: "Odisha",
    genre: "Mystery",
    duration: "5 min",
    image: "https://saishishirtours.in/wp-content/uploads/2024/11/History-mysteries-of-Puri-Jagannath-Temple.webp",
    audio: "/audio/folktales/jagannath_temple.mp3",
        video: "https://www.youtube.com/embed/VkG5dZua_qM?si=hnowj6j4wKlivhDH",

    description: "Stories of the Jagannath Temple include a flag flying against the wind, a dome that casts no shadow, and the hidden Brahma Padartha inside the idol.",
  },
  {
  id: 4,
  title: "Mysteries of the Taj Mahal",
  region: "Agra, India",
  genre: "Historical Mystery",
  duration: "6 min",
  image: "https://i.ytimg.com/vi/eN6vyH_iImE/maxresdefault.jpg",
  audio: "/audio/folktales/taj_mahal.mp3",
  video: "https://www.youtube.com/embed/EJ3L4wL4mwY", // replace with actual video embed URL
  description: "Explore the hidden mysteries of the Taj Mahal, including tales of secret chambers, architectural marvels, and the love story behind this iconic monument."
},
{
  id: 5,
  title: "Secrets of Humayun's Tomb",
  region: "Delhi, India",
  genre: "Historical Mystery",
  duration: "5 min",
  image: "https://www.tripgurugo.com/wp-content/uploads/2023/07/Humayuns-Tomb-1.jpg",
  audio: "/audio/folktales/humayuns_tomb.mp3",
  video: "https://youtube.com/embed/s-jioYRmcZo?si=AvT_R507rOQIPkWZ", // replace with actual video embed URL
  description: "Discover the secrets of Humayun's Tomb, from hidden passages to architectural wonders, and the fascinating stories of the Mughal dynasty."
},
{
  id: 6,
  title: "Secrets of Fatehpur Sikri",
  region: "Uttar Pradesh, India",
  genre: "Historical Mystery",
  duration: "5 min",
  image: "https://prestigeindiaholidays.com/wp-content/uploads/2025/07/Fatehpur-Sikri-History-1.webp",
  audio: "/audio/folktales/fatehpur_sikri.mp3",
  video: "https://www.youtube.com/embed/rFrpRU7tRRE?si=GF22CxCeGLHOCf9e", // replace with actual embed URL
  description: "Unveil the hidden secrets of Fatehpur Sikri, from its mysterious ghostly legends to secret passages and architectural wonders of the Mughal era."
},


 
];


const FolktaleSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [videoStory, setVideoStory] = useState<any>(null);

  return (
     <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-700/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-indigo-700/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6 animate-fadeInDown">
          📖 Whispers of the Past
        </h2>
        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto animate-fadeIn">
          Dive into mystical folktales, legends, and forgotten stories told by our ancestors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {folktales.map((story) => (
            <div
              key={story.id}
              className="group relative bg-gray-800 rounded-3xl shadow-xl hover:shadow-purple-500/40 transition-transform transform hover:-translate-y-3 cursor-pointer overflow-hidden"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-t-3xl transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-purple-600/90 px-3 py-1 rounded-full text-sm font-semibold text-white shadow-md flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {story.genre}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-400 text-sm">{story.region} • {story.duration}</p>
                <p className="text-gray-300 text-sm line-clamp-3">{story.description}</p>

                <div className="mt-4 flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Headphones className="w-5 h-5" /> Listen Now
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVideoStory(story);
                    }}
                    className="flex-1 bg-gradient-to-r from-pink-600 to-red-500 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold shadow-md group-hover:scale-105 transition-transform duration-300"
                  >
                    <Video className="w-5 h-5" /> Watch Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Audio Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-gray-900 rounded-3xl p-8 max-w-md w-full text-center relative shadow-2xl">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
              >
                ✕
              </button>
              <h3 className="text-3xl font-bold mb-3 text-purple-400">{selectedStory.title}</h3>
              <p className="text-gray-300 mb-6">{selectedStory.description}</p>
              <audio
                src={selectedStory.audio}
                controls
                autoPlay
                className="w-full mb-4 rounded-lg"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              >
                Back to Tales
              </button>
            </div>
          </div>
        )}

        {/* Video Modal */}
{/* Video Modal */}
{videoStory && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn p-4">
    <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
      
      {/* Close button — fixed and safe for mobile */}
      <button
        onClick={() => setVideoStory(null)}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-300 hover:text-red-500 text-4xl font-bold z-50 bg-black/40 rounded-full p-2 backdrop-blur-sm"
        style={{
          zIndex: 60,
          touchAction: "manipulation",
        }}
      >
        ✕
      </button>

      {/* Responsive iframe container */}
      <div className="w-full aspect-video max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={videoStory.video}
          title={videoStory.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
)}



      </div>
    </section>
  );
};

export default FolktaleSection;
