import ArtistCardSimple from "../components/ArtistCardSimple";
import ModalArtiste from "../components/ModalArtiste";
import useArtistsData from "../hooks/useArtistsData";
import { useState } from "react";

function Programmation() {
  const { artists, loading, error } = useArtistsData();
  
  // État pour la modal
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modal avec un artiste
  const openModal = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  // Gestion du loading
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8C9] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la programmation...</p>
        </div>
      </div>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <div className="min-h-screen bg-[#FFF8C9] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
            <p className="font-bold">Erreur de chargement</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8C9]">
      {/* Header avec titre et pictos */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Titre avec pictos */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Picto"
                className="h-6 w-6 object-contain opacity-80"
              />
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                PROGRAMMATION
              </h1>
              <img
                src="/assets/Elmts/picto3.png"
                alt="Picto"
                className="h-6 w-6 object-contain opacity-80"
              />
            </div>
            
            {/* Sous-titre avec cadre */}
            <div className="inline-block bg-white/60 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm">
              <p className="text-xl text-gray-700 font-medium">Samedi 30 Août 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Grille des artistes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {artists.map((artist) => (
            <div 
              key={artist.id} 
              onClick={() => openModal(artist)}
              className="cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
            >
              <ArtistCardSimple artist={artist} />
            </div>
          ))}
        </div>



        <div className="text-center">
          <a
            href="https://www.helloasso.com/associations/la-felicita-festival/evenements/la-felicita-2025-la-cite-du-vent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            {/* Bouton principal dans le thème des cartes */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-150 hover:to-blue-250 border-2 border-orange-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
              
              {/* Éléments décoratifs aux coins comme sur les cartes */}
              <div className="absolute top-3 left-3 w-6 h-6 opacity-70">
                <img src="/assets/Elmts/picto3.png" alt="Décoration" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-3 right-3 w-6 h-6 opacity-70">
                <img src="/assets/Elmts/picto3.png" alt="Décoration" className="w-full h-full object-contain" />
              </div>
              <div className="absolute bottom-3 left-3 w-6 h-6 opacity-70">
                <img src="/assets/Elmts/picto3.png" alt="Décoration" className="w-full h-full object-contain" />
              </div>
              <div className="absolute bottom-3 right-3 w-6 h-6 opacity-70">
                <img src="/assets/Elmts/picto3.png" alt="Décoration" className="w-full h-full object-contain" />
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
                  SAMEDI 30 AOÛT
                </p>
              </div>
            </div>
          </a>
        </div>
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