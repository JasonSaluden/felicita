#!/usr/bin/env python3
"""
Convertit les images de public/assets en WebP (optimisation web).

- Redimensionnement par catégorie (dossier de premier niveau sous assets/).
- Conserve la transparence des PNG.
- Ignore : SVG, ICO, AVIF, polices, vidéos, et fichiers < SIZE_THRESHOLD.
- Ne supprime AUCUN original : génère un .webp à côté + un manifeste JSON.

Usage : python scripts/convert_images.py
"""

import json
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "assets"
MANIFEST = ROOT / "scripts" / "conversion_manifest.json"

# Taille en dessous de laquelle on ne convertit pas (gain négligeable / churn inutile)
SIZE_THRESHOLD = 30 * 1024  # 30 Ko

# Extensions sources à convertir
CONVERT_EXT = {".jpg", ".jpeg", ".png"}

# Dossiers à ignorer complètement
SKIP_DIRS = {"fonts"}

# Réglages par catégorie : (largeur max, qualité)
CATEGORY = {
    "affiches":    (1600, 82),
    "backgrounds": (1920, 80),
    "photos":      (1800, 80),
    "artistes":    (1200, 82),
    "partners":    (600,  85),
    "mascottes":   (900,  85),
    "logos":       (600,  85),
    "divers":      (1600, 80),
}
DEFAULT = (1600, 82)


def has_alpha(img):
    return img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)


def main():
    if not ASSETS.is_dir():
        sys.exit(f"Dossier introuvable : {ASSETS}")

    manifest = {}
    total_old = 0
    total_new = 0
    skipped = []

    files = sorted(p for p in ASSETS.rglob("*") if p.is_file())
    for src in files:
        ext = src.suffix.lower()
        parts = src.relative_to(ASSETS).parts
        top = parts[0] if len(parts) > 1 else ""

        if top in SKIP_DIRS:
            continue
        if ext not in CONVERT_EXT:
            continue

        size = src.stat().st_size
        if size < SIZE_THRESHOLD:
            skipped.append((src, "petit"))
            continue

        max_w, quality = CATEGORY.get(top, DEFAULT)

        try:
            img = Image.open(src)
            img = ImageOps.exif_transpose(img)  # respecte l'orientation EXIF (photos tel.)

            if has_alpha(img):
                img = img.convert("RGBA")
                save_kwargs = dict(quality=quality, method=6)
            else:
                img = img.convert("RGB")
                save_kwargs = dict(quality=quality, method=6)

            if img.width > max_w:
                new_h = round(img.height * max_w / img.width)
                img = img.resize((max_w, new_h), Image.LANCZOS)

            dst = src.with_suffix(".webp")
            img.save(dst, "WEBP", **save_kwargs)
        except Exception as e:  # noqa
            skipped.append((src, f"erreur: {e}"))
            continue

        new_size = dst.stat().st_size
        total_old += size
        total_new += new_size

        # Clés du manifeste : chemin depuis "assets/..." (sert au remplacement dans le code)
        old_key = "assets/" + str(src.relative_to(ASSETS)).replace("\\", "/")
        new_key = "assets/" + str(dst.relative_to(ASSETS)).replace("\\", "/")
        manifest[old_key] = new_key

        pct = 100 * (1 - new_size / size)
        print(f"  {size/1024:8.0f} Ko -> {new_size/1024:7.0f} Ko  ({pct:5.1f}% )  {old_key}")

    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")

    print("\n=== BILAN ===")
    print(f"Fichiers convertis : {len(manifest)}")
    print(f"Avant : {total_old/1024/1024:7.1f} Mo")
    print(f"Apres : {total_new/1024/1024:7.1f} Mo")
    if total_old:
        print(f"Gain  : {100*(1-total_new/total_old):.1f}%  (-{(total_old-total_new)/1024/1024:.1f} Mo)")
    print(f"\nManifeste : {MANIFEST}")
    if skipped:
        print(f"\nIgnorés ({len(skipped)}) :")
        for p, why in skipped:
            print(f"  [{why}] assets/{p.relative_to(ASSETS)}")


if __name__ == "__main__":
    main()
