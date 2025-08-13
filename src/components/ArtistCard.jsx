import { useState } from "react";
import useArtistsData from "../hooks/useArtistsData"; // Import du hook externe

// ========================
// COMPOSANT CARTE ARTISTE
// ========================
function ArtistCard({ artist }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configuration des slides
  const slides = [
    // Slide 1: Photo et infos principales
    {
      type: "main",
      content: (
        <div className="relative h-full">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
            <p className="text-sm opacity-90">{artist.genre}</p>
            <p className="text-sm opacity-75">{artist.time}</p>
          </div>
        </div>
      ),
    },
    // Slide 2: Image2 (avec description intégrée)
    {
      type: "description",
      content: (
        <div className="relative h-full">
          <img
            src={artist.image2}
            alt={`${artist.name} - Description`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ),
    },
    // Slide 3: Réseaux sociaux avec style festival
    ...(artist.socialLinks
      ? [
          {
            type: "social",
            content: (
              <div className="relative h-full bg-gradient-to-br from-[#FFF8C9] to-[#F5E6A8] rounded-lg flex flex-col justify-center items-center p-6">
                {/* Nom de l'artiste en grand */}
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center tracking-wider">
                  {artist.name.toUpperCase()}
                </h3>

                {/* Ligne de séparation */}
                <div className="w-16 h-0.5 bg-purple-400 mb-6"></div>

                {/* Réseaux sociaux en style minimaliste */}
                <div className="space-y-4 w-full max-w-xs">
                  {Object.entries(artist.socialLinks).map(
                    ([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full py-3 px-4 bg-white/40 hover:bg-white/60 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105 border border-white/30"
                      >
                        <span className="text-sm font-medium text-gray-700 capitalize">
                          {platform}
                        </span>
                        <span className="text-lg">
                          {platform === "instagram" && "📸"}
                          {platform === "spotify" && "🎵"}
                          {platform === "soundcloud" && "🎧"}
                          {platform === "bandcamp" && "💿"}
                          {platform === "youtube" && "🎬"}
                        </span>
                      </a>
                    )
                  )}
                </div>

                {/* Petit élément décoratif */}
                <div className="mt-6 text-xs text-gray-500 tracking-widest">
                  SUIVRE L'ARTISTE
                </div>
              </div>
            ),
          },
        ]
      : []),
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };



  return (
  <div className="w-full aspect-[4/5] bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="relative h-full">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-cover rounded-lg"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
        <p className="text-sm opacity-90">{artist.genre}</p>
        <p className="text-sm opacity-75">{artist.time}</p>
      </div> */}
    </div>
  </div>
  );
}

export default ArtistCard;

  // (
  //   <div className="relative group">
  //     <div className="w-full aspect-[4/5] bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
  //       {slides[currentSlide].content}

  //       {/* Flèches de navigation */}
  //       {slides.length > 1 && (
  //         <>
  //           <button
  //             onClick={(e) => {
  //               e.stopPropagation();
  //               prevSlide();
  //             }}
  //             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  //           >
  //             <svg
  //               className="w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M15 19l-7-7 7-7"
  //               />
  //             </svg>
  //           </button>

  //           <button
  //             onClick={(e) => {
  //               e.stopPropagation();
  //               nextSlide();
  //             }}
  //             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  //           >
  //             <svg
  //               className="w-4 h-4"
  //               fill="none"
  //               stroke="currentColor"
  //               viewBox="0 0 24 24"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M9 5l7 7-7 7"
  //               />
  //             </svg>
  //           </button>
  //         </>
  //       )}
  //     </div>

  //     {/* Indicateurs de slides */}
  //     {slides.length > 1 && (
  //       <div className="flex justify-center mt-3 space-x-2">
  //         {slides.map((_, index) => (
  //           <button
  //             key={index}
  //             onClick={() => setCurrentSlide(index)}
  //             className={`w-2 h-2 rounded-full transition-all duration-200 ${
  //               currentSlide === index
  //                 ? "bg-purple-500 w-6"
  //                 : "bg-gray-300 hover:bg-gray-400"
  //             }`}
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );


