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
    affiche: "/assets/Affiche_Felicita_Festival_2025.jpg",
    artists: artistsData,
    // Partenaires & sponsors de l'édition. lien: null si pas de site.
    partenaires: [
      { nom: "SUN - Le Son Unique", logo: "/assets/partners/SUN-LOGO-JAUNE.png", lien: "https://lesonunique.com" },
      { nom: "Radio Campus Angers", logo: "/assets/partners/1024px-Logo_Radio_Campus_Angers.png", lien: null },
      { nom: "Akoufen - La Botellerie", logo: "/assets/partners/Akoufen-LaBotellerie_logo1-RVB-web.jpg", lien: null },
      { nom: "Bricomarché", logo: "/assets/partners/Bricomarche_logo_2022.svg.png", lien: null },
      { nom: "Brissac Loire Aubance", logo: "/assets/partners/Brissac-Loire-Aubance-Horizontal-RVB-.png", lien: null },
      { nom: "Département de l'Anjou", logo: "/assets/partners/Departement_Anjou_cmjn.png", lien: null },
      { nom: "1 Brain 2 Fleurs", logo: "/assets/partners/Logo 1 brain 2 fleurs.png", lien: null },
      { nom: "Montgolfières", logo: "/assets/partners/Logo montgolfières.png", lien: null },
      { nom: "Fromagerie Rouet", logo: "/assets/partners/Logo-Fromagerie-Rouet-F-Couleur.png", lien: null },
      { nom: "Ouest Ouvrage", logo: "/assets/partners/Logo_Ouest_Ouvrage.png", lien: null },
      { nom: "L'Appart Fitness", logo: "/assets/partners/Logo_l_appart_fitness.png", lien: null },
      { nom: "La Bonne Conduite", logo: "/assets/partners/la_bonne_conduite.png", lien: null },
      { nom: "Le Moulin de Sarré", logo: "/assets/partners/le_moulin_de_sarre_logo.png", lien: null },
      { nom: "La Cave Bio", logo: "/assets/partners/logo_la_cave_bio.png", lien: null },
    ],
  },
  {
    numero: 5,
    annee: 2024,
    theme: "La cité radieuse",
    affiche: "/assets/Affiche_Felicita_Festival_2024.jpg",
    artists: [],
    partenaires: [],
  },
  {
    numero: 4,
    annee: 2023,
    theme: "LA cité qui chante",
    affiche: "/assets/Affiche_Felicita_Festival_2023.jpg",
    artists: [],
    partenaires: [],
  },
  {
    numero: 3,
    annee: 2022,
    theme: "La methamosphose",
    affiche: "/assets/Affiche_Felicita_Festival_2022.jpg",
    artists: [],
    partenaires: [],
  },
  {
    numero: 2,
    annee: 2021,
    theme: "",
    affiche: "/assets/Affiche_Felicita_Festival_2021.jpg",
    artists: [],
    partenaires: [],
  },
  {
    numero: 1,
    annee: 2020,
    theme: "",
    affiche: null,
    artists: [],
    partenaires: [],
  },
];

// Helpers
export const getEditionByAnnee = (annee) =>
  editions.find((e) => e.annee === Number(annee));

export const getEditionByNumero = (numero) =>
  editions.find((e) => e.numero === Number(numero));

export default editions;
