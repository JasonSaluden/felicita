import React from "react";

function InfosPratiques() {
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
                INFOS PRATIQUES
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
                Tout ce qu'il faut savoir pour venir
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Section Accès au lieu */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orange-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-blue-300">
                ACCÈS AU FESTIVAL
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Comment venir à la Felicità ?
              </h2>

              {/* Grid des moyens de transport */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Covoiturage */}
                <div className="bg-white/70 p-4 rounded-2xl border border-gray-200">
                  <div className="text-center mb-3">
                    <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">Covoiturage</h3>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Mobicoop, groupe Facebook du festival, ou organisez-vous
                    entre amis !
                  </p>
                </div>

                {/* Vélo */}
                <div className="bg-white/70 p-4 rounded-2xl border border-gray-200">
                  <div className="text-center mb-3">
                    <div className="w-12 h-12 mx-auto mb-2 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        fill="#bc6406ff"
                        height="600px"
                        width="600px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 493.407 493.407"
                        space="preserve"
                      >
                        <path d="M488.474,270.899c-12.647-37.192-47.527-62.182-86.791-62.182c-5.892,0-11.728,0.749-17.499,1.879l-34.324-100.94  c-1.71-5.014-6.417-8.392-11.721-8.392H315.02c-6.836,0-12.382,5.547-12.382,12.382c0,6.836,5.545,12.381,12.382,12.381h14.252  l12.462,36.645H206.069v-21.998l21.732-2.821c3.353-0.434,6.135-3.079,6.585-6.585c0.54-4.183-2.402-8.013-6.585-8.553l-68.929-8.94  c-1.362-0.168-2.853-0.185-4.281,0c-9.116,1.186-15.55,9.537-14.373,18.653c1.185,9.118,9.537,15.55,18.653,14.364l22.434-2.909  v26.004l-41.255,52.798c-14.059-8.771-30.592-13.93-48.349-13.93C41.135,208.757,0,249.885,0,300.443  c0,50.565,41.135,91.7,91.701,91.7c44.882,0,82.261-32.437,90.113-75.095h33.605v12.647h-5.909c-4.563,0-8.254,3.693-8.254,8.254  c0,4.563,3.691,8.254,8.254,8.254h36.58c4.563,0,8.254-3.691,8.254-8.254c0-4.561-3.691-8.254-8.254-8.254h-5.908v-12.647h5.545  c3.814,0,7.409-1.756,9.755-4.756l95.546-122.267l9.776,28.729c-17.854,8.892-32.444,22.965-41.409,41.168  c-10.825,21.973-12.438,46.842-4.553,70.034c12.662,37.201,47.55,62.189,86.815,62.189c10.021,0,19.951-1.645,29.519-4.9  c23.191-7.885,41.926-24.329,52.744-46.302C494.746,318.966,496.367,294.09,488.474,270.899z M143.46,258.542  c7.698,9.488,12.776,21.014,14.349,33.742h-40.717L143.46,258.542z M91.701,367.379c-36.912,0-66.938-30.026-66.938-66.936  c0-36.904,30.026-66.923,66.938-66.923c12.002,0,23.11,3.427,32.864,8.981l-42.619,54.54c-2.917,3.732-3.448,8.794-1.378,13.05  c2.08,4.256,6.4,6.957,11.134,6.957h64.592C148.861,345.906,122.84,367.379,91.701,367.379z M239.69,292.284h-56.707  c-1.839-20.667-10.586-39.329-23.868-53.782l22.191-28.398v32.47c0,6.836,5.545,12.381,12.381,12.381  c6.836,0,12.382-5.545,12.382-12.381v-55.138h115.553L239.69,292.284z M383.546,285.618l6.384,18.79  c1.75,5.151,6.562,8.392,11.721,8.392c1.321,0,2.667-0.21,3.99-0.661c6.471-2.201,9.93-9.23,7.729-15.711l-6.336-18.637  c7.731,1.838,14.221,7.312,16.855,15.083c2.024,5.94,1.613,12.309-1.161,17.935c-2.773,5.626-7.569,9.835-13.509,11.858  c-12.068,4.078-25.716-2.717-29.785-14.671C376.735,300.055,378.597,291.689,383.546,285.618z M461.712,329.994  c-7.908,16.042-21.579,28.044-38.507,33.808c-6.997,2.378-14.244,3.578-21.547,3.578c-28.664,0-54.129-18.249-63.374-45.399  c-5.757-16.926-4.571-35.081,3.328-51.112c6.047-12.27,15.494-22.112,27.165-28.666l8.981,26.416  c-13.414,10.108-19.644,27.931-13.954,44.691c5.522,16.227,20.732,27.124,37.853,27.124c4.378,0,8.707-0.725,12.882-2.145  c10.108-3.434,18.282-10.607,22.999-20.184c4.723-9.585,5.425-20.435,1.982-30.551c-5.545-16.299-21.57-26.787-38.289-26.818  l-8.997-26.472c3.128-0.453,6.28-0.783,9.448-0.783c28.658,0,54.112,18.242,63.351,45.399  C470.788,295.799,469.613,313.96,461.712,329.994z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">À vélo</h3>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Pistes cyclables depuis Angers. Goûter sur place offert aux
                    courageux !
                  </p>
                </div>

                {/* Transport en commun */}
                <div className="bg-white/70 p-4 rounded-2xl border border-gray-200">
                  <div className="text-center mb-3">
                    <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        fill="#902878ff"
                        viewBox="-5.5 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title>bus</title>
                          <path d="M0 22.281v-13.563c0-0.438 0.25-1 0.594-1.344 0.094-0.094 0.219-0.156 0.313-0.219h0.031c1.5-1.156 3.469-2 5.719-2.469 1.188-0.219 2.438-0.344 3.75-0.344s2.563 0.125 3.75 0.344c2.25 0.469 4.219 1.313 5.719 2.469h0.031c0.094 0.063 0.188 0.125 0.281 0.219 0.344 0.344 0.625 0.906 0.625 1.344v13.563c0 1-0.688 1.781-1.594 2v1.813c0 0.844-0.688 1.563-1.531 1.563-0.875 0-1.563-0.719-1.563-1.563v-1.75h-11.438v1.75c0 0.844-0.719 1.563-1.563 1.563-0.875 0-1.563-0.719-1.563-1.563v-1.813c-0.906-0.219-1.563-1-1.563-2zM15.625 6.688h-10.438c-0.563 0-1.031 0.469-1.031 1.031 0 0.531 0.469 1 1.031 1h10.438c0.563 0 1-0.469 1-1 0-0.563-0.438-1.031-1-1.031zM3.125 17.063h14.531c0.563 0 1.031-0.5 1.031-1.063v-5.156c0-0.563-0.469-1.063-1.031-1.063h-14.531c-0.563 0-1 0.5-1 1.063v5.156c0 0.563 0.438 1.063 1 1.063zM4.25 22.281c0.906 0 1.625-0.75 1.625-1.656 0-0.938-0.719-1.656-1.625-1.656-0.938 0-1.656 0.719-1.656 1.656 0 0.906 0.719 1.656 1.656 1.656zM16.531 22.281c0.938 0 1.688-0.75 1.688-1.656 0-0.938-0.75-1.656-1.688-1.656-0.906 0-1.625 0.719-1.625 1.656 0 0.906 0.719 1.656 1.625 1.656z"></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">Bus</h3>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Ligne de bus direction Brissac
                  </p>
                </div>

                {/* Navette */}
                <div className="bg-white/70 p-4 rounded-2xl border border-gray-200">
                  <div className="text-center mb-3">
                    <div className="w-12 h-12 mx-auto mb-2 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">Navette</h3>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    Plusieurs navettes depuis la gare d'Angers. Infos sur notre
                    Instagram !
                  </p>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="bg-white/70 p-4 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 text-center">
                  Localisation
                </h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.552991454582!2d-0.4229522232957692!3d47.32307060751314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4807dbe930355e93%3A0x4d6702007357ca7a!2sLa%20Felicit%C3%A0%20Festival!5e0!3m2!1sfr!2sfr!4v1754835812219!5m2!1sfr!2sfr"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation du festival"
                  ></iframe>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  <strong>Adresse :</strong> La Felicità Festival, Vilvert,
                  43920 Brissac Loire Aubance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Restauration */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-blue-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-orange-300">
                RESTAURATION & BOISSONS
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Se régaler sur place !
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Fouées */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Fouées by Moulin de Sarré
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                      <h4 className="font-medium text-red-800 mb-1">
                        🥓 Fouées Rillettes
                      </h4>
                      <p className="text-sm text-red-700">
                        La spécialité saumuroise traditionnelle
                      </p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                      <h4 className="font-medium text-green-800 mb-1">
                        🌱 Fouées Végétariennes
                      </h4>
                      <p className="text-sm text-green-700">
                        Fromage de chèvre, courgettes
                      </p>
                    </div>

                    <div className="bg-pink-50 p-3 rounded-xl border border-pink-200">
                      <h4 className="font-medium text-pink-800 mb-1">
                        🍯 Fouées Sucrées
                      </h4>
                      <p className="text-sm text-pink-700">
                        Confiture, chocolat...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Boissons */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10l4 9H3l4-9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Boissons
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                      <h4 className="font-medium text-amber-800 mb-1">
                        🍺 Bières de la Piautre
                      </h4>
                      <p className="text-sm text-amber-700">
                        Blonde et Ambrée artisanales locales
                      </p>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                      <h4 className="font-medium text-purple-800 mb-1">
                        🍷 Vins de Loire
                      </h4>
                      <p className="text-sm text-purple-700">
                        Rouge, Blanc et Rosé de la région
                      </p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-1">
                        💧 Boissons fraîches
                      </h4>
                      <p className="text-sm text-blue-700">
                        Sodas, jus de fruits, eau...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm inline-block">
                  <p className="text-sm text-gray-700">
                    🌱{" "}
                    <strong>
                      Options végétariennes et veganes disponibles
                    </strong>{" "}
                    • Prix doux et locaux privilégiés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Camping */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-purple-200 p-8 rounded-3xl shadow-lg relative overflow-hidden">

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-green-300">
                CAMPING SUR PLACE
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Dormez sous les étoiles !
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Emplacement */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Emplacements
                  </h3>
                  <p className="text-sm text-gray-600">
                    Grands espaces herbeux pour planter votre tente dans la cité
                    du vent !
                  </p>
                </div>

                {/* Sanitaires */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      fill="#000000"
                      width={35}
                      height={35}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M21,9H9V3A2,2,0,0,0,7,1H3A2,2,0,0,0,1,3V9a5.006,5.006,0,0,0,5,5H7.073A7.061,7.061,0,0,0,11,19.319l-.925,2.31A1,1,0,0,0,11,23h8a1,1,0,0,0,.929-1.371L19,19.319A7.045,7.045,0,0,0,23,13V11A2,2,0,0,0,21,9Zm0,2v1H9V11ZM3,9V3H7v9H6A3,3,0,0,1,3,9Zm14.417,8.793a1,1,0,0,0-.645,1.33L17.523,21H12.477l.751-1.877a1,1,0,0,0-.645-1.33A5.034,5.034,0,0,1,9.1,14H20.9A5.034,5.034,0,0,1,17.417,17.793Z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Sanitaires
                  </h3>
                  <p className="text-sm text-gray-600">
                    Découvrez nos cacaravanes ; les toilettes sèches écologiques
                  </p>
                </div>

                {/* Douches */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 20 20"
                      width={30}
                      height={30}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>shower [#55]</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-180.000000, -7959.000000)"
                            fill="#000000"
                          >
                            {" "}
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              {" "}
                              <path
                                d="M142,7810 C142,7809.448 141.552,7809 141,7809 L127,7809 C126.448,7809 126,7809.448 126,7810 C126,7810.552 126.448,7811 127,7811 L141,7811 C141.552,7811 142,7810.552 142,7810 M128.105,7807 L139.565,7807 C138.762,7804.253 136.29,7803 133.835,7803 C131.381,7803 128.908,7804.253 128.105,7807 M144,7809 L144,7811 C144,7812.105 142.94,7813 141.835,7813 L125.835,7813 C124.731,7813 124,7812.105 124,7811 L124,7809 C124,7808 124.653,7807 126.051,7807 C126.802,7803.553 129,7801.414 133,7801.059 L133,7799 L135,7799 L135,7801.059 C138,7801.414 140.868,7803.553 141.619,7807 C143.199,7807 144,7807.966 144,7809 M141,7815 C140.448,7815 140,7815.448 140,7816 L140,7818 C140,7818.552 140.448,7819 141,7819 C141.552,7819 142,7818.552 142,7818 L142,7816 C142,7815.448 141.552,7815 141,7815 M127,7815 C126.448,7815 126,7815.448 126,7816 L126,7818 C126,7818.552 126.448,7819 127,7819 C127.552,7819 128,7818.552 128,7818 L128,7816 C128,7815.448 127.552,7815 127,7815 M135,7816 L135,7818 C135,7818.552 134.552,7819 134,7819 C133.448,7819 133,7818.552 133,7818 L133,7816 C133,7815.448 133.448,7815 134,7815 C134.552,7815 135,7815.448 135,7816"
                                id="shower-[#55]"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Douche
                  </h3>
                  <p className="text-sm text-gray-600">
                    Douche fraiche disponible pour se rafraîchir
                  </p>
                </div>
              </div>

              {/* Informations pratiques camping */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Ce qui est fourni
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Accès aux sanitaires
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Douches
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Point d'eau potable
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Poubelles
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 text-orange-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 16.5C3.498 18.333 4.46 20 6 20z"
                      />
                    </svg>
                    À prévoir
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      Votre tente et matériel de couchage
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      Lampe de poche/frontale
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      Papier toilette (on sait jamais)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                      Respect de la nature et des autres festivaliers
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm inline-block">
                  <p className="text-sm text-gray-700">
                    🌿 <strong>Camping gratuit et éco-responsable</strong> •
                    Installation dès midi le samedi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informations générales */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-pink-200 p-8 rounded-3xl shadow-lg relative overflow-hidden mx-auto max-w-3xl">
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
                INFOS GÉNÉRALES
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Bon festival à toutes et tous ! 🎉
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/70 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">
                    🌱 Éco-responsable
                  </h3>
                  <p className="text-gray-600">
                    Festival zéro déchet, gobelets consignés, toilettes sèches
                  </p>
                </div>

                <div className="bg-white/70 p-4 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2">
                    👨‍👩‍👧‍👦 Family friendly
                  </h3>
                  <p className="text-gray-600">
                    Espace famille, animations pour enfants, tarifs réduits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfosPratiques;
