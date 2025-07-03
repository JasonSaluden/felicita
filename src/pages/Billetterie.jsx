import React from "react";

function Billetterie() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center relative font-baseRegular"
      style={{
        backgroundImage: "url('/assets/0070 coesamuse_ Chloé André.jpg')"
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Header avec titre et pictos */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <img
              src="/assets/Elmts/picto3.png"
              alt="Picto"
              className="h-8 w-8 object-contain opacity-80"
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
              Billetterie
            </h1>
            <img
              src="/assets/Elmts/picto3.png"
              alt="Picto"
              className="h-8 w-8 object-contain opacity-80"
            />
          </div>
          
          {/* Sous-titre avec cadre */}
          <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm mb-4">
            <p className="text-xl text-gray-800 font-medium">Samedi 30 Août 2025</p>
          </div>
          
          <p className="text-lg text-white/90 max-w-md mx-auto">
            Réserve ta place pour cet été !
          </p>
        </div>

        {/* Bouton principal - Style cohérent */}
        <div className="text-center mb-16">
          <a
            href="https://www.helloasso.com/associations/la-felicita-festival/evenements/la-felicita-2025-la-cite-du-vent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-150 hover:to-blue-250 border-2 border-orange-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
              
              {/* Pictos décoratifs */}
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
              
              <div className="relative z-10">
                <div className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-bold mb-3 border border-purple-300">
                  BILLETTERIE EN LIGNE
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-wide uppercase">
                  Acheter mon billet
                </h2>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Paiement sécurisé</p>
                  <p>Confirmation immédiate</p>
                  <p>E-billet sur mobile</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Sous-titre pour les tarifs */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {/* Flèche pointant vers le bas */}
            <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              Différents Tarifs
            </h3>
            {/* Flèche pointant vers le bas */}
            <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Cartes de billetterie - Tous les tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* PASS - EARLY BIRD */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-orange-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-green-300">
                EARLY BIRD 🔥
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">PASS EARLY BIRD</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">15€</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Places à tarif réduit pour les premières personnes motivées !
              </div>
            </div>
          </div>

          {/* PASS - DOUX */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orange-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-blue-300">
                TARIF RÉDUIT 💙
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">PASS DOUX</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">15€</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Étudiants, demandeurs d'emploi, bénéficiaires RSA & allocation handicapé
              </div>
            </div>
          </div>

          {/* PASS - JUSTE */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-blue-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto5.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-orange-300">
                TARIF NORMAL ⭐
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">PASS JUSTE</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">20€</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Tarif pour permettre à l'équipe de faire perdurer le festival
              </div>
            </div>
          </div>

          {/* PASS - SOUTIEN */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-orange-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-purple-300">
                SOUTIEN 💜
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">PASS SOUTIEN</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">25€+</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Pour les festivaliers qui veulent soutenir l'association
              </div>
            </div>
          </div>

          {/* PASS - JEUNE POUSSE */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-green-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto1.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto1.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto1.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto1.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-yellow-300">
                -18 ANS 🌱
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">JEUNE POUSSE</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">Prix libre</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Pour les -18 ans sur justificatif
              </div>
            </div>
          </div>

          {/* PASS - BÉNÉVOLE */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-purple-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
              <img src="/assets/Elmts/picto2.png" alt="Décoration" className="w-full h-full object-contain" />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-pink-300">
                BÉNÉVOLE 🤝
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">PASS BÉNÉVOLE</h3>
              <div className="text-2xl font-bold text-gray-800 mb-3">Gratuit</div>
              <div className="text-xs text-gray-600 leading-relaxed">
                Deviens bénévole pour La Felicità !
              </div>
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="mt-12 mx-[6vw] text-center">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 px-6 py-4 rounded-2xl shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Pass Bénévole et Jeune Pousse :</strong> Conditions spéciales
            </p>
            <p className="text-xs text-gray-600 mb-2">
              Pass Jeune Pousse : Justificatif d'âge requis (-18 ans)
            </p>
            <p className="text-xs text-gray-600">
              Pass Bénévole : Inscription préalable • Festival en plein air
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Billetterie;