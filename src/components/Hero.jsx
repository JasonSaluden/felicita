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
    <main className="w-full bg-[#FFF8C9] overflow-hidden font-baseRegular">
      {/* Section principale avec image de fond */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center pt-16 pb-28"
        style={{ backgroundImage: "url('/assets/coesamuseIMGM7449.JPG')" }}
      >
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Contenu principal */}
        <div className="relative z-10 h-full flex items-center justify-between px-6 pl-24 pr-0 max-w-[100rem]">
          {/* Partie gauche - Texte principal */}
          <div className="flex-1 text-white">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                Felicità
                <br />
                <span className="text-yellow-300">Festival</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-6 text-gray-200">
                La Felicità, le festival angevin qui célèbre la fin de l'été en musique, est de retour pour sa 6ème édition
              </p>

              {/* Date et lieu */}
              <div className="space-y-2 text-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300">📅</span>
                  <span>Samedi 30 Août 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-300">📍</span>
                  <span className="bg-white-300 px-2 py-1 rounded">Brissac-Quincé - 49320</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Affiche du festival plus grande (Desktop) */}
          <div className="hidden lg:block flex-shrink-0 ml-8">
            <div className="relative group">
              <img
                src="./assets/Affiche_Felicita_Festival_2025.jpg"
                alt="Affiche Felicità Festival 2025"
                className="w-96 h-auto rounded-lg shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setIsModalOpen(true)}
              />
              {/* Badge "Édition 2025" */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold rotate-12">
                Édition 2025
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🫧 Bulle d'annonce comme pont vers LineUp */}
      <div className="relative -mt-20 z-30 flex justify-center px-4 pb-16">
        <div className="max-w-4xl w-full">
          {/* Bulle principale avec effet de transition */}
          <div className="relative rounded-3xl px-8 py-6 shadow-2xl
                          bg-gradient-to-br from-white/95 via-white/90 to-[#FFF8C9]/80 
                          backdrop-blur-lg border border-white/50
                          transform hover:scale-105 transition-all duration-500">
            
            {/* Contenu de la bulle */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
                Découvrez une programmation unique avec des artistes émergeant et locaux,
                des installations lumineuses et sonores immersives, ainsi que des ateliers
                créatifs pour tous les âges.
              </p>
              
              {/* Petit séparateur avec flèche vers le bas */}
              {/* <div className="flex items-center justify-center space-x-4 mt-6">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-600 font-semibold text-sm tracking-wide">PROGRAMMATION</span>
                  <svg className="w-4 h-4 text-purple-600 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1"></div>
              </div> */}
            </div>

            {/* Éléments décoratifs flottants */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -top-2 -right-4 w-4 h-4 bg-pink-400 rounded-full opacity-70 animate-pulse delay-300"></div>
            <div className="absolute -bottom-2 left-8 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>

          {/* Ligne de connexion subtile qui s'étend vers la section suivante */}
          {/* <div className="flex justify-center mt-8">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-300 via-purple-200 to-transparent opacity-60"></div>
          </div> */}
        </div>
      </div>

      {/* Version mobile de l'affiche plus grande */}
      <div className="lg:hidden bg-[#FFF8C9] py-8">
        <div className="text-center px-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Affiche 2025</h3>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="./assets/Affiche_Felicita_Festival_2025.jpg"
                alt="Affiche Felicità Festival 2025"
                className="w-80 h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setIsModalOpen(true)}
              />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                2025
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
              src="./assets/Affiche_Felicita_Festival_2025.jpg"
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