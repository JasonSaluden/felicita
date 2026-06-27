// components/LineUp.jsx
import { useState } from "react";
import ArtistCardSimple from "./ArtistCardSimple";
import ModalArtiste from "./ModalArtiste";
import { EDITION_EN_COURS } from "../data/editionsData";

function LineUp() {
  // Artistes mis en avant sur l'accueil : ceux marqués `miseEnAvant: true`,
  // sinon les 3 premiers (par id) de l'édition en cours.
  const tous = EDITION_EN_COURS.artists;
  const selection = tous.filter((a) => a.miseEnAvant);
  const aLaUne = (selection.length > 0 ? selection : tous)
    .slice()
    .sort((a, b) => a.id - b.id)
    .slice(0, 3);
  const aDesArtistes = aLaUne.length > 0;

  // Modal artiste
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
    <section
      className="relative isolate flow-root pb-16 px-6 bg-[#0E5C3A] bg-cover bg-center font-baseRegular"
      style={{ backgroundImage: "url('/assets/backgrounds/BackgroundBody.webp')" }}
    >

      {/* 🫧 Bulle d'annonce qui chevauche le Hero et la LineUp */}
      <div className="relative z-30 -mt-24 mb-12 flex justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="relative rounded-3xl px-8 py-6 shadow-2xl
                          bg-gradient-to-br from-[#F0A5B8]/95 via-[#F0A5B8]/90 to-[#F4D4DC]/80
                          backdrop-blur-lg border border-white/50
                          transform hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
              Découvrez une programmation unique avec des artistes émergent·e·s et locaux·ales,
              des installations, ainsi que des ateliers créatifs pour tous les âges.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text">
            PROGRAMMATION MUSICALE
          </h2>
        </div>

        {aDesArtistes ? (
          /* ===== Mise en avant de 3 artistes de l'édition en cours ===== */
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {aLaUne.map((artist) => (
                <div
                  key={artist.id}
                  onClick={() => openModal(artist)}
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-[1.03]"
                >
                  <ArtistCardSimple artist={artist} />
                  {artist.name && (
                    <p className="mt-3 text-center text-lg font-bold text-[#F4D4DC]">
                      {artist.name}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/programmation"
                className="inline-block bg-[#CB97FF] text-[#0A1F14] px-8 py-3 rounded-full font-bold hover:bg-[#E89BAE] transition-colors"
              >
                Voir toute la programmation
              </a>
            </div>
          </>
        ) : (
          /* ===== Pas encore d'artistes : bloc "Ça arrive bientôt" ===== */
          <div className="flex justify-center">
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
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-wide flex flex-col items-center justify-center gap-4">
                Ça arrive bientôt
                <img
                  src="/assets/mascottes/Felicita_Ed7_Ecrevisse.webp"
                  alt="Ecrevisse"
                  style={{ width: "300px", height: "auto" }}
                  className="object-contain"
                />
              </h3>
              <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
                On peaufine la programmation de cette nouvelle édition. Les
                artistes seront dévoilés très prochainement !
              </p>

              <a
                href="/retrospective"
                className="inline-block bg-[#CB97FF] text-[#0A1F14] px-8 py-3 rounded-full font-bold hover:bg-[#E89BAE] transition-colors"
              >
                Revivre les éditions passées
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal artiste */}
      <ModalArtiste
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default LineUp;
