function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-baseRegular">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                Felicità
                <span className="text-yellow-400"> Festival</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Le festival angevin qui célèbre la fin de l'été en musique
              </p>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📅</span>
                <span>Samedi 30 Août 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📍</span>
                <span>Brissac-Quincé - 49320</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/programmation" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Programmation
                </a>
              </li>
              {/* <li>
                <a href="/infos-pratiques" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  Infos Pratiques
                </a>
              </li> */}
              <li>
                <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-semibold">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Partenaires et réseaux */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Partenaires</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="./assets/SUN-LOGO-JAUNE.png"
                  alt="Logo SUN"
                  className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <p className="text-sm text-gray-300">En partenariat avec</p>
                  <p className="font-semibold">SUN Radio</p>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="pt-4">
                <h5 className="font-semibold mb-2">Suivez-nous</h5>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Felicità Festival. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/mentions-legales" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Mentions Légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Politique de Confidentialité
              </a>
              <a href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse delay-300"></div>
    </footer>
  );
}

export default Footer;