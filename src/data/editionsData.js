// data/editionsData.js
import { artistes2025 } from "./artistes2025";
import { artistes2026 } from "./artistes2026";
import { partenaires2025 } from "./partenaires2025";
import { partenaires2026 } from "./partenaires2026";

// L'édition en cours (la programmation n'est pas encore annoncée)
export const EDITION_ACTUELLE = 7;

// L'édition 2026 (en cours / à venir).
// Sa programmation vit dans artistes2026.js : il suffit d'y ajouter les artistes.
// Quand l'édition sera passée, tu pourras déplacer cet objet en tête du
// tableau `editions` ci-dessous pour qu'elle rejoigne la rétrospective.
export const EDITION_EN_COURS = {
  numero: 7,
  annee: 2026,
  theme: "",
  affiche: null, // ex: "/assets/affiches/Affiche_Felicita_Festival_2026.webp"
  artists: artistes2026,
  partenaires: partenaires2026,
};

// Les éditions passées, de la plus récente à la plus ancienne.
// L'édition 6 (2025) reprend les artistes déjà présents dans artistes2025.
// Les éditions précédentes sont des placeholders à compléter plus tard.
export const editions = [
  {
    numero: 6,
    annee: 2025,
    theme: "La Cité du Vent",
    affiche: "/assets/affiches/Affiche_Felicita_Festival_2025.webp",
    artists: artistes2025,
    partenaires: partenaires2025,
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
