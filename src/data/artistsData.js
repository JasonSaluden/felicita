// data/artistsData.js
export const artistsData = [
    {
      id: 1,
      name: "Spoink",
      image: "/assets/artistes/Spoink_Slide_1.png", 
      image2: "/assets/artistes/Spoink_Slide_2.png",
      description: "Rien n'est prévu. Tout est joué.\nQuatre musiciens, branchés serré.\nDes machines, des instruments, de la sueur.\nÇa commence sans savoir où ça va.\nÇa groove, ça déraille, ça retombe sur ses pattes.\nDrum & bass ? Parfois. Dubstep ? Possible.\nClub étrange ? Souvent.\nPas de setlist. Pas de filet.\nLe son se fabrique en direct, avec les mains, les oreilles,\nles corps.\nSpoink, c'est ça : une improvisation qui donne envie de bouger.",
      genre: "Electro Impro",
      time: "",
      socialLinks: {
        instagram: "@spoinkmusic",
        spotify: "https://spotify.com/electrons"
      },
    //   video: {
    //     type: "local",
    //     src: "/assets/videos/Teaser-Spoink-1.mov" 
    //   }
    },
    {
      id: 2,
      name: "Créature",
      image: "/assets/artistes/Creature_Slide_1.png",
      image2: "/assets/artistes/Creature_Slide_2.png",
      description: "Creature est né·e de l'union explosive entre la lave d'un volcan sulfureux et les eaux enchantées d'une cascade magique. \nAlchimiste en lien profond avec les éléments, iel s'exprime par la performance, le show, et la présence. \nDe la tente berbère ensorcelée aux clubs en transe, du théâtre au podium, en passant par le chant et le drag, Creature traverse les formes et brouille les frontières. À la Félicita, iel proposera des expériences immersives, intenses et sensorielles. \nAvec amour et douceur, avec feu et splendeur,\nCreature luv u",
      genre: "Performance, show",
      time: "21h45",
      socialLinks: {
        instagram: "@basscollective",
        soundcloud: "https://soundcloud.com/basscollective"
      }
    },
    {
      id: 3,
      name: "Amartia Mou",
      image: "/assets/artistes/Amartia_Mou_Slide_1.png",
      image2: "/assets/artistes/Amartia_Mou_Slide_2.png",
      description: "Au croisement de la nostalgie et de la modernité,\nAmartia Mou réinvente le Laïko grec en chansons\nsincères et vibrantes.\n\nChantant l'amour, l'exil et la joie de vivre, ils vous\nferont voyager... et peut-être danser.",
      genre: "Laïko Grec", 
      time: "22h30",
      socialLinks: {
        instagram: "@neondreams80s",
        bandcamp: "https://neondreams.bandcamp.com"
      },
      video: {
        type: "youtube",
        id: "3tpOQ741gWM" 
      }
    },


    {
      id: 4,
      name: "Guiby BZB Eerlow",
      image: "/assets/artistes/Guiby_Bzb_Eerlow_Slide_1.png",
      image2: "/assets/artistes/Guiby_Bzb_Eerlow_Slide_2.png",
      description: "",
      genre: "Techno Experimental",
      time: "23h15",
      socialLinks: {
        instagram: "@chaoscontrol_music",
        youtube: "https://youtube.com/chaoscontrol"
      }
    }
  ];
  
  // Fonctions utiles pour manipuler les données
  export const getArtistById = (id) => 
    artistsData.find(artist => artist.id === id);
  
  export const getArtistsByGenre = (genre) => 
    artistsData.filter(artist => artist.genre === genre);
  
  export const getArtistsByTimeSlot = (timeStart, timeEnd) => {
    return artistsData.filter(artist => {
      // Conversion simple des heures pour comparaison
      const artistHour = parseInt(artist.time.split('h')[0]);
      const startHour = parseInt(timeStart.split('h')[0]);
      const endHour = parseInt(timeEnd.split('h')[0]);
      
      return artistHour >= startHour && artistHour <= endHour;
    });
  };
  
  // Export par défaut de toutes les données
  export default artistsData;