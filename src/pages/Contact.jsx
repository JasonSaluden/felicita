import React from "react";

function Contact() {
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
                CONTACT
              </h1>
              <img
                src="/assets/Elmts/picto3.png"
                alt="Picto"
                className="h-6 w-6 object-contain opacity-80"
              />
            </div>

            {/* Sous-titre avec cadre */}
            <div className="inline-block bg-white/60 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm">
              <p className="text-xl text-gray-700 font-medium">
                Une question ? Contactez-nous !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Association La Felicità */}
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

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-blue-300">
                ASSOCIATION
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                La Felicità Festival
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="text-blue-600"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email général</p>
                    <a
                      href="mailto:lafelicita.festival@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      lafelicita.festival@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-1 flex-shrink-0">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Adresse</p>
                    <p className="text-gray-700">
                      Domaine de Candé
                      <br />
                      37270 Monts
                      <br />
                      France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Équipe organisatrice */}
          <div className="space-y-8">
            {/* Coordination générale */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-orange-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto1.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto1.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto1.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto1.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-purple-300">
                  COORDINATION
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Direction générale
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Marie Dupont</strong>
                  </p>
                  <a
                    href="mailto:direction@lafelicita.com"
                    className="text-purple-600 hover:text-purple-800 text-sm transition-colors block"
                  >
                    direction@lafelicita.com
                  </a>
                </div>
              </div>
            </div>

            {/* Programmation */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-blue-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto5.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto5.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto5.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto5.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-orange-300">
                  ARTISTIQUE
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Programmation
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Thomas Martin</strong>
                  </p>
                  <a
                    href="mailto:programmation@lafelicita.com"
                    className="text-orange-600 hover:text-orange-800 text-sm transition-colors block"
                  >
                    programmation@lafelicita.com
                  </a>
                </div>
              </div>
            </div>

            {/* Communication */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-purple-200 p-6 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto2.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto2.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 left-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto2.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-3 right-3 w-4 h-4 opacity-60">
                <img
                  src="/assets/Elmts/picto2.png"
                  alt="Décoration"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-green-300">
                  COMMUNICATION
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Presse & Médias
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Sophie Bernard</strong>
                  </p>
                  <a
                    href="mailto:presse@lafelicita.com"
                    className="text-green-600 hover:text-green-800 text-sm transition-colors block"
                  >
                    presse@lafelicita.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section réseaux sociaux */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-pink-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mx-auto max-w-2xl">
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

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-300">
                SUIVEZ-NOUS
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Retrouvez-nous sur les réseaux
              </h2>

              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.facebook.com/lafelicitafestival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/80 p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                  className="bg-white/80 p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
<svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>                </a>
              </div>

              <p className="text-gray-700 mt-4">
                Restez informés des dernières nouvelles du festival !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
