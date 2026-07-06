import React, { useEffect } from "react";

function Billetterie() {
  // Le widget HelloAsso envoie sa hauteur via postMessage : on ajuste
  // l'iframe en conséquence, en n'acceptant que les messages de helloasso.com.
  useEffect(() => {
    const onMessage = (e) => {
      let host;
      try {
        host = new URL(e.origin).hostname;
      } catch {
        return;
      }
      if (host !== "helloasso.com" && !host.endsWith(".helloasso.com")) return;

      const dataHeight = e.data?.height;
      const haWidgetElement = document.getElementById("haWidget");
      if (haWidgetElement && dataHeight) {
        haWidgetElement.style.height = dataHeight + "px";
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-cover bg-center relative font-baseRegular"
      style={{
        backgroundImage: "url('/assets/backgrounds/billetterie.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl w-full">
        <iframe
          id="haWidget"
          title="Billetterie HelloAsso - La Felicità Festival"
          allowTransparency="true"
          src="https://www.helloasso.com/associations/la-felicita-festival/evenements/la-felicita-2026-la-cite-au-bord-de-ruisseau/widget"
          style={{
            width: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </main>
  );
}

export default Billetterie;
