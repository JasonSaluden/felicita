// Version simplifiée de ArtistCard pour la page programmation
// Cette version n'a pas de slides internes

function ArtistCardSimple({ artist }) {
    return (
      <div className="relative group">
        {/* Carte principale */}
        <div className="w-full aspect-[4/5] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="relative h-full">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /> */}
            
            {/* Contenu superposé */}
            {/* <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{artist.name}</h3>
              <p className="text-sm opacity-90">{artist.genre}</p>
              <p className="text-sm opacity-75">{artist.time}</p>
            </div> */}
            
            {/* Indicateur de clic au hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ArtistCardSimple;