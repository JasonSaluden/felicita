import React from "react";

function Billetterie() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/coesamuseIMGM8311.JPG')"
      }}
    >
      <h1 className="text-3xl font-bold mb-6 uppercase text-black">Billetterie</h1>
      <p className="text-lg mb-8 text-center max-w-md text-black">
        Réserve ta place pour la prochaine édition de la Felicita Festival sur notre plateforme partenaire !
      </p>
      <a
        href="https://www.helloasso.com/associations/la-felicita-festival" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FFD7B5] text-black px-6 py-3 rounded-full text-lg font-semibold uppercase hover:bg-[#ffc399] transition"
      >
        Acheter mon billet
      </a>
    </main>
  );
}

export default Billetterie;
