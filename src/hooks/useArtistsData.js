// hooks/useArtistsData.js
import { useState, useEffect } from 'react';
import { artistsData } from '../data/artistsData'; 

const useArtistsData = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        
        // Utilise les données importées depuis artistsData.js
        await new Promise(resolve => setTimeout(resolve, 300)); // Simule un délai
        setArtists(artistsData);
        
        // Plus tard, tu peux remplacer par un vrai appel API :
        // const response = await fetch('/api/artists');
        // const data = await response.json();
        // setArtists(data);
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setArtists(artistsData); // Fallback sur les données locales
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return { 
    artists, 
    loading, 
    error,
    getArtistById: (id) => artists.find(artist => artist.id === id),
    getArtistsByGenre: (genre) => artists.filter(artist => artist.genre === genre),
    refreshArtists: () => {
      // Fonction pour recharger les données
      setArtists(artistsData);
    }
  };
};

export default useArtistsData;