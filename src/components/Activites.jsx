// components/Activites.jsx
//
// Section « Les activités » du festival.
// Utilisée deux fois :
//   - sur l'accueil (LineUp) avec `limite={3}` pour un aperçu,
//   - sur la page Programmation, à la suite des artistes, en entier
//     (ancre #activites, ciblée par le bouton « Découvrir toutes les activités »).

import { useState } from "react";
import ActiviteCard from "./ActiviteCard";
import ModalActivite from "./ModalActivite";

// Une activité n'a un bouton « Aperçu » (et donc une modal) que si elle a des
// vidéos à montrer. Aujourd'hui c'est le cas de Lanlaire uniquement.
const aUnApercu = (activite) =>
  Boolean(activite.video || (activite.videos && activite.videos.length > 0));

function Activites({
  activites,
  titre = "Les activités",
  sousTitre = "Ateliers, jeux, spectacles et autres escales dans la Cité du ruisseau, à retrouver dès 12h !",
  limite = null,
  id = "activites",
}) {
  // Modal d'aperçu (activités avec vidéos)
  const [activiteApercue, setActiviteApercue] = useState(null);

  if (!activites || activites.length === 0) return null;

  const triees = activites.slice().sort((a, b) => a.id - b.id);

  // Aperçu : les activités marquées `miseEnAvant`, sinon les premières par id.
  let aAfficher = triees;
  if (limite) {
    const selection = triees.filter((a) => a.miseEnAvant);
    aAfficher = (selection.length > 0 ? selection : triees).slice(0, limite);
  }

  return (
    <section id={id} className="scroll-mt-28">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#F4D4DC] tracking-wide">
          {titre}
        </h2>
        {sousTitre && (
          <p className="mt-3 text-lg text-[#F4D4DC]/90 italic max-w-2xl mx-auto">
            {sousTitre}
          </p>
        )}
        <div className="flex items-center justify-center mt-4">
          <div className="h-px w-24 bg-gray-300/70"></div>
          <img
            src="/assets/pictos/picto3.png"
            alt="Picto"
            className="h-5 w-5 object-contain opacity-80 mx-4"
          />
          <div className="h-px w-24 bg-gray-300/70"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {aAfficher.map((activite) => (
          <ActiviteCard
            key={activite.id}
            activite={activite}
            onApercu={aUnApercu(activite) ? setActiviteApercue : null}
          />
        ))}
      </div>

      {/* Modal d'aperçu */}
      <ModalActivite
        activite={activiteApercue}
        isOpen={Boolean(activiteApercue)}
        onClose={() => setActiviteApercue(null)}
      />
    </section>
  );
}

export default Activites;
