#!/usr/bin/env python3
"""
Met à jour les références d'images dans le code après conversion WebP.
Lit scripts/conversion_manifest.json et remplace chaque ancien chemin
(.jpg/.jpeg/.png) par sa version .webp dans les fichiers source.

Usage : python scripts/update_refs.py
"""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "scripts" / "conversion_manifest.json"

# Fichiers à scanner
TARGET_EXT = {".js", ".jsx", ".css", ".html", ".json"}
SCAN_DIRS = [ROOT / "src"]
EXTRA_FILES = [ROOT / "public" / "index.html"]


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    # Du plus long au plus court pour éviter tout chevauchement de préfixe
    pairs = sorted(manifest.items(), key=lambda kv: len(kv[0]), reverse=True)

    files = list(EXTRA_FILES)
    for d in SCAN_DIRS:
        files += [p for p in d.rglob("*") if p.is_file() and p.suffix.lower() in TARGET_EXT]

    total = 0
    for f in files:
        text = f.read_text(encoding="utf-8")
        original = text
        count = 0
        for old, new in pairs:
            if old in text:
                n = text.count(old)
                text = text.replace(old, new)
                count += n
        if text != original:
            f.write_text(text, encoding="utf-8")
            total += count
            print(f"  {count:3d}  {f.relative_to(ROOT)}")

    print(f"\nTotal remplacements : {total}")


if __name__ == "__main__":
    main()
