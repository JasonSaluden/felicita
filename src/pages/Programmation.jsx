import { useState } from "react";
import ArtistCardSimple from "../components/ArtistCardSimple";
import ModalArtiste from "../components/ModalArtiste";
import Partenaires from "../components/Partenaires";
import { EDITION_EN_COURS } from "../data/editionsData";

function Programmation() {
  const artists = EDITION_EN_COURS.artists;
  const aDesArtistes = artists.length > 0;

  const partenaires = EDITION_EN_COURS.partenaires;

  // État pour la modal
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  return (
    <div
      className="relative isolate overflow-hidden min-h-screen bg-[#0E5C3A] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/backgrounds/BackgroundBody.webp')" }}
    >
      {/* Header avec titre et pictos */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Titre avec pictos */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <img
                src="/assets\pictos\picto2.png"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 object-contain opacity-90"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-[#F4D4DC]">
                PROGRAMMATION
              </h1>
              <img
                src="/assets\pictos\picto2.png"
                alt=""
                aria-hidden="true"
                className="h-8 w-8 object-contain opacity-90"
              />
            </div>

            {/* Sous-titre avec cadre */}
            <div className="inline-block bg-white/60 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm">
              <p className="text-xl text-gray-700 font-medium">
                Samedi 29 août 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {aDesArtistes ? (
          /* ===== La programmation est annoncée : on affiche les artistes ===== */
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F4D4DC] tracking-wide">
                Les artistes de cette édition
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="h-px w-24 bg-gray-300/70"></div>
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Picto"
                  className="h-5 w-5 object-contain opacity-80 mx-4"
                />
                <div className="h-px w-24 bg-gray-300/70"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {artists
                .slice()
                .sort((a, b) => a.id - b.id)
                .map((artist) => (
                  <div
                    key={artist.id}
                    onClick={() => openModal(artist)}
                    className="cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <ArtistCardSimple artist={artist} />
                  </div>
                ))}
            </div>
          </>
        ) : (
          /* ===== Pas encore annoncée : bloc "Ça arrive bientôt" ===== */
          <div className="flex justify-center mb-16">
            <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg px-10 py-14 max-w-2xl w-full text-center overflow-hidden">
              {/* Éléments décoratifs aux coins */}
              <div className="absolute top-4 left-4 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-4 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-5 border border-orange-300">
                ÉDITION 2026
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-wide animate-pulse">
                Ça arrive bientôt
              </h2>
              <p className="text-lg text-gray-700 max-w-md mx-auto">
                La programmation de cette nouvelle édition est en cours de
                préparation. Restez connectés, les artistes seront bientôt
                dévoilés !
              </p>
            </div>
          </div>
        )}

        <div className="text-center">
          <a
            href="/billetterie"
            className="inline-block relative group"
          >
            {/* Bouton principal dans le thème des cartes */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-150 hover:to-blue-250 border-2 border-orange-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
              {/* Éléments décoratifs aux coins comme sur les cartes */}
              <div className="absolute top-3 left-3 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-3 right-3 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 left-3 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-6 h-6 opacity-70">
                <img
                  src="/assets/pictos/picto3.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Contenu du bouton */}
              <div className="relative z-10">
                {/* Badge comme sur les cartes */}
                <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-3 border border-orange-300">
                  BILLETTERIE EN LIGNE
                </div>

                {/* Titre principal */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
                  RÉSERVER SA PLACE
                </h3>

                {/* Date répétée pour cohérence */}
                <p className="text-lg font-medium text-gray-700 mb-3">
                  SAMEDI 29 AOÛT
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Partenaires de l'édition (groupés par catégorie) */}
        <Partenaires partenaires={partenaires} />
      </div>

      {/* Modal artiste */}
      <ModalArtiste
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default Programmation;
