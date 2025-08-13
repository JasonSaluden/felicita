import React from "react";

function Contact() {
  return (
    <main
    className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center relative font-baseRegular"
    style={{
      backgroundImage: "url('/assets/coesamuseIMGM8556.JPG')",
    }}>
      <div className="min-h-screen">
        {/* Header avec titre et pictos - AMÉLIORÉ */}
        <div className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              {/* Container avec fond pour améliorer la visibilité */}
              <div className="bg-white/80 backdrop-blur-md border-2 border-white/50 p-8 rounded-3xl shadow-xl mb-8 inline-block">
                {/* Titre avec pictos */}
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <img
                    src="/assets/Elmts/picto3.png"
                    alt="Picto"
                    className="h-8 w-8 object-contain opacity-90"
                  />
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 drop-shadow-lg">
                    CONTACT
                  </h1>
                  <img
                    src="/assets/Elmts/picto3.png"
                    alt="Picto"
                    className="h-8 w-8 object-contain opacity-90"
                  />
                </div>

                {/* Sous-titre avec cadre */}
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 px-6 py-3 rounded-full shadow-sm">
                  <p className="text-xl text-gray-800 font-bold">
                    Une question ? Contactez-nous !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-6 pb-16 space-y-12">
          {/* Container principal pour le contact */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orange-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            {/* Pictos décoratifs */}
            <div className="absolute top-3 left-3 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto2.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-3 right-3 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto2.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-3 left-3 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto2.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-3 right-3 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto2.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-blue-300">
                CONTACT
              </div>

              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
                Pour toute demande envoyez nous un mail à cette adresse
              </h2>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-4 rounded-2xl shadow-sm inline-flex items-center space-x-3 hover:shadow-lg hover:scale-105 transition-all">
                <div className="w-6 h-6 flex-shrink-0 text-blue-600 animate-pulse">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-full h-full"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <a
                  href="mailto:contactlafelicita@gmail.com"
                  className="text-xl font-bold text-blue-700 hover:text-orange-500 transition-colors duration-300 underline-offset-4"
                >
                  contactlafelicita@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Container réseaux sociaux et newsletter */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-pink-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            {/* Pictos décoratifs */}
            <div className="absolute top-4 left-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-yellow-300">
                SUIVEZ-NOUS
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                Retrouvez-nous sur les réseaux
              </h2>

              {/* Réseaux sociaux */}
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://www.facebook.com/lafelicitafestival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 p-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <svg
                    className="w-7 h-7 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/lafelicitafestival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 p-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <svg
                    className="w-7 h-7 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* Section Newsletter */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Inscrivez-vous à notre Newsletter
                </h3>
                <p className="text-gray-700 mb-4">
                  Restez informés des dernières nouvelles du festival !
                </p>
                <p>🚧 En construction 🚧</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;