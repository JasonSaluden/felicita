// data/editionsData.js
import { artistsData } from "./artistsData";

// L'édition en cours (la programmation n'est pas encore annoncée)
export const EDITION_ACTUELLE = 7;

// Les éditions passées, de la plus récente à la plus ancienne.
// L'édition 6 (2025) reprend les artistes déjà présents dans artistsData.
// Les éditions précédentes sont des placeholders à compléter plus tard.
export const editions = [
  {
    numero: 6,
    annee: 2025,
    theme: "La Cité du Vent",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2025.webp",
    artists: artistsData,
    // Partenaires & sponsors de l'édition. lien: null si pas de site.
    partenaires: [
      { nom: "SUN - Le Son Unique", logo: "/assets/partners/2025/SUN-LOGO-JAUNE.png", lien: "https://lesonunique.com" },
      { nom: "Radio Campus Angers", logo: "/assets/partners/2025/1024px-Logo_Radio_Campus_Angers.webp", lien: null },
      { nom: "Akoufen - La Botellerie", logo: "/assets/partners/2025/Akoufen-LaBotellerie_logo1-RVB-web.webp", lien: null },
      { nom: "Bricomarché", logo: "/assets/partners/2025/Bricomarche_logo_2022.svg.webp", lien: null },
      { nom: "Brissac Loire Aubance", logo: "/assets/partners/2025/Brissac-Loire-Aubance-Horizontal-RVB-.webp", lien: null },
      { nom: "Département de l'Anjou", logo: "/assets/partners/2025/Departement_Anjou_cmjn.webp", lien: null },
      { nom: "1 Brain 2 Fleurs", logo: "/assets/partners/2025/Logo 1 brain 2 fleurs.webp", lien: null },
      { nom: "Montgolfières", logo: "/assets/partners/2025/Logo montgolfières.webp", lien: null },
      { nom: "Fromagerie Rouet", logo: "/assets/partners/2025/Logo-Fromagerie-Rouet-F-Couleur.webp", lien: null },
      { nom: "Ouest Ouvrage", logo: "/assets/partners/2025/Logo_Ouest_Ouvrage.webp", lien: null },
      { nom: "L'Appart Fitness", logo: "/assets/partners/2025/Logo_l_appart_fitness.webp", lien: null },
      { nom: "La Bonne Conduite", logo: "/assets/partners/2025/la_bonne_conduite.webp", lien: null },
      { nom: "Le Moulin de Sarré", logo: "/assets/partners/2025/le_moulin_de_sarre_logo.webp", lien: null },
      { nom: "La Cave Bio", logo: "/assets/partners/2025/logo_la_cave_bio.webp", lien: null },
    ],
  },
  {
    numero: 5,
    annee: 2024,
    theme: "La cité radieuse",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2024.webp",
    artists: [],
    partenaires: [],
  },
  {
    numero: 4,
    annee: 2023,
    theme: "LA cité qui chante",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2023.webp",
    artists: [],
    partenaires: [],
  },
  {
    numero: 3,
    annee: 2022,
    theme: "La methamosphose",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2022.webp",
    artists: [],
    partenaires: [],
  },
  {
    numero: 2,
    annee: 2021,
    theme: "",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2021.webp",
    artists: [],
    partenaires: [],
  },
  // {
  //   numero: 1,
  //   annee: 2020,
  //   theme: "",
  //   affiche: null,
  //   artists: [],
  //   partenaires: [],
  // },
];

// Helpers
export const getEditionByAnnee = (annee) =>
  editions.find((e) => e.annee === Number(annee));

export const getEditionByNumero = (numero) =>
  editions.find((e) => e.numero === Number(numero));

export default editions;
