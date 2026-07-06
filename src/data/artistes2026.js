// data/artistes2026.js
//
// Line-up de l'édition 2026 (7e édition).
//
// 👉 Pour ajouter un artiste : copie le modèle ci-dessous (entre les ===),
//    décommente-le, colle-le dans le tableau `artistes2026` et remplis les champs.
//    Mets les images dans : public/assets/artistes/2026/
//
// Tant que le tableau est vide, la page Programmation affiche
// automatiquement le bloc « Ça arrive bientôt ».
//
// ============================ MODÈLE ARTISTE ============================
//  {
//    id: 1,                                   // numéro unique (1, 2, 3, ...)
//    name: "Nom de l'artiste",
//    image: "/assets/artistes/2026/MonArtiste_Slide_1.webp",
//    image2: "/assets/artistes/2026/MonArtiste_Slide_2.webp",
//    description:
//      "Texte de présentation.\nUn \\n fait un retour à la ligne.",
//    genre: "Techno / Folk / ...",
//    time: "",                                // ex: "22h30" (optionnel)
//    socialLinks: {                           // tous optionnels
//      instagram: "https://instagram.com/...",
//      soundcloud: "https://soundcloud.com/...",
//      site: "https://...",
//    },
//    video: {                                 // 1 vidéo (optionnel)
//      type: "youtube",
//      id: "ID_YOUTUBE",                       // la partie après watch?v=
//    },
//    // Pour PLUSIEURS vidéos, remplace `video` par :
//    // videos: [
//    //   { type: "youtube", id: "ID_1" },
//    //   { type: "youtube", id: "ID_2" },
//    // ],
//  },
// ========================================================================

export const artistes2026 = [
   {
   id: 1,                                   
   name: "La Clara Sofia",
   image: "/assets/artistes/2026/LaClaraSofia_Slide1.webp",
   image2: "/assets/artistes/2026/LaClaraSofia_Slide1.webp",
   description:
     "“Je suis immense, je contiens des multitudes”, des mots que La Clara Sofia emprunte à Walt Whitman et qui irriguent sa musique écrite en portugais et en anglais, se faisant l’écho des villes et des vies qu’elle a vécues. Sur scène, avec pour leitmotiv de faire bouger les corps et les âmes, dans un trio voix-basse-objets percussifs, le public est enveloppé dans un cocon de pop alternative tissé aux fils du Brésil.",
   genre: "Techno",
   time: "18h",                                
   socialLinks: {                           
     instagram: "https://instagram.com/...",
     soundcloud: "https://soundcloud.com/...",
     site: "https://...",
   },
   video: {                                
     type: "youtube",
     id: "ID_YOUTUBE",                    
   },
  },
  {
    id: 2,                                   
    name: "Kriill",
    image: "/assets/artistes/2026/Kriill_Slide1.webp",
    image2: "/assets/artistes/2026/Kriill_Slide1.webp",
    description:
      "",
    genre: "Techno",
    time: "18h",                                
    socialLinks: {                           
      instagram: "https://instagram.com/...",
      soundcloud: "https://soundcloud.com/...",
      site: "https://...",
    },
    video: {                                
      type: "youtube",
      id: "ID_YOUTUBE",                    
    },
  },
  {
    id: 3,                                   
    name: "No Sex Last Night",
    image: "/assets/artistes/2026/NoSexLastNight_Slide1.webp",
    image2: "/assets/artistes/2026/NoSexLastNight_Slide1.webp",
    description:
      "Le son new wave de No Sex Last Night sent la sueur, l’angoisse et les nuits sans fin. Le duo transforme ses névroses de zoomers en beats sombres, bruts et profondément vivants. Avec des textes en français, à la fois naïfs et cruellement lucides pour exister un peu plus fort.",
    genre: "Techno",
    time: "18h",                                
    socialLinks: {                           
      instagram: "https://www.instagram.com/nosexlastnightt/?hl=fr",
      soundcloud: "https://soundcloud.com/...",
      site: "https://...",
    },
    video: {                                
      type: "youtube",
      id: "ID_YOUTUBE",                    
    },
  },
  {
    id: 4,                                   
    name: "NAO",
    image: "/assets/artistes/2026/Nao_Slide1.webp",
    image2: "/assets/artistes/2026/Nao_Slide1.webp",
    description:
      "",
    genre: "Techno",
    time: "18h",                                
    socialLinks: {                           
      instagram: "https://instagram.com/...",
      soundcloud: "https://soundcloud.com/...",
      site: "https://...",
    },
    video: {                                
      type: "youtube",
      id: "ID_YOUTUBE",                    
    },
  },
  {
    id: 5,                                   
    name: "DJ Startup",
    image: "/assets/artistes/2026/.webp",
    image2: "/assets/artistes/2026/.webp",
    description:
      "Simon Lahure aka Dj Startup est à la recherche la formule occulte qui permettra relancer l’épidémie de danse de Strasbourg en 1518. Dans un flow exaltant de mélodies midi, guimbardes, flutiots et ocarinas souffleront la musique d’une teuf antédiluvienne.",
    genre: "Techno",
    time: "18h",                                
    socialLinks: {                           
      instagram: "https://instagram.com/...",
      soundcloud: "https://soundcloud.com/...",
      site: "https://...",
    },
    video: {                                
      type: "youtube",
      id: "ID_YOUTUBE",                    
    },
  },
  {
    id: 6,                                   
    name: "Azar Azar",
    image: "/assets/artistes/2026/.webp",
    image2: "/assets/artistes/2026/.webp",
    description:
      "",
    genre: "Techno",
    time: "18h",                                
    socialLinks: {                           
      instagram: "https://instagram.com/...",
      soundcloud: "https://soundcloud.com/...",
      site: "https://...",
    },  
    video: {                                
      type: "youtube",
      id: "ID_YOUTUBE",                    
    },
  },
];

// Fonctions utiles (même logique que artistes2025.js)
export const getArtiste2026ById = (id) =>
  artistes2026.find((artist) => artist.id === id);

export default artistes2026;
