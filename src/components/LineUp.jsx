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
    <section className="pb-16 px-6 bg-[#FFF8C9] font-baseRegular">
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

        <div className="flex justify-center flex-row mt-8">
          <svg
            className="pt-2 animate-bounce"
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
          </svg>
          <p className="text-center font-bold text-gray-800 tracking-wide pt-4">
            Et Bien d'autres artistes !
          </p>
          <svg
            className="pt-2 animate-bounce"
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z" />
          </svg>
        </div>

        {/* Bouton dynamique */}
        <div className="text-center mt-10">
          <div className="inline-block relative group cursor-pointer">
            {/* Bouton principal */}
            <div className="bg-white border-2 border-gray-200 hover:border-purple-300 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 backdrop-blur-sm z-10 relative">
              <a href="/programmation" className="block px-4 py-2 text-sm">
                <p className="text-lg font-bold text-gray-800 tracking-wide animate-pulse">
                  Découvrir le reste de la programmation
                </p>
                <div className="text-xs text-gray-500 mt-1 tracking-wider">
                  ATELIERS • CONCERTS • PERFORMANCES
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

        {/* Section Playlist SUN - Nouvelle section fusionnée */}
        <div className="mt-20 max-w-6xl mx-auto">
          {/* Séparateur décoratif */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <div className="mx-8">
              <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-700 tracking-wide">PLAYLIST OFFICIELLE</span>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>

          {/* Texte d'introduction avec partenaire SUN */}
          <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto">
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm text-gray-600">En partenariat avec</span>
                  <img
                    src="./assets/partners/SUN-LOGO-JAUNE.png"
                    alt="Logo SUN"
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ width: '6rem', height: '6rem' }}
                  />
                </div>
                <p className="text-lg text-gray-700 mb-2">
                  Découvrez les sons qui rythmeront le festival avec cette sélection spéciale
                  des artistes de la Felicità Festival 2025.
                </p>
              </div>
            </div>
          </div>

          {/* Iframe playlist avec style amélioré */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <iframe 
              width="100%" 
              height="600px" 
              autoScroll="true" 
              src="https://lesonunique.com/sharing/playlist/472" 
              loading="lazy" 
              style={{
                border: "none",
                borderRadius: "12px"
              }}
              title="Playlist Felicità Festival 2025 - Partenaire SUN"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LineUp;