import React from "react";

function BandeauHeader() {
  const bannerColors = ["#FFB347", "#FF9F68", "#FFAE7B"];
  const randomColor =
    bannerColors[Math.floor(Math.random() * bannerColors.length)];
  return (
<div style={{ backgroundColor: randomColor }} className="fixed top-0 left-0 w-full text-white py-2 text-center text-sm font-semibold z-50">
🎉 LA FELICITA FESTIVAL - PROCHAINE ÉDITION : SAMEDI 30 AOÛT 2025 🎉
    </div>
  );
}

export default BandeauHeader;
