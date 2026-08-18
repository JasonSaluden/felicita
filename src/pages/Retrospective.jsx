import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ArtistCardSimple from "../components/ArtistCardSimple";
import ModalArtiste from "../components/ModalArtiste";
import Partenaires from "../components/Partenaires";
import { editions, getEditionByAnnee } from "../data/editionsData";

function Retrospective() {
  const { annee } = useParams();

  // Édition sélectionnée : celle de l'URL, sinon la plus récente
  const edition = annee ? getEditionByAnnee(annee) : editions[0];

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

  // Année inconnue dans l'URL → on renvoie vers la rétrospective par défaut
  if (annee && !edition) {
    return <Navigate to="/retrospective" replace />;
  }

  return (
    <div
      className="relative isolate overflow-hidden min-h-screen bg-[#0E5C3A] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/backgrounds/BackgroundBody.webp')" }}
    >
      {/* Header avec titre et pictos */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 sm:space-x-6 mb-8">
              <img
                src="/assets/pictos/picto3.png"
                alt=""
                aria-hidden="true"
                className="hidden sm:block h-6 w-6 object-contain opacity-80"
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4D4DC]">
                RÉTROSPECTIVE
              </h1>
              <img
                src="/assets/pictos/picto3.png"
                alt=""
                aria-hidden="true"
                className="hidden sm:block h-6 w-6 object-contain opacity-80"
              />
            </div>

            {/* Sous-titre : typographique, sans cadre (même traitement que sur
                Infos Pratiques et Programmation) */}
            <div className="inline-flex items-center gap-4">
              <span className="hidden sm:block h-px w-10 bg-[#F0A5B8]"></span>
              <p className="text-xl sm:text-2xl text-[#F4D4DC] font-medium italic">
                {edition.theme && `  ${edition.theme} • `}
                {edition.numero}
                <sup>e</sup> édition <br></br>{edition.annee}
              </p>
              <span className="hidden sm:block h-px w-10 bg-[#F0A5B8]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Affiche de l'édition */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-3 max-w-md w-full">
            {edition.affiche ? (
              <img
                src={edition.affiche}
                alt={`Affiche de l'édition ${edition.annee}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ) : (
              <div className="aspect-[3/4] w-full rounded-lg bg-gray-100 flex items-center justify-center text-center px-6">
                <p className="text-gray-500 font-medium">
                  Affiche à venir
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Grille des artistes de l'édition */}
        {edition.artists.length > 0 ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F4D4DC] tracking-wide">
                Ils ont enflammé la Félicità
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

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {edition.artists
              .slice()
              .sort((a, b) => a.id - b.id)
              .map((artist) => (
                <div
                  key={artist.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Découvrir ${artist.name}`}
                  onClick={() => openModal(artist)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(artist);
                    }
                  }}
                  className="cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
                >
                  <ArtistCardSimple artist={artist} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="inline-block bg-white/60 backdrop-blur-sm border border-gray-200 px-8 py-6 rounded-2xl shadow-sm">
              <p className="text-lg text-gray-700 font-medium">
                La programmation et quelques photos de cette édition arrivent bientôt 😁
              </p>
            </div>
          </div>
        )}

        {/* Partenaires de l'édition (groupés par catégorie) */}
        <Partenaires
          partenaires={edition.partenaires}
          titre="Nos partenaires cette année-là"
        />
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

export default Retrospective;
