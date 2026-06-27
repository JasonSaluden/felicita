// components/Partenaires.jsx
//
// Affiche les partenaires d'une édition, répartis en deux groupes :
//   - "institutionnel" → Partenaires institutionnels (collectivités, institutions...)
//   - "prive" (défaut) → Partenaires & artisans (commerçants, entreprises...)
// La catégorie est définie par le champ `categorie` de chaque partenaire.
// Un partenaire sans `categorie` est considéré comme privé.

function Partenaires({ partenaires, titre = "Nos partenaires" }) {
  if (!partenaires || partenaires.length === 0) return null;

  const estInstitutionnel = (p) =>
    (p.categorie || "").trim().toLowerCase() === "institutionnel";
  const institutionnels = partenaires.filter(estInstitutionnel);
  const prives = partenaires.filter((p) => !estInstitutionnel(p));

  const renderPartenaire = (partenaire) => {
    const contenu = (
      <div className="bg-white rounded-2xl shadow-lg h-32 flex items-center justify-center p-6 transition-transform duration-200 group-hover:scale-105">
        <img
          src={partenaire.logo}
          alt={partenaire.nom}
          title={partenaire.nom}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );

    return partenaire.lien ? (
      <a
        key={partenaire.nom}
        href={partenaire.lien}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {contenu}
      </a>
    ) : (
      <div key={partenaire.nom} className="group">
        {contenu}
      </div>
    );
  };

  const renderGroupe = (titreGroupe, liste) => {
    if (liste.length === 0) return null;
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#F4D4DC] tracking-wide text-center mb-6">
          {titreGroupe}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {liste.map(renderPartenaire)}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#F4D4DC] tracking-wide">
          {titre}
        </h2>
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

      {renderGroupe("Partenaires institutionnels", institutionnels)}
      {renderGroupe("Partenaires & artisans", prives)}
    </div>
  );
}

export default Partenaires;
