import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50); // dès qu'on scroll un peu
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mettre à jour le path quand on navigue
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener("popstate", updatePath);
    
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => {
    return currentPath === path;
  };

  // Fonction pour obtenir les classes CSS du lien
  const getLinkClasses = (path, isButton = false) => {
    const baseClasses = isButton 
      ? "flex items-center justify-center bg-[#FFD7B5] text-black px-6 py-2 rounded-full text-sm hover:bg-[#ffc399] transition h-10"
      : "flex items-center justify-center h-10 hover:underline transition-all";
    
    if (isActive(path)) {
      return isButton
        ? `${baseClasses} ring-2 ring-orange-400`
        : `${baseClasses} underline font-bold text-orange-600`;
    }
    
    return baseClasses;
  };

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = () => {
    setTimeout(() => {
      setCurrentPath(window.location.pathname);
    }, 100);
  };

  return (
    <>
      {/* LOGO */}
      <div className="flex flex-col items-center pt-12">
        <div
          className={`transition-all duration-500 ease-in-out ${
            isScrolled
              ? "scale-0 opacity-0 h-0 overflow-hidden"
              : "scale-100 opacity-100 h-auto"
          }`}
        >
          <Link to="/" className="flex items-center mb-4 logoContainer">
            <img
              src="/assets/logo_fest.png"
              alt="Logo Felicita"
              className="logoAccueil"
            />
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-7 z-50 w-full bg-[#FFF7CC] font-baseRegular shadow-lg rounded-lg py-2 px-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm tracking-wide py-2">
          {/* Accueil */}
          <li className="relative group flex items-center">
            <Link
              to="/"
              className={getLinkClasses("/")}
              onClick={handleLinkClick}
            >
              Accueil
            </Link>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/Elmts/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Infos Pratiques */}
          <li className="relative group flex items-center">
            <Link
              to="/infospratiques"
              className={getLinkClasses("/infospratiques")}
              onClick={handleLinkClick}
            >
              Infos Pratiques
            </Link>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/Elmts/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Programmation */}
          <li className="relative group flex items-center">
            <Link
              to="/programmation"
              className={getLinkClasses("/programmation")}
              onClick={handleLinkClick}
            >
              Programmation
            </Link>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/Elmts/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Billetterie */}
          <li className="relative group flex items-center">
            <Link
              to="/billetterie"
              className={getLinkClasses("/billetterie", true)}
              onClick={handleLinkClick}
            >
              Billetterie
            </Link>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/Elmts/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Contact */}
          <li className="relative group flex items-center">
            <Link
              to="/contact"
              className={getLinkClasses("/contact")}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;