import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="flex items-center justify-center h-screen text-center px-4">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-xl w-full space-y-6">
        <img
          src="/assets/logo_fest.png"
          alt="Logo Felicita"
          className="h-24 w-24 mx-auto"
        />

        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenue sur le site de la Felicita Festival !
        </h1>

        <p className="text-lg text-gray-700">
          🚧 Nous sommes actuellement en construction 🚧
        </p>
        <p className="text-lg text-gray-700">
          ⬇️ En attendant, retrouvez-nous ici ⬇️
        </p>

        <div className="grid grid-cols-2 gap-4 items-center justify-center">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/lafelicitafestival/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons8-instagram-96.png"
                alt="Instagram"
                className="w-16 h-16"
              />
            </a>
            <p className="text-sm text-gray-800 mt-2">Instagram</p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://linktr.ee/felicitafestival"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linktree@logotyp.us.svg"
                alt="Linktree"
                className="w-32 h-16"
              />
            </a>
            <p className="text-sm text-gray-800 mt-2">Linktree</p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.helloasso.com/associations/la-felicita-festival"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/helloAssoLogo.avif"
                alt="HelloAsso"
                className="w-16 h-16"
              />
            </a>
            <p className="text-sm text-gray-800 mt-2">HelloAsso</p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/lafelicitafestival"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/facebook@logotyp.us.svg"
                alt="Facebook"
                className="w-16 h-16"
              />
            </a>
            <p className="text-sm text-gray-800 mt-2">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
