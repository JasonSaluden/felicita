import { useState, useEffect } from "react";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === "Escape") setIsModalOpen(false); };
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
        className="relative w-full h-[80vh] bg-cover bg-center pt-16 pb-28"
        style={{ backgroundImage: "url('/assets/backgrounds/VianneyToutSeul.webp')" }}
      >
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenu principal */}
        <div className="relative z-10 h-full flex items-center justify-between px-6 pl-24 pr-0 max-w-[100rem]">
          {/* Partie gauche - Texte principal */}
          <div className="flex-1 text-[#F0A5B8]">
            <div className="max-w-xl">
              <h1
                className="text-5xl lg:text-7xl font-bold mb-4 leading-tight"
                style={{
                  WebkitTextStrokeWidth: "13px",
                  WebkitTextStrokeColor: "#01250C",
                  paintOrder: "stroke fill",
                }}
              >
                La <span style={{ color: "#F4D4DC" }}>Felicità</span>
                <br />
                Festival
                <br />
                 revient
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-[#F4D4DC]">
                La Felicità, le festival angevin qui célèbre la fin de l'été en musique, est de retour pour sa 7ème édition
              </p>

              {/* Date et lieu */}
              <div className="space-y-2 text-lg text-[#F4D4DC] w-[11vw] min-w-[200px]">
                <div className="flex items-center space-x-2 bg-[#01250C] rounded-xl px-3 py-1">
                  <span>📅</span>
                  <span>Samedi 29 Août 2026</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#01250C] rounded-xl px-3 py-1">
                  <span>📍</span>
                  <span className="">Brissac-Quincé - 49320</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Affiche du festival plus grande (Desktop) */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <div className="relative group">
              {/* <img
                src="/assets/affiches/Affiche_Felicita_Festival_2025.webp"
                alt="Affiche Felicità Festival 2025"
                className="w-96 h-auto rounded-lg shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setIsModalOpen(true)}
              /> */}
              {/* Badge "Édition 2026" */}
              {/* <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold rotate-12">
                Édition 2026
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Version mobile de l'affiche plus grande */}
      <div className="lg:hidden bg-[#0E5C3A] py-8">
        <div className="text-center px-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Affiche 2026</h3>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/assets/affiches/Affiche_Felicita_Festival_2025.webp"
                alt="Affiche Felicità Festival 2025"
                className="w-80 h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                2026
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal simple et fonctionnelle */}
      {isModalOpen && (
        <div
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
              src="/assets/affiches/Affiche_Felicita_Festival_2025.webp"
              alt="Affiche Felicità Festival 2025"
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