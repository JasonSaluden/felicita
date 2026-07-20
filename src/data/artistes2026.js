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
//      linktree: "https://linktr.ee/...",     // beacons, spotify, youtube,
//      site: "https://...",                   // bandcamp, facebook... marchent aussi
//    },                                       // (liste dans data/socialPlatforms.js)
//    video: {                                 // 1 vidéo (optionnel)
//      type: "youtube",
//      id: "ID_YOUTUBE",                       // la partie après watch?v=
//    },
//    // Pour une vidéo téléchargée : mettre le fichier (en .mp4 !) dans
//    // public/assets/videos/ et remplacer `video` par :
//    // video: { type: "local", src: "/assets/videos/MonClip.mp4" },
//    // Pour PLUSIEURS vidéos, remplace `video` par :
//    // videos: [
//    //   { type: "youtube", id: "ID_1" },
//    //   { type: "local", src: "/assets/videos/MonClip.mp4" },
//    // ],
//  },
// ========================================================================

export const artistes2026 = [
   {
   id: 1,                                   
   name: "La Clara Sofia",
   image: "/assets/artistes/2026/LaClaraSofia_post.webp",
   image2: "/assets/artistes/2026/LaClaraSofia_post.webp",
   description:
     "“Je suis immense, je contiens des multitudes”, des mots que La Clara Sofia emprunte à Walt Whitman et qui irriguent sa musique écrite en portugais et en anglais, se faisant l’écho des villes et des vies qu’elle a vécues. Sur scène, avec pour leitmotiv de faire bouger les corps et les âmes, dans un trio voix-basse-objets percussifs, le public est enveloppé dans un cocon de pop alternative tissé aux fils du Brésil.",
   genre: "Alt-pop",
   time: "",                                
   socialLinks: {                           
     instagram: "https://www.instagram.com/laclarasofia/",
     beacons: "https://beacons.ai/laclarasofia?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn1IesPelt2OmIp_Efdg1dTZBde9em3eWdAAlOLXaYsCbZ3DeGuz7ITt38wEg_aem_L7xZGZbj9xeK5LwIKlf48g",
   },
   video: {                                
     type: "youtube",
     id: "unxa_1M74Rc",                    
   },
  },
  {
    id: 2,                                   
    name: "Kriill",
    image: "/assets/artistes/2026/Kriill_post.webp",
    image2: "/assets/artistes/2026/Kriill_post.webp",
    description:
      "",
    genre: "Alt-pop",
    time: "",                                
    socialLinks: {                           
      instagram: "https://www.instagram.com/kriill_music/?hl=fr",
      site: "https://lnk.bio/kriill?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGntgU9XMf6xxCcvoX_3sSltU6EbIrZ3XKi4499krddkp8RkICum1suP2sQ0-o_aem_37rLePGWmcOx-te1dm68Qg",
      bandcamp : "https://kriillmusic.bandcamp.com/album/listen-to-the-whale"
    },
    video: {                                
      type: "youtube",
      id: "QQpOBo8rdPU",                    
    },
  },
  {
    id: 3,                                   
    name: "No Sex Last Night",
    image: "/assets/artistes/2026/NoSexLastNight_post.webp",
    image2: "/assets/artistes/2026/NoSexLastNight_post.webp",
    description:
      "Le son new wave de No Sex Last Night sent la sueur, l’angoisse et les nuits sans fin. Le duo transforme ses névroses de zoomers en beats sombres, bruts et profondément vivants. Avec des textes en français, à la fois naïfs et cruellement lucides pour exister un peu plus fort.",
    genre: "ColdWave",
    time: "",                                
    socialLinks: {                           
      instagram: "https://www.instagram.com/nosexlastnightt/?hl=fr",
      spotify: "https://open.spotify.com/intl-fr/artist/4OwWT91x4jWdIGWqKnUH6z",
      deezer: "https://www.deezer.com/fr/artist/208471927",
    },
    video: {                                
      type: "youtube",
      id: "H2_urwDyUVQ",                    
    },
  },
  {
    id: 4,                                   
    name: "NAO",
    image: "/assets/artistes/2026/Nao_post.webp",
    image2: "/assets/artistes/2026/Nao_post.webp",
    description:
      "Nao évolue dans un milieu musical multiculturel marqué par l’immigration de sa famille japonaise en Amérique latine. Très proche des sonorités latino-américaines, notamment le reggaeton, qu’elle allie au latincore ou à la brazilian funk, elle circule dans des espaces de fêtes militants, fusionnant ses influences avec des genres comme le jersey club ou la bass music. Proche des collectifs d’artistes asio-descendant·es Slayyysian et Tiger Bomb, elle est fortement engagée auprès de la représentation des artistes queer asio-descendant·es en France et plus précisément en région parisienne et lilloise.",
    genre: "Techno",
    time: "",                                
    socialLinks: {                           
      instagram: "https://www.instagram.com/naocqr/",
      soundcloud: "https://soundcloud.com/user370155625?ref=clipboard&p=i&c=1&si=D000161B12D243A88001950C4D924DF9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    video: {                                
      type: "local",
      src: "/assets/videos/Teaser_Nao.mp4",                   
    },
  },
  {
    id: 5,                                   
    name: "DJ Startup",
    image: "/assets/artistes/2026/DJStartup_post.webp",
    image2: "/assets/artistes/2026/DJStartup_post.webp",
    description:
      "Simon Lahure aka Dj Startup est à la recherche la formule occulte qui permettra relancer l’épidémie de danse de Strasbourg en 1518. Dans un flow exaltant de mélodies midi, guimbardes, flutiots et ocarinas souffleront la musique d’une teuf antédiluvienne.",
    genre: "Electro",
    time: "",                                
    socialLinks: {                           
      instagram: "www.instagram.com/simon_lahure?igsh=bTJrenp5c3IzMjdm",
      soundcloud: "https://on.soundcloud.com/HtfPznjkUrnmqutM9",
      bandcamp: "https://carpacciocathedrale.bandcamp.com/album/team-building-boot-camp-cc005",
    },
    video: {                                
      type: "youtube",
      id: "baJBmhg90VM",                    
    },
  },
  {
    id: 6,                                   
    name: "!Azar Azar!",
    image: "/assets/artistes/2026/AzarAzar_post.webp",
    image2: "/assets/artistes/2026/AzarAzar_post.webp",
    description:
      "",
    genre: "Improvized Live Techno",
    time: "",
    // socialLinks: à compléter quand on a les liens
    // video: à compléter quand on a un lien YouTube
  },
  {
    id: 7,
    name: "Jago",
    image: "/assets/artistes/2026/Jago_post.webp",
    image2: "/assets/artistes/2026/Jago_post.webp",
    description:
      "",
    genre: "",
    time: "",
    // socialLinks: à compléter quand on a les liens
    // video: à compléter quand on a un lien YouTube
  },
];

// Fonctions utiles (même logique que artistes2025.js)
export const getArtiste2026ById = (id) =>
  artistes2026.find((artist) => artist.id === id);

export default artistes2026;
