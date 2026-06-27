import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { editions } from "../data/editionsData";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isRetroOpen, setIsRetroOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      ? "flex items-center justify-center bg-[#F0A5B8] text-[#0A1F14] px-6 py-2 rounded-full text-sm hover:bg-[#E89BAE] transition h-10"
      : "flex items-center justify-center h-10 text-[#0A1F14] hover:underline transition-all";

    if (isActive(path)) {
      return isButton
        ? `${baseClasses} ring-2 ring-[#0A1F14]`
        : `${baseClasses} underline font-bold`;
    }

    return baseClasses;
  };

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = () => {
    setIsRetroOpen(false);
    setIsMenuOpen(false);
    setTimeout(() => {
      setCurrentPath(window.location.pathname);
    }, 100);
  };

  return (
    <>
      {/* LOGO sur fond bannière */}
      <div
        className="flex flex-col items-center pt-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/backgrounds/BanniereHeader.webp')" }}
      >
        <div
          className={`transition-all duration-500 ease-in-out ${
            isScrolled
              ? "scale-0 opacity-0 h-0 overflow-hidden"
              : "scale-100 opacity-100 h-auto"
          }`}
        >
          <Link to="/" className="flex items-center mb-4 logoContainer">
            <img
              src="/assets/logos/Logo_Felicita_rose.webp"
              alt="Logo Felicita"
              className="logoAccueil"
            />
          </Link>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="ecrevisse-host sticky top-0 z-50 w-full bg-[#F4D4DC] font-base shadow-lg rounded-lg py-2 px-4">

        {/* Barre mobile : libellé + bouton hamburger */}
        <div className="lg:hidden flex items-center justify-between">
          <span className="font-bold text-[#0A1F14] tracking-wide px-2">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            className="p-2 text-[#0A1F14] hover:bg-[#F0A5B8] rounded-md transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row flex-wrap items-center justify-center gap-3 lg:gap-6 text-base tracking-wide py-2`}
        >
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
          <li className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/pictos/picto3.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition"
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
          <li className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/pictos/picto3.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition"
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
          <li className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/pictos/picto3.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition"
            />
          </li>

          {/* Rétrospective (menu déroulant) */}
          <li className="relative flex items-center">
            <button
              type="button"
              onClick={() => setIsRetroOpen((open) => !open)}
              aria-expanded={isRetroOpen}
              className={`flex items-center justify-center h-10 gap-1 text-[#0A1F14] hover:underline transition-all ${
                currentPath.startsWith("/retrospective")
                  ? "underline font-bold"
                  : ""
              }`}
            >
              Rétrospective
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${
                  isRetroOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isRetroOpen && (

              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[#F4D4DC] rounded-lg shadow-lg py-2 z-50">
                <li className="px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-[#0A1F14]/60 cursor-default select-none border-b border-[#0A1F14]/15 mb-1">
                  Editions précédentes
                </li>
                {editions.map((edition) => (
                  <li key={edition.annee}>
                    <Link
                      to={`/retrospective/${edition.annee}`}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-center text-[#0A1F14] hover:bg-[#F0A5B8] transition-colors rounded-md mx-1"
                    >
                      {edition.numero}
                      <sup>e</sup> — {edition.annee}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Picto */}
          <li className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/pictos/picto3.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition"
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
          <li className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/pictos/picto3.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition"
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
