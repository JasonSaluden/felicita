import React, { useState } from "react";
import Carousel from "../components/Caroussel";

// ===== Onglet « Comment venir ? » =====

// Petites illustrations maison (SVG) pour chaque moyen de transport
const proprietesIcone = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const IconeNavette = ({ className }) => (
  <svg {...proprietesIcone} className={className}>
    <path d="M2.5 15.5V9a1.5 1.5 0 0 1 1.5-1.5h8.6l3 3.5h3.9a2 2 0 0 1 2 2v2.5" />
    <path d="M2.5 15.5h19" />
    <path d="M6 7.5v3.5h6.6" />
    <circle cx="7" cy="17.5" r="1.7" />
    <circle cx="17" cy="17.5" r="1.7" />
  </svg>
);

const IconeCovoiturage = ({ className }) => (
  <svg {...proprietesIcone} className={className}>
    <path d="M3 15.5V13l2.2-4.4a1.6 1.6 0 0 1 1.4-.9h8.8a1.6 1.6 0 0 1 1.4.9L19 13v2.5" />
    <path d="M3 15.5h16" />
    <circle cx="7" cy="17.3" r="1.7" />
    <circle cx="15" cy="17.3" r="1.7" />
    <circle cx="9.3" cy="11" r="1" />
    <circle cx="12.9" cy="11" r="1" />
  </svg>
);

const IconeBus = ({ className }) => (
  <svg {...proprietesIcone} className={className}>
    <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
    <path d="M2.5 10h19" />
    <path d="M8.5 4v6M14.5 4v6" />
    <path d="M5.5 13.5h3M15.5 13.5h3" />
    <circle cx="7" cy="18.5" r="1.6" />
    <circle cx="17" cy="18.5" r="1.6" />
  </svg>
);

const IconeVelo = ({ className }) => (
  <svg {...proprietesIcone} className={className}>
    <circle cx="5.5" cy="16.5" r="3.5" />
    <circle cx="18.5" cy="16.5" r="3.5" />
    <path d="M12 16.5 10 9.5M10 9.5 16 8.5M16 8.5 18.5 16.5M12 16.5 16 8.5" />
    <path d="M8.7 9.5h2.6M15 7.2h2.4" />
  </svg>
);

// Le lien de chaque moyen de transport pointe vers la plateforme correspondante
const moyensDeVenir = [
  {
    id: "navette",
    titre: "Navettes",
    Icone: IconeNavette,
    couleurIcone: "bg-pink-100 text-pink-700 border-pink-200",
    texte:
      "Plusieurs départs sont prévus samedi (11h30, 13h30, 15h30) depuis la gare d'Angers puis des retours dimanche (10h, 11h30, 14h) depuis La Felicità. Réservation obligatoire.",
    lien: "https://www.helloasso.com/associations/la-felicita-festival/evenements/navettes-la-felicita-2026",
    libelleLien: "Réserver ma navette",
  },
  {
    id: "Covoiturage",
    titre: "En covoiturage",
    Icone: IconeCovoiturage,
    couleurIcone: "bg-orange-100 text-orange-700 border-orange-200",
    texte:
      "Propose des places dans ta voiture ou trouve un trajet depuis chez toi sur la plateforme de covoiturage du festival.",
    lien: "https://www.covievent.org/covoiturage/festival-la-felicita-7eme-edition/75af7e58f19552aadda14bc068ea2a84",
    libelleLien: "Trouver un covoiturage",
  },
  {
    id: "bus",
    titre: "En bus",
    Icone: IconeBus,
    couleurIcone: "bg-blue-100 text-blue-700 border-blue-200",
    texte:
      "Depuis la gare d'Angers, rejoins le festival avec la ligne Aléop 405 (Angers ↔ Doué-en-Anjou ↔ Montreuil-Bellay), arrêts à Brissac-Quincé. Le tout en 35 min !",
    lien: "/assets/docs/Horaires_Aleop_405_ete_2026.pdf",
    libelleLien: "Voir les horaires (PDF)",
  },
  {
    id: "velo",
    titre: "À vélo",
    Icone: IconeVelo,
    couleurIcone: "bg-green-100 text-green-700 border-green-200",
    texte:
      "Départ collectif prévu depuis Angers vers 11h30 pour venir en mode tout doux ! Plus d'infos à venir",
    // Pas encore de lien : la carte s'affiche sans bouton tant que `lien` est absent
  },
];

