function Programmation() {
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
                Samedi 29 Août 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Bloc "Ça arrive bientôt" */}
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
                  SAMEDI 30 AOÛT
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Programmation;
