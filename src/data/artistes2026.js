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
//    // Pour un COLLECTIF / DUO : ajoute `members` (optionnel). La modal
//    // affiche alors la bio du collectif puis un bloc par membre.
//    // members: [
//    //   {
//    //     name: "Nom du membre",
//    //     image: "/assets/artistes/2026/Membre_post.webp",  // optionnel
//    //     description: "Bio du membre.",
//    //     genre: "Son style",                                // optionnel
//    //     socialLinks: { instagram: "https://..." },         // optionnel
//    //   },
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
     type: "local",
     src: "/assets/videos/LaClaraSofia_post.mp4",
   },
  },
  {
    id: 2,                                   
    name: "Kriill",
    image: "/assets/artistes/2026/Kriill_post.webp",
    image2: "/assets/artistes/2026/Kriill_post.webp",
    description:
      "🌊 Kriill brouille les frontières entre rock alternatif, pop atmosphérique et expérimentation sonore. Le trio parisien compose une musique à la fois sensible, puissante et hypnotique, portée par trois voix harmonieuses, des instruments singuliers et des arrangements d'une grande finesse. Avec leur nouvel album Listen To The Whale, Kriill livre un rock élégant et intense, qui questionne notre époque et notre rapport au monde. Entre l'énergie de Tame Impala et la richesse mélodique des Beatles, découvrez l’univers de Kriill à La Felicità !",
    genre: "Alt-pop",
    time: "",                                
    socialLinks: {                           
      instagram: "https://www.instagram.com/kriill_music/?hl=fr",
      site: "https://lnk.bio/kriill?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGntgU9XMf6xxCcvoX_3sSltU6EbIrZ3XKi4499krddkp8RkICum1suP2sQ0-o_aem_37rLePGWmcOx-te1dm68Qg",
      bandcamp : "https://kriillmusic.bandcamp.com/album/listen-to-the-whale"
    },
    video: {
      type: "local",
      src: "/assets/videos/Kriill_post.mp4",
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
      type: "local",
      src: "/assets/videos/NoSexLastNight_post.mp4",
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
      src: "/assets/videos/Nao_post.mp4",
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
      type: "local",
      src: "/assets/videos/DJStartup_post.mp4",
    },
  },
  {
    id: 6,                                   
    name: "!Azar Azar!",
    image: "/assets/artistes/2026/AzarAzar_post.webp",
    image2: "/assets/artistes/2026/AzarAzar_post.webp",
    description:
      "!AZAR AZAR! c’est une batterie sans le rock et  des synthés sans la pop. Dans le sillage de Concrete au son plus froid de la techno berlinoise. Le duo cherche au travers de ses improvisation à plonger le public dans une trance hypnotique ! Préparez vous à danser avec !Azar Azar!",
    genre: "Improvized Live Techno",
    time: "",
    video: {
      type: "local",
      src: "/assets/videos/AzarAzar_post.mp4",
    },
  },
  {
    id: 7,
    name: "Jago",
    image: "/assets/artistes/2026/Jago_post.webp",
    image2: "/assets/artistes/2026/Jago_post.webp",
    description:
      "Lauréate du Tremplin La Felicità au Nid du Héron, Jago revient sur scène à La Felicità avec son univers sensible, où la douceur côtoie les failles. Inspirée par l'indie pop, les textes de Pomme et les textures de Feu! Chatterton, elle compose une musique qui cherche à éclairer les zones d'ombre, sans jamais les effacer. Entourée de son groupe, elle donne vie à des chansons qui parlent d'émancipation, de fragilité et de cette lumière que l'on apprend à faire grandir en soi",
    genre: "",
    time: "",
    video: {
      type: "local",
      src: "/assets/videos/Jago_post.mp4",
    },
  },
  {
    id: 8,
    name: "112 VKRM",
    image: "/assets/artistes/2026/112VKRM_MicroVegas_post.webp",
    image2: "/assets/artistes/2026/112VKRM_YazUnderwater_post.webp",
    description:
      "112 VKRM (vacarme) a pour vocation de développer une dynamique collective et de fédérer des DJ d’horizons différents, tout en visibilisant les femmes et les minorités de genre dans les musiques actuelles de la scène angevine.\nÀ Felicita, le collectif débarque en duo : Micro Vegas et yaz.underwater.",
    genre: "Collectif DJ — club, bass & techno mutante",
    time: "",
    socialLinks: {
      instagram: "https://www.instagram.com/112_vkrm/",
      soundcloud: "https://soundcloud.com/112vkrm",
    },
    members: [
      {
        name: "Micro Vegas",
        image: "/assets/artistes/2026/112VKRM_MicroVegas_post.webp",
        description:
          "Membre du collectif 112 VKRM, Micro Vegas mixe un son hybride tantôt nerveux, entre techno déconstruite, reggaeton mutant et baile rave, tantôt expérimental et cinématographique, au croisement de l’ambient et du drone. Dans ses sets, pas de ligne droite : virages, secousses souterraines.",
        genre: "Dance Electroclash Booty Ambient Latin",
        socialLinks: {
          instagram: "https://www.instagram.com/jinnieroche/?hl=fr",
          soundcloud: "https://soundcloud.com/112vkrm",
        },
      },
      {
        name: "yaz.underwater",
        image: "/assets/artistes/2026/112VKRM_YazUnderwater_post.webp",
        description:
          "Membre et co-fondatrice du collectif angevin 112 VKRM, yaz.underwater oscille entre les genres sans frontière. Dans ses sets percussifs, elle s’amuse en passant par des inspirations UK bass où se mêlent rythmiques grime, dubstep et UK funky, aux sonorités latines pour faire danser sous tous les horizons.",
        genre: "UK / latin bass music, breaks, global club",
        socialLinks: {
          instagram: "https://www.instagram.com/yasminesbn/?hl=fr",
          soundcloud: "https://on.soundcloud.com/V7MfAbYGAogXHnK9A",
        },
      },
    ],
  },
  {
    id: 9,
    name: "Lanlaire",
    image: "/assets/artistes/2026/Lanlaire_post.webp",
    image2: "/assets/artistes/2026/Lanlaire_post.webp",
    description:
      "Avec leur projet Lanlaire, Esther & Nathan proposent un concert théâtralisé. De 1683 à 2026, reprises et compositions dialoguent à l’aide du piano et de la voix, mais aussi du cajon, du glockenspiel et autres surprises musicales. Dans un rapport tantôt clownesque, tantôt amoureux, les deux interprètes inventent un monde musical tonitruant où la chanson française est à l’honneur, aux côtés de répertoires lyrique, jazz, électro... Lanlaire déclame sa poésie fragile et extravagante, tissant des liens entre les morceaux pour former une sorte de parcours initiatique exalté.",
    genre: "Chanson française théâtralisée",
    time: "",
    videos: [
      {
        type: "local",
        src: "/assets/videos/Lanlaire_Extrait.mp4",
        title: "Vous êtes comme la musique (extrait)",
      },
      {
        type: "local",
        src: "/assets/videos/Lanlaire_Teaser.mp4",
        title: "Teaser",
      },
    ],
  },
];

export const getArtiste2026ById = (id) =>
  artistes2026.find((artist) => artist.id === id);

export default artistes2026;
