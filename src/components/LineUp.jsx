// components/LineUp.jsx
import ArtistCard from "./ArtistCard";
import useArtistsData from "../hooks/useArtistsData";

function LineUp() {
  const { artists, loading, error } = useArtistsData();

  // Gestion du loading
  if (loading) {
    return (
      <section className="py-16 px-6 font-baseRegular">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 ">PROGRAMMATION MUSICALE</h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="text-gray-600">Chargement des artistes...</span>
          </div>
        </div>
      </section>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <section className="py-16 px-6 bg-[#FFF8C9] font-baseRegular">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            PROGRAMMATION MUSICALE
          </h2>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
            <p>❌ Erreur lors du chargement : {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-[#FFF8C9] font-baseRegular">
      <div className="max-w-7xl mx-auto">
        {/* Header avec style  */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text">
            PROGRAMMATION MUSICALE
          </h2>
        </div>

        {/* Grille des artistes - Ajustée pour les cartes carrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* Call to action - Style adapté au festival */}
        <div className="text-center mt-16">
          <div className="inline-block relative group cursor-pointer">
            {/* Bouton principal */}
            <div className="bg-white border-2 border-gray-200 hover:border-purple-300 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm">
              <a
                href="/programmation"
                className="block px-4 py-2 text-sm"
              >
                <p className="text-lg font-bold text-gray-800 tracking-wide">
                  Découvrir le reste de la programmation
                </p>
                <div className="text-xs text-gray-500 mt-1 tracking-wider">
                  ATELIERS • SPECTACLES • EXPÉRIENCES
                </div>
              </a>
            </div>

            {/* Petits éléments décoratifs */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LineUp;
