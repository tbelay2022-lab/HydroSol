import sharp from "sharp";

const IN = "public/logo-src.png";
const { data, info } = await sharp(IN).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

const idx = (x, y) => (y * W + x) * 4;
const isWhite = (x, y) => {
  const i = idx(x, y);
  return data[i] > 235 && data[i + 1] > 235 && data[i + 2] > 235;
};

// BFS flood fill from all border pixels: only outside-connected white becomes transparent
const visited = new Uint8Array(W * H);
const queue = [];
for (let x = 0; x < W; x++) { queue.push([x, 0], [x, H - 1]); }
for (let y = 0; y < H; y++) { queue.push([0, y], [W - 1, y]); }

while (queue.length) {
  const [x, y] = queue.pop();
  if (x < 0 || y < 0 || x >= W || y >= H) continue;
  const v = y * W + x;
  if (visited[v]) continue;
  visited[v] = 1;
  if (!isWhite(x, y)) continue;
  data[idx(x, y) + 3] = 0; // transparent
  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

// soften 1px halo: reduce alpha of white pixels adjacent to transparent ones
for (let y = 1; y < H - 1; y++) {
  for (let x = 1; x < W - 1; x++) {
    const i = idx(x, y);
    if (data[i + 3] === 0) continue;
    if (!isWhite(x, y)) continue;
    const nbTransparent =
      data[idx(x + 1, y) + 3] === 0 || data[idx(x - 1, y) + 3] === 0 ||
      data[idx(x, y + 1) + 3] === 0 || data[idx(x, y - 1) + 3] === 0;
    if (nbTransparent) data[i + 3] = 90;
  }
}

await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .png()
  .toFile("public/logo_t.png");
console.log("done", W, "x", H);
