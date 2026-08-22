// components/ModalActivite.jsx
//
// Modal d'aperçu d'une activité : visuel, horaires, description et vidéos.
// Elle est ouverte par le bouton « Aperçu » de la carte (ActiviteCard), qui
// n'apparaît que pour les activités ayant des vidéos (aujourd'hui : Lanlaire).
//
// Même structure que ModalArtiste, en plus simple : pas de réseaux sociaux
// ni de membres, mais les créneaux horaires et le tarif de l'activité.

import { useEffect } from "react";
import { createPortal } from "react-dom";

function ModalActivite({ activite, isOpen, onClose }) {
  // Touche Échap pour fermer + blocage du scroll de la page en arrière-plan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !activite) return null;

  const horaires = activite.horaires || [];
  const videos = activite.videos || (activite.video ? [activite.video] : []);

  // Si la vidéo ne se charge pas, on affiche le message d'erreur à sa place
  const handleVideoError = (e) => {
    const video = e.target;
    const errorDiv = video.parentElement.querySelector(".video-error");
    if (errorDiv) {
      video.style.display = "none";
      errorDiv.style.display = "flex";
    }
  };

  const YouTubeVideo = ({ videoId, title }) => (
    <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );

  const LocalVideo = ({ src, title }) => (
    <div className="relative">
      <video
        controls
        className="w-full rounded-lg"
        preload="metadata"
        onError={handleVideoError}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <div
        className="video-error absolute top-0 left-0 w-full h-full bg-gray-300 rounded-lg items-center justify-center text-gray-600 text-center p-8"
        style={{ display: "none" }}
      >
        <div>
          <p className="text-lg font-medium mb-2">🎬 Vidéo non disponible</p>
          <p className="text-sm">
            {title && `${title} - `}
            Le fichier vidéo n'a pas pu être chargé.
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu de l'activité ${activite.nom}`}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Contenu de la modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col">
        {/* Bouton fermer */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Fermer la modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-full min-h-0">
          {/* Colonne gauche : le visuel de l'activité */}
          <div className="lg:w-1/2 max-h-[40vh] lg:max-h-none bg-gray-100 flex items-center justify-center p-4 lg:p-6 flex-shrink-0">
            {activite.image && (
              <img
                src={activite.image}
                alt={activite.nom}
                className="max-w-full max-h-[35vh] lg:max-h-full object-contain rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Colonne droite : contenu scrollable */}
          <div className="lg:w-1/2 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              {/* Titre + badges */}
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  {activite.nom}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                  {(activite.badge || activite.genre) && (
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      {activite.badge || activite.genre}
                    </span>
                  )}
                  {horaires.map((horaire) => (
                    <span
                      key={horaire}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                    >
                      🕐 {horaire}
                    </span>
                  ))}
                  {activite.accesLibre && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      Accès libre
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {activite.description && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    À propos
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line text-center">
                    {activite.description}
                  </p>
                </div>
              )}

              {activite.tarif && (
                <p className="text-center font-bold text-gray-800 mb-8">
                  {activite.tarif}
                </p>
              )}

              {/* Vidéos */}
              {videos.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Découvrir {activite.nom}
                  </h3>
                  <div className="space-y-4">
                    {videos.map((video, index) => (
                      <div key={video.src || video.id} className="bg-gray-100 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-700 mb-3 text-center">
                          {video.title || `Vidéo ${index + 1}`}
                        </h4>
                        {video.type === "youtube" ? (
                          <YouTubeVideo
                            videoId={video.id}
                            title={video.title || `${activite.nom} - Vidéo ${index + 1}`}
                          />
                        ) : (
                          <LocalVideo src={video.src} title={video.title} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Info supplémentaire */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 text-center">
                <p className="text-gray-600 text-sm mb-2">
                  💫 À retrouver le <strong>Samedi 29 août 2026</strong>
                </p>
                <p className="text-gray-500 text-xs">
                  Appuyez sur Échap pour fermer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ModalActivite;
