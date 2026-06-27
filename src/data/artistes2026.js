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
  {
    id: 2,                                   
    name: "Kriill",
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
  {
    id: 3,                                   
    name: "No Sex Last Night",
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
  {
    id: 4,                                   
    name: "NAO",
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
  {
    id: 5,                                   
    name: "DJ Startup",
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
