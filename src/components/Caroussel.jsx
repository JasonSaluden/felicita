import React, { useRef, useState, useEffect, useCallback } from "react";

export default function Carousel({
  images = [], // [{ src: "...", caption: "..." }]
  ariaLabel = "Carrousel de photos",
  delay = 4000
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);
  const isPaused = useRef(false);

  const clamp = (v) => Math.max(0, Math.min(v, images.length - 1));

  const goTo = useCallback(
    (i) => {
      const n = clamp(i);
      setIndex(n);
      const track = trackRef.current;
      const slide = track?.querySelectorAll(".carousel-slide")[n];
      if (track && slide) {
        track.scrollTo({
          left: slide.offsetLeft,
          behavior: "smooth",
        });
      }
    },
    [images.length]
  );
  

  const prev = () => {
    isPaused.current = true;
    goTo(index === 0 ? images.length - 1 : index - 1);
  };
  
  const next = () => {
    isPaused.current = true;
    goTo(index === images.length - 1 ? 0 : index + 1);
  };
  

  // Mise à jour index sur scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rAF;
    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const slides = Array.from(el.querySelectorAll(".carousel-slide"));
        const offsets = slides.map((s) => Math.abs(s.getBoundingClientRect().left - el.getBoundingClientRect().left));
        const current = offsets.indexOf(Math.min(...offsets));
        setIndex(current);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rAF);
    };
  }, []);

  // Navigation clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return;
    autoplayRef.current = setInterval(() => {
      if (!isPaused.current) {
        goTo((index + 1) % images.length);
      }
    }, delay);
    return () => clearInterval(autoplayRef.current);
  }, [index, goTo, delay, images.length]);

  if (!images.length) return null;

  return (
    <div
      className="w-full select-none"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onTouchStart={() => (isPaused.current = true)}
      onTouchEnd={() => (isPaused.current = false)}
    >
      <div className="relative">
        {/* Piste */}
        <div
          ref={trackRef}
          aria-label={ariaLabel}
          role="region"
          className="aspect-video w-full overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-2xl border border-gray-200 shadow-md no-scrollbar"
        >
          <div className="flex w-full h-full">
            {images.map((img, i) => (
              <div key={i} className="carousel-slide min-w-full h-full snap-start shrink-0 relative">
                <img
                  src={img.src}
                  alt={img.caption || `Restauration – photo ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1 text-center">
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Boutons */}
        <button
          onClick={prev}
          aria-label="Précédent"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 border shadow"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Suivant"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 border shadow"
        >
          ›
        </button>
      </div>

      {/* Bullets */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à la slide ${i + 1}`}
            onClick={() => { isPaused.current = true; goTo(i); }}
            className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "w-6 bg-gray-800" : "bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>

      {/* Style pour cacher scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
