import React from "react";
import Footer from "../components/Footer";

function Billetterie() {
  const handleIframeLoad = () => {
    window.addEventListener('message', (e) => {
      const dataHeight = e.data.height;
      const haWidgetElement = document.getElementById('haWidget');
      if (haWidgetElement && dataHeight) {
        haWidgetElement.style.height = dataHeight + 'px';
      }
    });
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center relative font-baseRegular"
      style={{
        backgroundImage: "url('/assets/0070 coesamuse_ Chloé André.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl w-full">
        <iframe
          id="haWidget"
          allowTransparency="true"
          src="https://www.helloasso.com/associations/la-felicita-festival/evenements/la-felicita-2025-la-cite-du-vent/widget"
          style={{
            width: '100%',
            border: 'none'
          }}
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </main>
  );
}

export default Billetterie;