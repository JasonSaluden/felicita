function Footer() {
  const partners = [
    { src: "./assets/partners/SUN-LOGO-JAUNE.png", alt: "SUN Radio" },
    { src: "./assets/partners/Brissac-Loire-Aubance-Horizontal-RVB-.png", alt: "Brissac Loire Aubance" },
    { src: "./assets/partners/Bricomarché_logo_2022.svg.png", alt: "Bricomarché" },
    { src: "./assets/partners/la_bonne_conduite.png", alt: "La Bonne Conduite" },
    { src: "./assets/partners/Logo_l_appart_fitness.png", alt: "L'appart fitness" },
    { src: "./assets/partners/Logo 1 brain 2 fleurs.png", alt: "Un brin deux fleurs" },
    { src: "./assets/partners/logo_la_cave_bio.png", alt: "La cave bio" },
    { src: "./assets/partners/Logo-Fromagerie-Rouet-F-Couleur.png", alt: "Fromagerie Rouet" },
    { src: "./assets/partners/le_moulin_de_sarré_logo.png", alt: "Moulin de Sarré" },
    { src: "./assets/partners/Logo montgolfières.png", alt: "Mongolfières d'Anjou" },
    { src: "./assets/partners/Akoufen-LaBotellerie_logo1-RVB-web.jpg", alt: "Akoufen La Botellerie" },
    { src: "./assets/partners/Logo_Ouest_Ouvrage.png", alt: "Ouest Ouvrage" },
    { src: "./assets/partners/1024px-Logo_Radio_Campus_Angers.png", alt: "Radio Campus Angers" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#FFF8E1] to-[#FFE0B2] text-[#8D4E1B] font-baseRegular relative">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + infos */}
          <div className="lg:col-span-2">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <img
                  src="./assets/logo_fest.png"
                  alt="Felicità Festival Logo"
                  className="w-24 h-auto"
                />
              </div>
              <div>
                <p className="bg-[#FF8A65] text-[#FFFFFF] text-lg mb-4 font-medium px-3 py-1 rounded inline-block">
                  Festival musical & artistique
                </p>
                <div className="space-y-3 text-[#8D4E1B]">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#FF8A65] text-lg">📅</span>
                    <span className="font-medium">Samedi 30 Août 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#FF8A65] text-lg">📍</span>
                    <span className="font-medium">Brissac-Quincé - 49320</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-[#FF8A65] text-[#FFFFFF] px-3 py-1 rounded">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/programmation", label: "Programmation" },
                { href: "/contact", label: "Nous Contacter" },
                { href: "/billetterie", label: "Billetterie" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-[#8D4E1B] hover:text-[#FF8A65] transition-colors duration-200 hover:translate-x-1 transform block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-[#FF8A65] text-[#FFFFFF] px-3 py-1 rounded">
              Suivez-nous
            </h4>
            <div className="flex space-x-4">
              {["#", "#", "#", "#"].map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  className="text-[#8D4E1B] hover:text-[#FF8A65] transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c...z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section partenaires */}
      <div className="border-t border-[#8D4E1B]/30 bg-[#8D4E1B]/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold bg-[#FF8A65] text-white px-4 py-2 rounded inline-block mb-4">
              Nos Partenaires
            </h3>
            <p className="text-[#8D4E1B] text-lg max-w-2xl mx-auto">
              Un grand merci à nos partenaires qui rendent ce festival possible
            </p>
          </div>

          {/* Grille de logos partenaires — taille + cap homogènes */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((p) => (
              <div key={p.alt} className="group flex items-center justify-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="
                    h-18 md:h-20 w-auto max-w-[180px]
                    object-contain
                    transition-transform duration-300
                    filter brightness-90 hover:brightness-100
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#8D4E1B]/30">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#8D4E1B]">
          <div>© 2025 Felicità Festival. Tous droits réservés.</div>
          <a href="/contact" className="hover:text-[#FF8A65] transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;