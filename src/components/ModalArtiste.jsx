import { useEffect } from 'react';

function ModalArtiste({ artist, isOpen, onClose }) {
  // Gestion des touches et scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !artist) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Contenu de la modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header avec bouton fermer */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Fermer la modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu en deux colonnes */}
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          
          {/* Colonne gauche - Image fixe */}
          <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-6 relative">
            <img 
              src={artist.image} 
              alt={`${artist.name}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
            
            {/* Badge genre et heure */}
            <div className="absolute top-4 left-4">
              <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <p className="text-sm font-medium">{artist.genre} • {artist.time}</p>
              </div>
            </div>
          </div>

          {/* Colonne droite - Contenu scrollable */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            
            {/* Nom de l'artiste */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {artist.name}
              </h2>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {artist.genre}
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  🕐 {artist.time}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">À propos</h3>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-center">
                {artist.description}
              </p>
            </div>

            {/* Réseaux sociaux */}
            {artist.socialLinks && Object.keys(artist.socialLinks).length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Suivre l'artiste (ne fonctionne pas)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(artist.socialLinks).map(([platform, link]) => (
                    <a 
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
                    >
                      <span className="flex items-center space-x-3">
                        <span className="text-2xl">
                          {platform === 'instagram' && '📸'} 
                          {platform === 'spotify' && '🎵'} 
                          {platform === 'soundcloud' && '🎧'} 
                          {platform === 'bandcamp' && '💿'} 
                          {platform === 'youtube' && '🎬'}
                        </span>
                        <span className="font-medium text-gray-800 capitalize">{platform}</span>
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Section vidéo */}
            {artist.video && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Découvrir {artist.name}</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  {artist.video.type === 'youtube' ? (
                    // Vidéo YouTube avec gestion d'erreur
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${artist.video.id}?rel=0&modestbranding=1&enablejsapi=1`}
                        title={`Vidéo de présentation - ${artist.name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      ></iframe>
                      <div 
                        className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-lg items-center justify-center text-gray-600 text-center p-8"
                        style={{ display: 'none' }}
                      >
                        <div>
                          <p className="text-lg font-medium mb-2">❌ Vidéo non disponible</p>
                          <p className="text-sm">Cette vidéo YouTube n'est plus accessible ou l'ID est incorrect.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Vidéo locale avec multiple formats
                    <video
                      controls
                      className="w-full rounded-lg"
                      preload="metadata"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    >
                      <source src={artist.video.src} type="video/mp4" />
                      <source src={artist.video.src.replace('.mov', '.webm')} type="video/webm" />
                      <source src={artist.video.src} type="video/quicktime" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  )}
                  {artist.video.type === 'local' && (
                    <div 
                      className="w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-center p-8"
                      style={{ display: 'none' }}
                    >
                      <div>
                        <p className="text-lg font-medium mb-2">🎬 Format non supporté</p>
                        <p className="text-sm">Convertissez votre vidéo en .mp4 pour une meilleure compatibilité.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info supplémentaire */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 text-sm mb-2">
                💫 Performance prévue le <strong>Samedi 30 Août 2025</strong>
              </p>
              <p className="text-gray-500 text-xs">
                Appuyez sur Échap pour fermer
              </p>
            </div>
            
                          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalArtiste;














// import { useEffect } from "react";

// function ModalArtiste({ artist, isOpen, onClose }) {
//   // Gestion des touches et scroll
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen || !artist) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Contenu de la modal */}
//       <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//         {/* Header avec bouton fermer */}
//         <div className="absolute top-4 right-4 z-20">
//           <button
//             onClick={onClose}
//             className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
//             aria-label="Fermer la modal"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Contenu scrollable */}
//         <div className="max-h-[90vh] overflow-y-auto">
//           {/* Section image - Image complète sans coupure */}
//           <div className="relative bg-gray-100 flex items-center justify-center p-6">
//             <img
//               src={artist.image}
//               alt={`${artist.name}`}
//               className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
//             />

//             {/* Badge genre et heure */}
//             <div className="absolute top-4 left-4">
//               <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm">
//                 <p className="text-sm font-medium">
//                   {artist.genre} • {artist.time}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contenu textuel */}
//           <div className="p-6 md:p-8">
//             {/* Nom de l'artiste */}
//             <div className="text-center mb-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                 {artist.name}
//               </h2>
//               <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
//                 <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
//                   {artist.genre}
//                 </span>
//                 <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                   🕐 {artist.time}
//                 </span>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-gray-800 mb-3">À propos</h3>
//               <p className="text-gray-600 leading-loose text-lg whitespace-pre-line text-center">
//                 {artist.description}
//               </p>
//             </div>

//             {/* Réseaux sociaux */}
//             {artist.socialLinks &&
//               Object.keys(artist.socialLinks).length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">
//                     Suivre l'artiste
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {Object.entries(artist.socialLinks).map(
//                       ([platform, link]) => (
//                         <a
//                           key={platform}
//                           href={link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
//                         >
//                           <span className="flex items-center space-x-3">
//                             <span className="text-2xl">
//                               {platform === "instagram" && "📸"}
//                               {platform === "spotify" && "🎵"}
//                               {platform === "soundcloud" && "🎧"}
//                               {platform === "bandcamp" && "💿"}
//                               {platform === "youtube" && "🎬"}
//                             </span>
//                             <span className="font-medium text-gray-800 capitalize">
//                               {platform}
//                             </span>
//                           </span>
//                           <svg
//                             className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                             />
//                           </svg>
//                         </a>
//                       )
//                     )}
//                   </div>
//                 </div>
//               )}

//             {/* Section vidéo */}
//             {artist.video && (
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
//                   Découvrir {artist.name}
//                 </h3>
//                 <div className="bg-gray-100 rounded-lg p-4">
//                   {artist.video.type === "youtube" ? (
//                     // Vidéo YouTube
//                     <div
//                       className="relative w-full"
//                       style={{ paddingBottom: "56.25%", height: 0 }}
//                     >
//                       <iframe
//                         src={`https://www.youtube.com/embed/${artist.video.id}?rel=0&modestbranding=1`}
//                         title={`Vidéo de présentation - ${artist.name}`}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="absolute top-0 left-0 w-full h-full rounded-lg"
//                       ></iframe>
//                     </div>
//                   ) : (
//                     // Vidéo locale
//                     <video
//                       controls
//                       className="w-full rounded-lg"
//                       preload="metadata"
//                     >
//                       <source src={artist.video.src} type="video/mp4" />
//                       <source src={artist.video.src} type="video/webm" />
//                       Votre navigateur ne supporte pas la lecture de vidéos.
//                     </video>
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* Info supplémentaire */}
//             <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
//               <p className="text-gray-600 text-sm mb-2">
//                 💫 Performance prévue le <strong>Samedi 30 Août 2025</strong>
//               </p>
//               <p className="text-gray-500 text-xs">
//                 Appuyez sur Échap pour fermer
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ModalArtiste;
