import sharp from "sharp";

const { data, info } = await sharp("public/logo-full.png")
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

// Only in the wordmark band (bottom of the image): make near-white transparent
// so letter counters (d, o, S bowls) stop glowing on dark backgrounds.
// The emblem's white ring + droplet shine (upper band) stay untouched — they are design.
const BAND_Y = 620;
for (let y = BAND_Y; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const avg = (r + g + b) / 3;
    const spread = Math.max(r, g, b) - Math.min(r, g, b);
    if (spread < 28 && avg > 232) data[i + 3] = 0;
    else if (spread < 28 && avg > 208) data[i + 3] = Math.round(((232 - avg) / 24) * 255);
  }
}

await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .png()
  .toFile("public/logo-hero.png");
console.log("logo-hero.png written");
