// components/ActiviteCard.jsx
//
// Carte d'une activité du festival.
// Les données viennent de data/activites2026.js.
//
// Le visuel (format 4:5, issu de la DA) porte déjà le titre de l'activité :
// le titre HTML est donc rendu en `sr-only`, pour les lecteurs d'écran et le
// référencement, sans le dupliquer visuellement.

// Libellé par défaut + couleurs du badge selon la catégorie de l'activité.
// Une catégorie inconnue (ou absente) retombe sur le style par défaut.
// Le champ `badge` d'une activité remplace le libellé (mais garde la couleur).
const CATEGORIES = {
  atelier: { label: "ATELIER", classes: "bg-orange-200 text-orange-800 border-orange-300" },
  spectacle: { label: "SPECTACLE", classes: "bg-purple-200 text-purple-900 border-purple-300" },
  musique: { label: "MUSIQUE", classes: "bg-blue-200 text-blue-900 border-blue-300" },
  "bien-etre": { label: "BIEN-ÊTRE", classes: "bg-teal-200 text-teal-900 border-teal-300" },
  jeux: { label: "JEUX", classes: "bg-yellow-200 text-yellow-900 border-yellow-300" },
  sport: { label: "SPORT", classes: "bg-lime-200 text-lime-900 border-lime-300" },
  enfants: { label: "ENFANTS", classes: "bg-pink-200 text-pink-900 border-pink-300" },
  nocturne: { label: "NOCTURNE", classes: "bg-indigo-200 text-indigo-900 border-indigo-300" },
};

const CATEGORIE_DEFAUT = {
  label: "ACTIVITÉ",
  classes: "bg-orange-200 text-orange-800 border-orange-300",
};

// Illustration décorative quand l'activité n'a pas encore de visuel.
// On garde la même mascotte pour une activité donnée (choix basé sur l'id).
const MASCOTTES = [
  "/assets/mascottes/Felicita_Ed7_Nenufar01.webp",
  "/assets/mascottes/Felicita_Ed7_Grenouille01.webp",
  "/assets/mascottes/Felicita_Ed7_Libellule.webp",
  "/assets/mascottes/Felicita_Ed7_Poissons.webp",
  "/assets/mascottes/Felicita_Ed7_Fleur01.webp",
  "/assets/mascottes/Felicita_Ed7_Ecrevisse.webp",
];

// `onApercu` (optionnel) : si fourni, un bouton « Aperçu » s'affiche en bas de
// la carte et ouvre la modal de l'activité (voir ModalActivite).
function ActiviteCard({ activite, onApercu = null }) {
  if (!activite) return null;

  const categorie = CATEGORIES[activite.categorie] || CATEGORIE_DEFAUT;
  const libelleBadge = activite.badge || categorie.label;
  const horaires = activite.horaires || [];

  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Visuel de l'activité (4:5), ou mascotte décorative par défaut */}
        <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
          {activite.image ? (
            <img
              src={activite.image}
              alt={activite.nom}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <img
              src={MASCOTTES[(activite.id || 0) % MASCOTTES.length]}
              alt=""
              aria-hidden="true"
              className="h-1/2 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        {/* Contenu */}
        <div className="flex flex-col flex-1 px-5 py-5">
          {/* Le titre est déjà présent dans le visuel : on l'expose pour les
              lecteurs d'écran uniquement. */}
          <h3 className="sr-only">{activite.nom}</h3>

          {/* Badges : catégorie + accès libre. Ils sont sous le visuel et non
              en surimpression, car les visuels de la DA portent déjà leurs
              propres bandeaux. */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border ${categorie.classes}`}
            >
              {libelleBadge}
            </span>
            {activite.accesLibre && (
              <span className="bg-green-200 text-green-900 border border-green-300 px-3 py-1 rounded-full text-xs font-bold">
                ACCÈS LIBRE
              </span>
            )}
          </div>

          {/* Créneaux horaires */}
          {horaires.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {horaires.map((horaire) => (
                <span
                  key={horaire}
                  className="inline-flex items-center gap-1.5 bg-[#F4D4DC] text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-[#F0A5B8]"
                >
                  <img
                    src="/assets/pictos/picto3.png"
                    alt=""
                    aria-hidden="true"
                    className="h-3 w-3 object-contain opacity-80"
                  />
                  {horaire}
                </span>
              ))}
            </div>
          )}

          {activite.description && (
            <p className="text-gray-700 leading-relaxed flex-1">
              {activite.description}
            </p>
          )}

          {activite.tarif && (
            <p className="mt-4 text-sm font-bold text-gray-800">
              {activite.tarif}
            </p>
          )}

          {activite.lieu && (
            <p className="mt-2 text-sm font-medium text-gray-600">
              📍 {activite.lieu}
            </p>
          )}

          {onApercu && (
            <button
              type="button"
              onClick={() => onApercu(activite)}
              className="mt-5 self-start inline-flex items-center gap-2 bg-[#CB97FF] text-[#0A1F14] px-5 py-2 rounded-full font-bold hover:bg-[#E89BAE] transition-colors"
            >
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Aperçu
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiviteCard;
