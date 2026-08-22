// data/activites2026.js
//
// Activités de l'édition 2026 (7e édition) : ateliers, jeux, spectacles et
// autres escales dans la Cité du ruisseau, à retrouver dès 12h.
//
// 👉 Pour ajouter une activité : copie le modèle ci-dessous (entre les ===),
//    décommente-le, colle-le dans le tableau `activites2026` et remplis-le.
//    Mets les images dans : public/assets/activites/2026/
//
// Tant que le tableau est vide, la section « Les activités » n'apparaît ni sur
// l'accueil ni sur la page Programmation.
//
// =========================== MODÈLE ACTIVITÉ ============================
//  {
//    id: 1,                                   // numéro unique (1, 2, 3, ...)
//    nom: "Nom de l'activité",
//    categorie: "atelier",                    // couleur du badge, voir la
//                                             // liste des catégories plus bas
//    badge: "ATELIER PARTICIPATIF",           // libellé exact du badge
//                                             // (optionnel : sinon le libellé
//                                             // par défaut de la catégorie)
//    horaires: ["14h - 17h"],                 // 1 ou plusieurs créneaux,
//                                             // ex: ["14h - 16h", "17h - 18h"]
//                                             // ou ["En continu"]
//    accesLibre: false,                       // true = badge « Accès libre »
//    description:
//      "Texte de présentation de l'activité.",
//    tarif: "",                               // ex: "Massages à petits prix"
//                                             // (optionnel, affiché en bas de
//                                             // la carte)
//    lieu: "",                                // ex: "Bord du ruisseau" (optionnel)
//    image: "/assets/activites/2026/MonActivite_post.webp",   // visuel de la
//                                             // carte (format 4:5), ou null
//    imageDetail: null,                       // même visuel avec la
//                                             // description incrustée (version
//                                             // réseaux sociaux) — pas affiché
//                                             // sur le site, gardé pour info
//    miseEnAvant: true,                       // true = affichée sur l'accueil
//                                             // (sinon les 3 premières par id)
//  },
// ========================================================================
//
// Catégories disponibles (couleur + libellé par défaut du badge,
// voir components/ActiviteCard.jsx) :
//   "atelier" · "spectacle" · "musique" · "bien-etre" · "jeux" · "sport"
//   · "enfants" · "nocturne"
//
// Les descriptions ci-dessous sont la retranscription des visuels de la DA
// 2026 (dossier « DA Felicita 2026/Activites »).

