// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Smartphone,
//   Globe,
//   Archive,
//   Calendar,
//   ShoppingBag,
//   Users,
//   Headphones,
//   Download,
// } from "lucide-react";
// // import featuresBg from "../assets/featuresbg.png";
// // import audioguide from "../assets/audioguide.png";
// // import interactiveMap from "../assets/interactivemap.png";
// // import monast from "../assets/monast.png";
// // import digitalArchive from "../assets/digitalarchive.png";
// // import culturalCalendar from "../assets/culturalcalender.png";
// // import localMarketplace from "../assets/localmarketplace.png";
// // import guide from "../assets/guide.jpg";
// // import offlineAccess from "../assets/offlineaccess.png";

// const FeaturesSection: React.FC = () => {
//   const features = [
//     { icon: <Smartphone className="w-10 h-10" />, title: "360° VR Tours", description: "Experience monasteries in stunning detail with immersive VR tours", image: monast },
//     { icon: <Globe className="w-10 h-10" />, title: "Interactive Map", description: "Navigate through Sikkim's monasteries with our smart location-based explorer", image: interactiveMap },
//     { icon: <Archive className="w-10 h-10" />, title: "Digital Archive", description: "Access ancient manuscripts, murals, and oral histories with AI-powered search", image: digitalArchive },
//     { icon: <Calendar className="w-10 h-10" />, title: "Cultural Calendar", description: "Discover and book participation in traditional festivals and ceremonies", image: culturalCalendar },
//     { icon: <ShoppingBag className="w-10 h-10" />, title: "Local Marketplace", description: "Shop authentic handicrafts and souvenirs from monastery communities", image: localMarketplace },
//     { icon: <Users className="w-10 h-10" />, title: "Guide Booking", description: "Connect with expert local guides for personalized monastery experiences", image: guide },
//     { icon: <Headphones className="w-10 h-10" />, title: "Audio Guides", description: "Listen to location-based stories and historical narratives as you explore", image: audioguide },
//     { icon: <Download className="w-10 h-10" />, title: "Offline Access", description: "Download content for exploration even in remote monastery locations", image: offlineAccess },
//   ];

//   const [index, setIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardWidth = 350; // px (same as min-w-[350px])

//   // Auto-scroll logic
//   useEffect(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);

//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setIndex((prev) => (prev + 1) % features.length);
//       }, 3000);
//     }

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [isHovered, features.length]);

//   return (
//     <section
//   className="relative py-20 flex flex-col items-center justify-center text-white overflow-hidden"
//       style={{
//         backgroundImage: `url(${featuresBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/30"></div>

//       <div className="mb-6 relative z-10 container px-6">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center font-tibetan text-black">
//           Immersive Cultural Experience
//         </h2>
//         <p className="text-lg text-black-500 max-w-3xl mx-auto text-center mb-12">
//           Discover the rich heritage of Sikkim's monasteries through cutting-edge technology and authentic cultural preservation
//         </p>

//         {/* Horizontal Carousel */}
//         <motion.div
//           ref={containerRef}
//           className="flex gap-8"
//           animate={{ x: -index * (cardWidth + 32) }} // 32px = gap-8
//           transition={{ type: "spring", stiffness: 60, damping: 20 }}
//         >
//           {features.concat(features).map((feature, idx) => (
//             <motion.div
//               key={idx}
//               className="min-w-[350px] rounded-2xl p-6 shadow-2xl relative text-white cursor-pointer"
//               style={{
//                 backgroundImage: `url(${feature.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
//               <div className="relative flex flex-col items-center justify-center">
//                 <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center shadow-md mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-center">{feature.title}</h3>
//                 <p className="text-sm text-center opacity-90">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
