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
          <h2 className="text-4xl font-bold mb-8">PROGRAMMATION MUSICALE</h2>
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

  const selectedArtists = artists.filter((artist) =>
    ["Nerlov", "Spoink", "Big Alice"].includes(artist.name)
  );

  return (
    <section className="py-16 px-6 bg-[#FFF8C9] font-baseRegular">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text">
            PROGRAMMATION MUSICALE
          </h2>
        </div>

        {/* Grille des artistes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {selectedArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* Bouton dynamique */}
        <div className="text-center mt-16">
          <div className="inline-block relative group cursor-pointer">
            {/* Bouton principal */}
            <div className="bg-white border-2 border-gray-200 hover:border-purple-300 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm z-10 relative">
              <a href="/programmation" className="block px-4 py-2 text-sm">
                <p className="text-lg font-bold text-gray-800 tracking-wide animate-pulse">
                  Découvrir le reste de la programmation
                </p>
                <div className="text-xs text-gray-500 mt-1 tracking-wider">
                  ATELIERS • SPECTACLES • EXPÉRIENCES
                </div>
              </a>
            </div>

            {/* Orbites derrières */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow origin-center pointer-events-none z-0">
              <div className="relative w-40 h-40">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full" />
              </div>
            </div>

            {/* Orbite devant - petite jaune */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slower origin-center pointer-events-none z-20">
              <div className="relative w-28 h-28">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-md" />
              </div>
            </div>

            {/* Orbite devant - grande cyan inclinée */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-reverse origin-center pointer-events-none z-20">
              <div className="relative w-52 h-52 rotate-45">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LineUp;
