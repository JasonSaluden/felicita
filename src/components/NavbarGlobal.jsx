import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50); // dès qu'on scroll un peu
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav className="sticky top-8 z-50 w-full bg-[#FFF7CC] font-baseRegular shadow-lg rounded-lg py-2 px-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm tracking-wide py-2">
          {/* Accueil */}
          <li className="relative group flex items-center ">
            <Link
              to="/"
              className="flex items-center justify-center h-10 hover:underline"
            >
              Accueil
            </Link>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Infos Pratiques */}
          <li className="relative group flex items-center">
            <a
              href="#"
              className="flex items-center justify-center h-10 hover:underline"
            >
              Infos Pratiques
            </a>
            <div className="submenu absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white text-black shadow-lg rounded z-10">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Venir à la Felicita
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Boire et manger
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Camping
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Prévention
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Banque
              </a>
            </div>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Restrospective

            <li className="relative group flex items-center">
              <a
                href="#"
                className="flex items-center justify-center h-10 hover:underline"
              >
                Rétrospective
              </a>
              <div className="submenu absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white text-black shadow-lg rounded z-10">
              <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Edition 2024
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Edition 2023
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Edition 2022
                </a>
              </div>
            </li> */}

          <li className="relative group flex items-center">
            <a
              href="#"
              className="flex items-center justify-center h-10 hover:underline"
            >
              Le Festival
            </a>
            <div className="submenu absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white text-black shadow-lg rounded z-10">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Edition 2023
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Edition 2022
              </a>
            </div>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* L'Association */}
          <li className="relative group flex items-center">
            <a
              href="#"
              className="flex items-center justify-center h-10 hover:underline"
            >
              L'association
            </a>
            <div className="submenu absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white text-black shadow-lg rounded z-10">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Notre Histoire
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Nous Rejoindre
              </a>
            </div>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Billetterie */}
          <li className="relative group flex items-center">
            <a
              href="/billetterie"
              className="flex items-center justify-center bg-[#FFD7B5] text-black px-6 py-2 rounded-full text-sm hover:bg-[#ffc399] transition h-10"
            >
              Billetterie
            </a>
          </li>

          {/* Picto */}
          <li className="flex items-center justify-center">
            <img
              src="/assets/picto3.png"
              alt="Line Up"
              className="h-4 w-4 object-contain opacity-80 hover:opacity-100 transition"
            />
          </li>

          {/* Contact */}
          <li className="relative group flex items-center">
            <a
              href="/Contact"
              className="flex items-center justify-center h-10 hover:underline"
            >
              Contact
            </a>
            <div className="submenu absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col bg-white text-black shadow-lg rounded z-10">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Nous Contacter
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                FAQ
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