export const activites2026 = [
  {
    id: 1,
    nom: "Carte sensible du ruisseau",
    categorie: "atelier",
    badge: "ATELIER PARTICIPATIF",
    horaires: ["14h - 17h"],
    accesLibre: false,
    description:
      "Viens participer à une cartographie collective avec Maïa Bodineau, architecte de terrain, tout terrain ! Pour explorer, pas besoin de parcourir les océans, ni de gravir les montagnes… l'aventure peut commencer autour de chez soi ! Lors de cet atelier, elle vous invitera à vous raconter votre rapport à l'eau, sa présence dans votre quotidien, vos souvenirs avec elle.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/CarteSensibleDuRuisseau_post.webp",
    imageDetail: "/assets/activites/2026/CarteSensibleDuRuisseau_desc.webp",
    miseEnAvant: true,
  },
  {
    id: 2,
    nom: "Lanlaire",
    categorie: "spectacle",
    badge: "CONCERT THÉÂTRALISÉ",
    horaires: ["15h50 - 17h05"],
    accesLibre: false,
    description:
      "Avec leur projet Lanlaire, Esther & Nathan proposent un concert théâtralisé. De 1683 à 2026, reprises et compositions dialoguent à l'aide du piano et de la voix, mais aussi du cajon, du glockenspiel et autres surprises musicales. Dans un rapport tantôt clownesque, tantôt amoureux, les deux interprètes inventent un monde musical tonitruant où la chanson française est à l'honneur, aux côtés de répertoires lyrique, jazz, électro... Lanlaire déclame sa poésie fragile et extravagante, tissant des liens entre les morceaux pour former une sorte de parcours initiatique exalté.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/Lanlaire_post.webp",
    imageDetail: "/assets/activites/2026/Lanlaire_desc.webp",
    // Lanlaire était auparavant dans artistes2026.js : on garde ici ses vidéos
    // et son genre, qui ne sont pas encore affichés sur les cartes d'activité.
    genre: "Chanson française théâtralisée",
    videos: [
      {
        type: "local",
        src: "/assets/videos/Lanlaire_Extrait.mp4",
        title: "Vous êtes comme la musique (extrait)",
      },
      { type: "local", src: "/assets/videos/Lanlaire_Teaser.mp4", title: "Teaser" },
    ],
    miseEnAvant: true,
  },
  {
    id: 3,
    nom: "Aquarelle ton monde",
    categorie: "atelier",
    badge: "ATELIER",
    horaires: ["14h - 16h", "17h - 18h"],
    accesLibre: false,
    description:
      "Pose-toi quelques instants au bord du ruisseau et laisse parler les couleurs. Inspiré·e par les ondulations de l'eau et ce qui t'entoure, prends le pinceau pour créer ta propre aquarelle. Irène sera là pour t'accompagner dans cette parenthèse créative, que tu sois habitué·e à peindre ou que ce soit tout nouveau pour toi.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/AquarelleTonMonde_post.webp",
    imageDetail: "/assets/activites/2026/AquarelleTonMonde_desc.webp",
    miseEnAvant: true,
  },
  {
    id: 4,
    nom: "Au fil du Handpan",
    categorie: "musique",
    badge: "ATELIER DÉCOUVERTE",
    horaires: ["14h - 16h", "17h - 18h"],
    accesLibre: false,
    description:
      "Viens t'évader lors de cette pause musicale suspendue, où l'onde des handpans se propage à l'instar des ondes aquatiques ! Présence d'un adulte requise pour les enfants.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/AuFilDuHandpan_post.webp",
    imageDetail: "/assets/activites/2026/AuFilDuHandpan_desc.webp",
    miseEnAvant: false,
  },
  {
    id: 5,
    nom: "Massages au fil de l'eau",
    categorie: "bien-etre",
    badge: "MASSAGES ASSIS",
    horaires: ["En continu"],
    accesLibre: false,
    description:
      "Besoin de souffler entre deux aventures dans la Cité du ruisseau ? Julie t'accueille tout au long de la journée pour une pause massage. Nourrie par la danse et différentes pratiques corporelles, elle propose des massages assis pensés comme un moment d'écoute, de détente et de reconnexion au corps.",
    tarif: "Massages proposés à petits prix.",
    lieu: "",
    image: "/assets/activites/2026/MassagesAuFilDeLEau_post.webp",
    imageDetail: "/assets/activites/2026/MassagesAuFilDeLEau_desc.webp",
    miseEnAvant: false,
  },
  {
    id: 6,
    nom: "Sous les étoiles du ruisseau",
    categorie: "nocturne",
    badge: "OBSERVATION",
    horaires: ["23h30", "1h00"],
    accesLibre: false,
    description:
      "Quand la nuit tombe sur La Felicità, il est temps de lever les yeux ! Passionné d'astronomie, Yannis t'emmène explorer tout ce qui s'agite au-dessus de nos têtes : constellations, planètes et galaxies. Une parenthèse nocturne pour terminer la journée la tête dans les étoiles.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/SousLesEtoilesDuRuisseau_post.webp",
    imageDetail: "/assets/activites/2026/SousLesEtoilesDuRuisseau_desc.webp",
    miseEnAvant: false,
  },
  {
    id: 7,
    nom: "La barque à jeux",
    categorie: "jeux",
    badge: "JEUX EN BOIS",
    horaires: ["12h - 18h"],
    accesLibre: true,
    description:
      "Fais escale à la Barque à jeux et viens tester les nombreux jeux en bois installés au bord du ruisseau. En solo, en duo ou en équipe, il y en aura pour tous les goûts et tous les âges !",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/LaBarqueAJeux_post.webp",
    imageDetail: "/assets/activites/2026/LaBarqueAJeux_desc.webp",
    miseEnAvant: false,
  },
  {
    id: 8,
    nom: "L'île au volley",
    categorie: "sport",
    badge: "VOLLEY",
    horaires: ["Tout l'après-midi"],
    accesLibre: true,
    description:
      "Envie de te dégourdir les jambes entre deux galettes saucisses ? Rejoins l'Île au Volley et embarque dans une partie avec les autres festivalier·es.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/LIleAuVolley_post.webp",
    imageDetail: "/assets/activites/2026/LIleAuVolley_desc.webp",
    miseEnAvant: false,
  },
  {
    id: 9,
    nom: "Le petit ruisseau",
    categorie: "enfants",
    badge: "ESPACE ENFANTS",
    horaires: ["12h - 18h"],
    accesLibre: true,
    description:
      "Les plus jeunes ont aussi leur petit coin dans la Cité du ruisseau ! Un espace pensé pour faire une pause, jouer, créer et profiter du festival à leur rythme.",
    tarif: "",
    lieu: "",
    image: "/assets/activites/2026/LePetitRuisseau_post.webp",
    imageDetail: "/assets/activites/2026/LePetitRuisseau_desc.webp",
    miseEnAvant: false,
  },
];

export default activites2026;
