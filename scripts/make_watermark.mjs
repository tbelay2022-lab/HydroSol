import sharp from "sharp";

const { data, info } = await sharp("public/logo-full.png")
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;

for (let i = 0; i < W * H * 4; i += 4) {
  const w = (data[i] + data[i + 1] + data[i + 2]) / 3;
  const a = data[i + 3];
  let alpha;
  if (a < 10 || w > 235) alpha = 0;
  else alpha = Math.min(255, Math.round((235 - w) * 2.2));
  data[i] = 255;
  data[i + 1] = 255;
  data[i + 2] = 255;
  data[i + 3] = alpha;
}

await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .png()
  .toFile("public/watermark.png");
console.log("watermark.png written", W, "x", H);
