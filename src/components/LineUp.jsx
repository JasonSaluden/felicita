// components/LineUp.jsx
import PoissonsFond from "./PoissonsFond";

function LineUp() {
  return (
    <section
      className="relative isolate flow-root pb-16 px-6 bg-[#0E5C3A] bg-cover bg-center font-baseRegular"
      style={{ backgroundImage: "url('/assets/BackgroundBody.jpg')" }}
    >
      <PoissonsFond />

      {/* 🫧 Bulle d'annonce qui chevauche le Hero et la LineUp */}
      <div className="relative z-30 -mt-24 mb-12 flex justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="relative rounded-3xl px-8 py-6 shadow-2xl
                          bg-gradient-to-br from-[#F0A5B8]/95 via-[#F0A5B8]/90 to-[#F4D4DC]/80
                          backdrop-blur-lg border border-white/50
                          transform hover:scale-105 transition-all duration-500">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
              Découvrez une programmation unique avec des artistes émergent·e·s et locaux·ales,
              des installations lumineuses et sonores immersives, ainsi que des ateliers créatifs pour tous les âges.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text">
            PROGRAMMATION MUSICALE
          </h2>
        </div>

        {/* Bloc "Ça arrive bientôt" */}
        <div className="flex justify-center">
          <div className="relative bg-white/60 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg px-10 py-14 max-w-2xl w-full text-center overflow-hidden">
            {/* Éléments décoratifs aux coins */}
            <div className="absolute top-4 left-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-4 right-4 w-6 h-6 opacity-70">
              <img
                src="/assets/Elmts/picto3.png"
                alt="Décoration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="inline-block bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-5 border border-orange-300">
              ÉDITION 2026
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 tracking-wide flex flex-col items-center justify-center gap-4">
              Ça arrive bientôt
              <img
                src="/assets/mascottes/Felicita_Ed7_Ecrevisse.png"
                alt="Ecrevisse"
                style={{ width: "300px", height: "auto" }}
                className="object-contain"
              />
            </h3>
            <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
              On peaufine la programmation de cette nouvelle édition. Les
              artistes seront dévoilés très prochainement !
            </p>

            <a
              href="/retrospective"
              className="inline-block bg-[#CB97FF] text-[#0A1F14] px-8 py-3 rounded-full font-bold hover:bg-[#E89BAE] transition-colors"
            >
              Revivre les éditions passées
            </a>
          </div>
        </div>

        {/* Section Playlist SUN - Nouvelle section fusionnée */}
        {/* <div className="mt-20 max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            <div className="mx-8">
              <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-700 tracking-wide">PLAYLIST OFFICIELLE</span>
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
          </div>

          <div className="text-center mb-8">
            <div className="max-w-3xl mx-auto">

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm text-gray-600">En partenariat avec</span>
                  <img
                    src="./assets/partners/SUN-LOGO-JAUNE.png"
                    alt="Logo SUN"
                    className="hover:scale-110 transition-transform duration-300"
                    style={{ width: '6rem', height: '6rem' }}
                  />
                </div>
                <p className="text-lg text-gray-700 mb-2">
                  Découvrez les sons qui rythmeront cette 7<sup>ème</sup>
                  edition
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
            <iframe
              width="100%"
              height="600px"
              autoScroll="true"
              src="https://lesonunique.com/sharing/playlist/472"
              loading="lazy"
              style={{
                border: "none",
                borderRadius: "12px"
              }}
              title="Playlist Felicità Festival 2026 - Partenaire SUN"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default LineUp;
