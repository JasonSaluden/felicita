"""Détoure le logo La Felicità : enlève le fond bleu, garde le contour rose.

Méthode : flood-fill depuis les bords de l'image. On ne rend transparent que
les pixels « bleus » connectés au bord -> l'intérieur (rose + vert) est préservé.
"""
from collections import deque
from PIL import Image
import numpy as np

SRC = r"C:/Users/jason.saluden/Desktop/DA Felicita 2026/logoFelicita.jpg"
OUT_REPO = r"C:/Users/jason.saluden/felicita/public/assets/logoFelicita.png"
OUT_DESKTOP = r"C:/Users/jason.saluden/Desktop/DA Felicita 2026/logoFelicita_detoure.png"

im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.int16)
h, w, _ = a.shape
R, G, B = a[..., 0], a[..., 1], a[..., 2]

# Un pixel est « fond bleu » si le canal bleu domine nettement et est lumineux.
is_blue = (B > R + 12) & (B > G + 12) & (B > 120)

# Flood-fill 4-connexité depuis tous les pixels du bord qui sont bleus.
visited = np.zeros((h, w), dtype=bool)
dq = deque()
for x in range(w):
    for y in (0, h - 1):
        if is_blue[y, x] and not visited[y, x]:
            visited[y, x] = True
            dq.append((y, x))
for y in range(h):
    for x in (0, w - 1):
        if is_blue[y, x] and not visited[y, x]:
            visited[y, x] = True
            dq.append((y, x))

while dq:
    y, x = dq.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        ny, nx = y + dy, x + dx
        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and is_blue[ny, nx]:
            visited[ny, nx] = True
            dq.append((ny, nx))

# Nettoyage du liseré : on élargit la zone transparente d'1 px pour gommer
# le halo bleuté d'anti-crénelage entre le bleu et le rose.
transparent = visited.copy()
grown = transparent.copy()
grown[1:, :] |= transparent[:-1, :]
grown[:-1, :] |= transparent[1:, :]
grown[:, 1:] |= transparent[:, :-1]
grown[:, :-1] |= transparent[:, 1:]
transparent = grown

alpha = np.where(transparent, 0, 255).astype(np.uint8)
out = np.dstack([a.astype(np.uint8), alpha])
img = Image.fromarray(out, "RGBA")
img.save(OUT_REPO)
img.save(OUT_DESKTOP)

print(f"Pixels rendus transparents : {transparent.sum()} / {h*w} "
      f"({100*transparent.sum()/(h*w):.1f}%)")
print("Enregistré :", OUT_REPO)
print("Enregistré :", OUT_DESKTOP)
