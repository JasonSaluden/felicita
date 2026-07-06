import { useState, useEffect } from "react";

// Affiche de l'édition en cours. Mettre à null pour masquer les emplacements
// affiche (desktop, mobile et modal) en attendant la prochaine édition.
const AFFICHE_EDITION = "/assets/affiches/Affiche_Felicita_Festival_2026.webp";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <main className="w-full bg-[#0E5C3A] overflow-hidden font-baseRegular">
      {/* Section principale avec image de fond */}
      <div
        className="relative w-full min-h-[70vh] lg:h-[80vh] bg-cover bg-center pt-16 pb-16 lg:pb-28"
        style={{
          backgroundImage: "url('/assets/photos/Lulu_et_Rom_Accueil.webp')",
        }}
      >
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenu principal */}
        <div className="relative z-10 h-full flex items-center justify-between px-6 lg:pl-24 lg:pr-12 max-w-[100rem] mx-auto">
          {/* Partie gauche - Texte principal */}
          <div className="flex-1 text-[#F0A5B8]">
            <div className="max-w-xl">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                La Felicità
                <br />
                Festival
                <br />
                revient
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-[#F4D4DC]">
                La Felicità, le festival angevin qui célèbre la fin de l'été en
                musique, est de retour pour sa 7ème édition
              </p>

              {/* Date et lieu */}
              <div className="space-y-2 text-base sm:text-lg text-[#F4D4DC] w-fit max-w-xs">
                <div className="flex items-center space-x-2 bg-[#01250C] rounded-xl px-3 py-1">
                  <span>📅</span>
                  <span>Samedi 29 août 2026</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#01250C] rounded-xl px-3 py-1">
                  <span>📍</span>
                  <span>Brissac-Quincé - 49320</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Affiche du festival (desktop) */}
          {AFFICHE_EDITION && (
            <div className="hidden lg:block flex-shrink-0 ml-8">
              <div className="relative">
                <img
                  src={AFFICHE_EDITION}
                  alt="Affiche La Felicità Festival 2026"
                  className="w-auto max-w-96 max-h-[calc(80vh-11rem)] rounded-lg shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold rotate-12">
                  Édition 2026
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Affiche du festival (mobile) */}
      {AFFICHE_EDITION && (
        <div className="lg:hidden bg-[#0E5C3A] py-8">
          <div className="text-center px-6">
            <h3 className="text-xl font-bold text-[#F4D4DC] mb-4">
              Affiche 2026
            </h3>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={AFFICHE_EDITION}
                  alt="Affiche La Felicità Festival 2026"
                  className="w-80 max-w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                  2026
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal d'affichage de l'affiche en grand */}
      {isModalOpen && AFFICHE_EDITION && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Affiche La Felicità Festival 2026"
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-yellow-300 text-2xl font-bold"
            >
              ✕ Fermer
            </button>
            <img
              src={AFFICHE_EDITION}
              alt="Affiche La Felicità Festival 2026"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Hero;
