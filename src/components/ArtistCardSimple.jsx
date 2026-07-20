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

          {/* Indicateur de clic au hover */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
        </div>
      </div>

      {/* Nom de l'artiste (visible aussi sur mobile, où le hover n'existe pas) */}
      {/* {artist.name && (
        <p className="mt-3 text-center text-base sm:text-lg font-bold text-[#F4D4DC]">
          {artist.name}
        </p>
      )} */}
    </div>
  );
}

export default ArtistCardSimple;
