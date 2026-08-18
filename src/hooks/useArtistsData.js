// hooks/useArtistsData.js
import { useState, useEffect } from 'react';
import { artistes2025 } from '../data/artistes2025'; 

const useArtistsData = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        
        // Utilise les données importées depuis artistes2025.js
        await new Promise(resolve => setTimeout(resolve, 300)); // Simule un délai
        setArtists(artistes2025);
        
        setError(null);
      } catch (err) {
        setError(err.message);
        setArtists(artistes2025); // Fallback sur les données locales
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
      setArtists(artistes2025);
    }
  };
};

export default useArtistsData;