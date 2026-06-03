// Banc de poissons en filigrane qui dérive lentement dans le fond des pages.
// À placer comme premier enfant d'un conteneur en `relative isolate`.
const POISSONS = "/assets/mascottes/Felicita_Ed7_Poissons.png";

function PoissonsFond() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src={POISSONS}
        alt=""
        className="absolute top-24 -left-12 w-72 lg:w-96 h-auto opacity-20 animate-drift"
      />
      <img
        src={POISSONS}
        alt=""
        className="absolute top-1/2 -right-10 w-80 lg:w-[30rem] h-auto opacity-[0.16] animate-drift-slow"
      />
      <img
        src={POISSONS}
        alt=""
        className="absolute bottom-20 left-1/3 w-60 lg:w-80 h-auto opacity-[0.13] animate-drift"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}

export default PoissonsFond;