// Temps de trajet en voiture depuis les villes voisines
const tempsDeTrajet = [
  { ville: "Angers", duree: "15 min" },
  { ville: "Saumur", duree: "30 min" },
  { ville: "Cholet", duree: "40 min" },
];

function InfosPratiques() {
  const [activeTab, setActiveTab] = useState("venir");

  const tabs = [
    { id: "venir", label: "Comment venir ?" },
    { id: "manger", label: "Quoi manger ?" },
    { id: "dormir", label: "Comment dormir ?" },
    { id: "kit", label: "Kit festivalier" },
  ];

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
            <div className="flex items-center justify-center space-x-3 sm:space-x-6 mb-8">
              <img
                src="/assets/pictos/picto2.png"
                alt=""
                aria-hidden="true"
                className="hidden sm:block h-8 w-8 object-contain opacity-90"
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                INFOS PRATIQUES
              </h1>
              <img
                src="/assets/pictos/picto2.png"
                alt=""
                aria-hidden="true"
                className="hidden sm:block h-8 w-8 object-contain opacity-90"
              />
            </div>

            {/* Sous-titre : typographique, sans cadre, pour ne pas ressembler
                à un bouton */}
            <div className="inline-flex items-center gap-4">
              <span className="hidden sm:block h-px w-10 bg-[#F0A5B8]"></span>
              <p className="text-xl sm:text-2xl text-gray-800 font-medium italic">
                Tout ce qu'il faut savoir pour venir
              </p>
              <span className="hidden sm:block h-px w-10 bg-[#F0A5B8]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-br from-blue-100 to-blue-200 border-orange-200 text-gray-800 shadow-lg"
                  : "bg-white/60 border-gray-200 text-gray-600 hover:bg-white/80 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu des onglets */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Onglet Comment venir */}
        {activeTab === "venir" && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-orange-200 p-4 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Comment venir à la Felicità ?
                </h2>

                {/* Temps de trajet en voiture */}
                <div className="bg-white/70 p-6 rounded-2xl border border-gray-200 mb-8">
                  {/* Volontairement plat et anguleux : ce sont des infos,
                      pas des boutons */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {tempsDeTrajet.map(({ ville, duree }) => (
                      <span
                        key={ville}
                        className="inline-flex items-baseline gap-2 border-l-4 border-[#F0A5B8] bg-white/50 pl-3 pr-4 py-1.5 rounded-r-md"
                      >
                        <span className="text-sm text-gray-700">{ville}</span>
                        <span className="text-lg font-bold text-[#0E5C3A]">
                          {duree}
                        </span>
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-3 italic">
                    Temps de trajet en voiture
                  </p>
                </div>

                {/* Les différents moyens de venir */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {moyensDeVenir.map(
                    ({
                      id,
                      titre,
                      Icone,
                      couleurIcone,
                      texte,
                      lien,
                      libelleLien,
                    }) => {
                      const estUnPdf = Boolean(lien) && lien.endsWith(".pdf");

                      return (
                        <div
                          key={id}
                          className="bg-white/70 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02]"
                        >
                          <div
                            className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 ${couleurIcone}`}
                          >
                            <Icone className="w-9 h-9" />
                          </div>

                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {titre}
                          </h3>

                          <p className="text-sm text-gray-600 mb-5 flex-1">
                            {texte}
                          </p>

                          {/* Bouton d'action : vert festival + rose, pour ne pas
                              être confondu avec les onglets et les encarts */}
                          {lien ? (
                            <a
                              href={lien}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#0E5C3A] hover:bg-[#0A1F14] text-[#F4D4DC] font-bold text-sm uppercase tracking-wide px-5 py-2.5 rounded-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                              {libelleLien}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={
                                    estUnPdf
                                      ? "M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                                      : "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  }
                                />
                              </svg>
                            </a>
                          ) : (
                            /* Pas encore de plateforme pour ce moyen de transport */
                            <span className="text-xs font-bold uppercase tracking-wide text-[#0E5C3A]/60 border-t border-dashed border-[#0E5C3A]/30 pt-3 w-full">
                              Bientôt disponible
                            </span>
                          )}
                        </div>
                      );
                    }
                  )}
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
                    49320 Brissac Loire Aubance
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Quoi manger */}
        {activeTab === "manger" && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-blue-200 p-4 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-orange-300">
                  RESTAURATION & BOISSONS
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Se régaler sur place !
                </h2>

                {/* Photo de la restauration */}
                <div className="mb-8">
                  <div className="mb-8">
                    <Carousel
                      images={[
                        {
                          src: "/assets/photos/Restau/9453 coesamuse_ Chloé André.webp",
                          caption: "Photo : @coesamuse_",
                        },
                        {
                          src: "/assets/photos/Restau/9563 coesamuse_ Chloé André.webp",
                          caption: "Photo : @coesamuse_",
                        },
                        {
                          src: "/assets/photos/Restau/coesamuseIMGM8262.webp",
                          caption: "Photo : @coesamuse_",
                        },
                        {
                          src: "/assets/photos/Restau/coesamuseIMGM7422.webp",
                          caption: "Photo : @coesamuse_",
                        },
                      ]}
                      ariaLabel="Carrousel restauration (éditions précédentes)"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2 italic">
                  Souvenir des éditions précédentes 😋

</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* À manger */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        À manger
                      </h3>
                    </div>

                    {[
                      {
                        titre: "Felichi'Fouées by Moulin de Sarré",
                        items: [
                          {
                            key: "fouees-salees",
                            badge: "🥖 Fouées salées",
                            desc: "Nature, beurre, rillauds, rillettes, chèvre-miel, fromage, courgettes-falafels ou champignons persillés",
                            cls: "bg-red-50 border-red-200 text-red-800",
                          },
                          {
                            key: "fouees-sucrees",
                            badge: "🍯 Fouées sucrées",
                            desc: "Nocciolata ou miel",
                            cls: "bg-pink-50 border-pink-200 text-pink-800",
                          },
                        ],
                      },
                      {
                        titre: "Barquettes",
                        items: [
                          {
                            key: "frites",
                            badge: "🍟 Barquette de frites",
                            desc: "Bonne dose de frites, sauce au choix",
                            cls: "bg-amber-50 border-amber-200 text-amber-800",
                          },
                          {
                            key: "falafels",
                            badge: "🧆 Barquette de falafels",
                            desc: "Boulettes de pois chiches, sauce au choix",
                            cls: "bg-lime-100 border-lime-300 text-lime-900",
                          },
                        ],
                      },
                    ].map((groupe) => (
                      <div key={groupe.titre} className="mb-5 last:mb-0">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-gray-600 text-center mb-3">
                          {groupe.titre}
                        </h4>
                        {groupe.items.map((item) => (
                          <div
                            key={item.key}
                            className={`p-3 rounded-xl border mb-3 last:mb-0 ${item.cls}`}
                          >
                            <h5 className="font-medium mb-1">{item.badge}</h5>
                            <p className="text-sm opacity-80">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Boissons */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                    <div className="text-center mb-4">
                     
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Boissons
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                        <h4 className="font-medium text-amber-800 mb-1">
                          🍺 Bières de la Piautre
                        </h4>
                        <p className="text-sm text-amber-700 text-justify">
                          Blonde et IPA artisanales locales
                        </p>
                      </div>

                      <div className="flex bg-purple-50 p-3 rounded-xl border border-purple-200">
                        <div className="w-1/2 pr-3 border-r border-purple-200">
                          <h4 className="font-medium text-purple-800 mb-1">
                            🍷 Vins de Loire
                          </h4>
                          <p className="text-sm text-purple-700 text-justify">
                            Rouge, blanc et rosé de la région
                          </p>
                        </div>
                        <div className="w-1/2 pl-3">
                          <h4 className="font-medium text-purple-800 mb-1">
                            🍷 Vins sans alcool
                          </h4>
                          <p className="text-sm text-purple-700 text-justify">
                            Pinot noir, Chardonnay
                          </p>
                        </div>
                      </div>

                      <div className="bg-pink-100 p-3 rounded-xl border border-pink-300">
                        <h4 className="font-medium text-purple-800 mb-1">
                          🍹 Cocktails
                        </h4>
                        <p className="text-sm text-purple-700 text-justify">
                          Spritz, Sangria et Kir
                        </p>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-1">
                          💧 Boissons fraîches
                        </h4>
                        <p className="text-sm text-blue-700 text-justify">
                          Sodas, jus de fruits, eau...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Options végé centré */}
                  <div className="md:col-span-2 mt-6 flex justify-center">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-3 rounded-full shadow-sm">
                      <p className="text-sm text-gray-700">
                        🌱{" "}
                        <strong>
                          Options végétariennes disponibles
                        </strong>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Comment dormir */}
        {activeTab === "dormir" && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-purple-200 p-4 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-green-300">
                  CAMPING SUR PLACE
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Dormez sous les étoiles !
                </h2>

                <div className="mb-8">
                  <div className="mb-8">
                    <Carousel
                      images={[
                        {
                          src: "/assets/photos/Camping/coesamuseIMGM8311.webp",
                          caption: "Photo : @coesamuse_",
                        },
                        {
                          src: "/assets/photos/Camping/9414 coesamuse_ Chloé André.webp",
                          caption: "Photo : @coesamuse_",
                        },
                      ]}
                      ariaLabel="Carrousel restauration (éditions précédentes)"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2 italic">
                    Souvenir des éditions précédentes 😋
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                      Grands espaces sous les arbres pour planter votre tente !
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
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                      Découvrez nos cacaravanes ; les toilettes sèches
                      écologiques
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
                        Eau potable
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
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <defs>
    <clipPath id="triangle-clip">
      <path d="M12 2.5L22.5 20.5H1.5L12 2.5Z" />
    </clipPath>
  </defs>
  
  <path d="M12 2.5L22.5 20.5H1.5L12 2.5Z" />
  
  <g clipPath="url(#triangle-clip)">
    <rect x="11" y="8" width="2" height="7" fill="white" rx="1" />
    <circle cx="12" cy="17.5" r="1.25" fill="white" />
  </g>
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
                      🌿 <strong>Camping gratuit</strong> •
                      Installation dès midi le samedi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Kit festivalier */}
        {activeTab === "kit" && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-green-200 p-4 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-purple-300">
                  GUIDE DU FESTIVALIER
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Votre kit de survie pour le festival !
                </h2>

                {/* Caroussel d'images */}
                <div className="mb-8">
                  <div className="mb-8">
                    <Carousel
                      images={[
                        {
                          src: "/assets/photos/Kit/9676coesamuse_ChloeAndre.webp",
                          caption: "@coesamuse_",
                        },
                        {
                          src: "/assets/photos/Kit/postPrev.webp",
                          caption: "@coesamuse_",
                        },
                        {
                          src: "/assets/photos/Kit/coesamuseIMGM7757.webp",
                          caption: " 'Le kiffeur' - @coesamuse_",
                        },
                      ]}
                      ariaLabel="Carrousel kit festivalier"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2 italic">
                    Souvenir des éditions précédentes 😋
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Stand prévention */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Stand Prévention
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                        <p className="text-sm text-red-700 mb-3">
                          Une équipe de prévention sera là pour vous accompagner
                          et vous informer.
                        </p>

                        <div className="space-y-2 text-sm text-red-700">
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            Conseils/Informations
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            Bouchons d'oreilles, ethylotests et préservatifs
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            Réduction des risques
                          </div>
                          <div className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            Premiers secours
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <p className="text-sm text-blue-800 font-medium">
                          N'hésitez pas à passer nous voir pour toute question !
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Les Indispensables */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-gray-200">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Les Indispensables
                      </h3>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-lg mr-3 mt-0.5">🥤</span>
                          <div>
                            <span className="font-semibold">Éco-cup</span>
                            <p className="text-sm text-gray-600">
                              Ramène ton gobelet réutilisable !
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-lg mr-3 mt-0.5">🔦</span>
                          <div>
                            <span className="font-semibold">
                              Lampe frontale
                            </span>
                            <p className="text-sm text-gray-600">
                              Indispensable pour les déplacements nocturnes
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-lg mr-3 mt-0.5">🧥</span>
                          <div>
                            <span className="font-semibold">
                              Vêtements chauds
                            </span>
                            <p className="text-sm text-gray-600">
                              Les soirées peuvent être fraîches !
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-lg mr-3 mt-0.5">🍫</span>
                          <div>
                            <span className="font-semibold">Encas</span>
                            <p className="text-sm text-gray-600">
                              Petite faim entre deux concerts
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="text-lg mr-3 mt-0.5">💧</span>
                          <div>
                            <span className="font-semibold">Gourde</span>
                            <p className="text-sm text-gray-600">
                              Points d'eau potable disponibles
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Conseils pratiques */}
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
                      Conseils futés
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Chargeur portable pour ton téléphone
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Sac plastique pour protéger tes affaires
                      </li>
                    </ul>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfosPratiques;
