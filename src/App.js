import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-6">
            <img src="/assets/logo_fest.png" alt="Logo Felicita" className="h-40 w-40 mb-4" />
      <h1 className="text-4xl font-bold text-grey-600">
        Bienvenue sur le site de la Felicita Festival !
      </h1>
      
      <p className="text-xl text-gray-700">🚧 Nous sommes actuellement en construction 🚧</p>
      <p className="text-xl text-gray-700">👇 En attendant retrouvez-nous ici 👇</p>

      <div className="flex space-x-6">
      <a href="https://www.instagram.com/lafelicitafestival/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons8-instagram-96.png" alt="Instagram" className="w-20 h-20" />
        </a>
        <a href="https://linktr.ee/felicitafestival" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linktree@logotyp.us.svg" alt="Linktree" className="w-40 h-20" />
        </a>
        <a href="https://www.helloasso.com/associations/la-felicita-festival" target="_blank" rel="noopener noreferrer">
          <img src="/assets/helloAssoLogo.avif" alt="HelloAsso" className="w-20 h-20" />
        </a>
        <a href="https://www.facebook.com/lafelicitafestival" target="_blank" rel="noopener noreferrer">
          <img src="/assets/facebook@logotyp.us.svg" alt="Facebook" className="w-20 h-20" />
        </a>
      </div>
    </div>
  );
}

export default App;
